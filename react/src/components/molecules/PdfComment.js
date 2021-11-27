import React, {useState, useEffect, useRef, useReducer} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";
import SendCommentLayer from "./SendCommentLayer";
import ShowCommentLayer from "./ShowCommentLayer";


/*
pdf-areaにコメントをオーバーレイするコンポーネント
 */

//仮のコメントリスト
const tmpCommentList = [
    {
        comment: "sss",
        rect: {x: 144.5, y: 129.5, w: 59.5, h: 48.5}
    },
    {
        comment: "aaa",
        rect: {x: 184.5, y: 116.5, w: 77.5, h: 87.5}
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
    const [formVisible, setFormVisible] = useState("invisible")
    const [popupVisible, setPopupVisible] = useState(false)
    const [mouseX, setMouseX] = useState(null)
    const [mouseY, setMouseY] = useState(null)
    const [commentList, dispatch] = useReducer(reducerFunc, [])
    const mousedown = useRef(false)
    const startX = useRef(null)
    const startY = useRef(null)
    const formX = useRef(-1000) //コメント送信フォームの表示位置x
    const formY = useRef(-1000) //コメント送信フォームの表示位置y
    // const mouseX = useRef(null)
    // const mouseY = useRef(null)
    const rect = useRef({
        "x": null,
        "y": null,
        "w": null,
        "h": null,
    })
    useEffect(() => {
        tmpCommentList.forEach(function(comment_){
            dispatch({
                type: "add",
                comment: comment_
            })
        })
    }, [])
    useEffect(() => {
        const canvas = document.getElementById("highlight-canvas");
        const context = canvas.getContext("2d");
        context.fillStyle = "rgba(0,0,255,0.1)"
        context.clearRect(
            0,
            0,
            canvas.clientWidth,
            canvas.clientHeight
        )
        commentList.forEach((comment) => {
            let rect = comment.rect;
            context.fillRect(rect.x, rect.y, rect.w, rect.h);
        })
    },)

    function reducerFunc(state, action) {
        if (action.type === "add") {
            console.log([...state, action.comment])
            return [...state, action.comment]
        } else {
            throw `Invalid type:${action.type}`
        }
    }

    function draw(event) {
        //マウスが動いてるときに描画する
        setMouseX(event.offsetX);
        setMouseY(event.offsetY);
        if (mousedown.current === true) {
            //ボタン押下中は四角形の描画が走る
            setPopupVisible(false)
            const canvas = document.getElementById("select-canvas");
            const canvas_ = canvas.getContext("2d");
            // context.fillRect(event.pageX,event.pageY,30,30)
            let canvasX = canvas.getClientRects()[0]["x"]
            let canvasY = canvas.getClientRects()[0]["y"]
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
                startX.current + 0.5,
                startY.current + 0.5,
                event.offsetX - (startX.current + 0.5),
                event.offsetY - (startY.current + 0.5)
            )
            setFormVisible("moving");
        }
    }

    function onmousedown(event) {
        mousedown.current = true;
        setFormVisible("invisible");
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
        if (formVisible === "moving") {
            setFormVisible("visible")
            formX.current = event.nativeEvent.offsetX;
            formY.current = event.nativeEvent.offsetY;
        } else {
            setFormVisible("invisible")
        }
        console.log("onmouseup", event.nativeEvent.offsetX, event.nativeEvent.offsetY, canvas_x, canvas_y, mousedown.current)
    }
    function popup(event){
        //描画中でないならポップアップを表示する
        if (mousedown.current !== true && formVisible!=="visible"){
            setPopupVisible(true)
            let rect = document.getElementById("pdf-comment-wrapper").getBoundingClientRect()
            let pdfX = rect.left + window.pageXOffset;
            let pdfY = rect.top + window.pageYOffset;
            setMouseX(event.nativeEvent.pageX - pdfX)
            setMouseY(event.nativeEvent.pageY - pdfY)
            // console.log(mouseX, mouseY)
        }else{
            setPopupVisible(false)
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
                    formVisible={formVisible}
                    formX={formX.current}
                    formY={formY.current}
                    rect={rect.current}
                    dispatch={dispatch}
                    setFormVisible={setFormVisible}
                />
            </div>
            <div className={"show-comment-layer-wrapper"} onMouseMove={onmousemove}>
                <ShowCommentLayer
                    popupVisible = {popupVisible}
                    setPopupVisible = {setPopupVisible}
                    mouseX = {mouseX}
                    mouseY = {mouseY}
                    commentList={commentList}
                />
            </div>


        </div>
    )
}

export default PdfComment