import React, {useState, useEffect, useRef, useReducer} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";
import SendCommentLayer from "./SendCommentLayer";
import ShowCommentLayer from "./ShowCommentLayer";
import PropTypes from "prop-types";
import PdfArea from "./PdfArea";
import axios from "axios";


/*
pdf-areaにコメントをオーバーレイするコンポーネント
 */

//仮のコメントリスト
const tmpCommentList = [
    {
        id: 1,
        name: "test_user",
        value: "ff", //サーバー側の初期値は"ss"
        span_page: 1,
        rect_x: 144.5,
        rect_y: 129.5,
        rect_w: 59.5,
        rect_h: 48.5,
        time: "2021-12-11 08:00:00"
    },
    {
        id: 2,
        name: "test_user",
        value: "fff", //サーバー側の初期値は"ff"
        span_page: 1,
        rect_x: 184.5,
        rect_y: 116.5,
        rect_w: 77.5,
        rect_h: 87.5,
        time: "2021-12-11 09:00:00"
    },

];


function PdfComment(props) {
    const TemplateStyle = css`
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: ${props.pageWidth}px;
      height: ${props.pageHeight}px;

      .canvas-layer {
        position: relative;
      }

      .send-comment-layer-wrapper {
        position: relative;
      }

      .show-comment-layer-wrapper {
        position: relative;
      }

      canvas {
        position: absolute;
        top: 0;
        left: 0;
      }

      #select-canvas {
        z-index: 3;
      }

      #highlight-canvas {
        //background: rgba(30, 0, 30, 0.3);
        z-index: 2;
      }
    `
    const BasicStyle = css`
      ${TemplateStyle};
    `
    const [canvasState, setCanvasState] = useState("stop")
    /*
    stop: マウスが停止している状態。何のボタンも押されていない。ポップアップが出る。
    move: マウスが動いている状態。何のボタンも押されていない。
    mousedown: マウスのボタンが押された状態。
    drag: ボタンが押された状態でマウスが動いている状態。描画モードになる。
    form: コメント入力モード。描画モードが終わるとこのモードになる。
     */
    // const [mouseX, setMouseX] = useState(null)
    // const [mouseY, setMouseY] = useState(null)
    const [commentList, dispatch] = useReducer(reducerFunc, [])
    const mousedown = useRef(false)
    const mouseX = useRef(null)
    const mouseY = useRef(null)
    const startX = useRef(null)
    const startY = useRef(null)
    const formX = useRef(-1000) //コメント送信フォームの表示位置x
    const formY = useRef(-1000) //コメント送信フォームの表示位置y
    const rect = useRef({
        "x": null,
        "y": null,
        "w": null,
        "h": null,
    }) //描画中の四角形の情報

    useEffect(() => {
        // 初回描画時にコメントをロードする
        tmpCommentList.forEach(function (comment_) {
            dispatch({
                type: "add",
                comment: comment_
            })
        })
        let data = {
            pdf_id: props.pdfId
        }
        axios.post('/api/get_comment', {data: data})
            .then(result => {
                console.log(result["data"])
                result["data"].forEach(function (comment_) {
                    dispatch({
                        type: "add",
                        comment: comment_
                    })
                })
            })
            .catch(error => {
                console.log('error')
            })
    }, [])
    useEffect(() => {
        console.log(canvasState)
    }, [canvasState])
    useEffect(() => {
        // commentListの更新時に走る関数
        // コメント部分をハイライトする
        const canvas = document.getElementById("highlight-canvas");
        console.log("hightlight", canvas, commentList)
        const context = canvas.getContext("2d");
        context.fillStyle = "rgba(0,0,255,0.1)"
        context.clearRect(
            0,
            0,
            canvas.clientWidth,
            canvas.clientHeight
        )
        commentList.forEach((comment) => {
            context.fillRect(
                comment.rect_x,
                comment.rect_y,
                comment.rect_w,
                comment.rect_h);
        })

    }, [commentList])

    function reducerFunc(state, action) {
        if (action.type === "add") {
            // console.log([...state, action.comment])
            return [...state, action.comment]
        } else {
            throw `Invalid type:${action.type}`
        }
    }

    function draw(event) {
        //マウスを押しながら動かしたときに描画する
        mouseX.current = event.offsetX;
        mouseY.current = event.offsetY;
        if (mousedown.current === true) {
            //ボタン押下中は四角形の描画が走る
            setCanvasState("drag")
            const canvas = document.getElementById("select-canvas");
            const canvas_ = canvas.getContext("2d");
            // context.fillRect(event.pageX,event.pageY,30,30)
            // let canvasX = canvas.getClientRects()[0]["x"]
            // let canvasY = canvas.getClientRects()[0]["y"]
            // console.log(
            //     "onmousemove",
            //     event.offsetX,
            //     event.offsetY,
            //     startX.current,
            //     startY.current,
            //     startX.current + 0.5,
            //     startY.current + 0.5,
            //     event.offsetX - (startX.current + 0.5),
            //     event.offsetY - (startY.current + 0.5)
            // )
            canvas_.clearRect(
                0,
                0,
                canvas.clientWidth,
                canvas.clientHeight
            )
            canvas_.strokeRect(
                startX.current + 0.5, // canvas上でボケないように0.5を足している
                startY.current + 0.5,
                event.offsetX - (startX.current + 0.5),
                event.offsetY - (startY.current + 0.5)
            )
        }
    }

    function onmousedown(event) {
        mousedown.current = true;
        setCanvasState("mousedown");
        startX.current = event.nativeEvent.offsetX;
        startY.current = event.nativeEvent.offsetY;
        const canvas = document.getElementById("select-canvas");
        canvas.style.zIndex = "5"
        const canvas_ = canvas.getContext("2d");
        console.log(props)
        let canvas_x = canvas.getClientRects()[0]["x"]
        let canvas_y = canvas.getClientRects()[0]["y"]
        canvas_.clearRect(
            0,
            0,
            canvas.clientWidth,
            canvas.clientHeight
        )
        console.log("onmousedown", event.nativeEvent.offsetX, event.nativeEvent.offsetY, canvas_x, canvas_y, mousedown.current)
        canvas.addEventListener(
            "mousemove",
            draw,
            false
        )
    }

    function onmouseup(event) {
        const canvas = document.getElementById("select-canvas");
        canvas.style.zIndex = "3"
        const canvas_ = canvas.getContext("2d");
        // canvas_.fillRect(event.pageX,event.pageY,30,30)
        let canvas_x = canvas.getClientRects()[0]["x"]
        let canvas_y = canvas.getClientRects()[0]["y"]
        canvas.removeEventListener(
            "mousemove",
            draw,
            false
        )
        rect.current = {
            "x": startX.current + 0.5,
            "y": startY.current + 0.5,
            "w": event.nativeEvent.offsetX - (startX.current + 0.5),
            "h": event.nativeEvent.offsetY - (startY.current + 0.5)
        }
        startX.current = null;
        startY.current = null;
        formX.current = event.nativeEvent.offsetX
        formY.current = event.nativeEvent.offsetY
        mousedown.current = false
        if (canvasState === "drag") {
            setCanvasState("form")
            formX.current = event.nativeEvent.offsetX;
            formY.current = event.nativeEvent.offsetY;
        } else {
            setCanvasState("stop")
        }
        console.log("onmouseup", event.nativeEvent.offsetX, event.nativeEvent.offsetY, canvas_x, canvas_y, mousedown.current)
    }

    const timer = useRef(null);

    function popup(event) {
        //描画中でない時、マウスが0.25秒以上止まっていたらポップアップを表示する
        if (canvasState === "stop") {
            setCanvasState("move")
        }
        if (mousedown.current !== true
            && canvasState === "move") {
            clearTimeout(timer.current)
            timer.current = setTimeout(() => {
                setCanvasState("stop")
            }, 250)

            let rect = document.getElementById("pdf-comment-wrapper").getBoundingClientRect()
            let pdfX = rect.left + window.pageXOffset;
            let pdfY = rect.top + window.pageYOffset;
            mouseX.current = event.nativeEvent.pageX - pdfX;
            mouseY.current = event.nativeEvent.pageY - pdfY;
            // console.log(mouseX, mouseY)
        }
    }


    return (
        <div
            className={"pdf-comment-wrapper"}
            id={"pdf-comment-wrapper"}
            css={BasicStyle}
            onMouseMove={popup}
        >
            <div className={"canvas-layer"}>
                <canvas
                    id={'select-canvas'}
                    width={props.pageWidth}
                    height={props.pageHeight}
                    onMouseDown={onmousedown}
                    onMouseUp={onmouseup}
                    onDragEnd={onmouseup}  //upでは発火しない時がある？
                >
                </canvas>
                <canvas
                    id={'highlight-canvas'}
                    width={props.pageWidth}
                    height={props.pageHeight}
                >
                </canvas>
            </div>
            <div className={"send-comment-layer-wrapper"}>
                <SendCommentLayer
                    canvasState={canvasState}
                    setCanvasState={setCanvasState}
                    formX={formX.current}
                    formY={formY.current}
                    rect={rect.current}
                    dispatch={dispatch}
                    pageNumber={props.pageNumber}
                    pdfId={props.pdfId}
                />
            </div>
            <div className={"show-comment-layer-wrapper"}>
                <ShowCommentLayer
                    canvasState={canvasState}
                    setCanvasState={setCanvasState}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    commentList={commentList}
                    pageNumber={props.pageNumber}
                />
            </div>


        </div>
    )
}

PdfComment.propTypes = {
    sample: PropTypes.bool,
    pdfId: PropTypes.string,
    pageNumber: PropTypes.number,
    pageHeight: PropTypes.number,
    pageWidth: PropTypes.number,
    style: PropTypes.string,
}

PdfComment.defaultProps = {
    sample: false,
}

export default PdfComment