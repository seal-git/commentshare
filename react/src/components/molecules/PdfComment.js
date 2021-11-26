import React, {useState, useEffect, useRef} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";
import SendCommentLayer from "./SendCommentLayer";


/*
pdf-areaにコメントをオーバーレイするコンポーネント
 */

//仮のコメントリスト
const tmpCommentList = [
    {
        "name": "user1",
        "time": "1111",
        "value": "コメント1",
        "span-page": 1,
        "span-left": 99.126,
        "span-top": 110.38,
        "offset": -200
    },
    {
        "name": "user2",
        "time": "2222",
        "value": "コメント2",
        "span-page": 1,
        "span-left": 251,
        "span-top": 623,
        "offset": -100
    },
    {
        "name": "user3",
        "time": "3333",
        "value": "コメント3",
        "span-page": 1,
        "span-left": 251,
        "span-top": 623,
        "offset": 50
    }
];


function PdfComment(props) {
    const TemplateStyle = css`
      background: transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
      canvas{
        background: rgba(30,0,30,0.3);
        
      }
    `
    const BasicStyle = css`
      ${TemplateStyle};
    `
    const [context, setContext] = useState(null)
    const [mousedown, setMousedown] = useState(false)
    const [formVisible, setFormVisible] = useState("invisible")
    const startX = useRef(null)
    const startY = useRef(null)
    const formX = useRef(null)
    const formY = useRef(null)


    useEffect(() => {
        let canvas = document.getElementById("pdf-comment");
        const canvas_ = canvas.getContext("2d");
        setContext(canvas_)
    }, [])

    function onmousemove(event) {
        if (mousedown) {
            const canvas = document.getElementById("pdf-comment");
            const canvas_ = canvas.getContext("2d");
            // canvas_.fillRect(event.pageX,event.pageY,30,30)
            let canvasX = canvas.getClientRects()[0]["x"]
            let canvasY = canvas.getClientRects()[0]["y"]
            // console.log(
            //     "onmousemove",
            //     event.nativeEvent.offsetX,
            //     event.nativeEvent.offsetY,
            //     startX.current,
            //     startY.current,
            //     startX.current + 0.5,
            //     startY.current + 0.5,
            //     event.nativeEvent.offsetX - (startX.current + 0.5) ,
            //     event.nativeEvent.offsetY - (startY.current + 0.5)
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
                event.nativeEvent.offsetX - (startX.current + 0.5) ,
                event.nativeEvent.offsetY - (startY.current + 0.5)
            )
            setFormVisible("moving");
        }
    }

    function onmousedown(event) {
        setMousedown(true);
        setFormVisible("invisible");
        startX.current = event.nativeEvent.offsetX;
        startY.current = event.nativeEvent.offsetY;
        const canvas = document.getElementById("pdf-comment");
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
        console.log("onmousedown", event.nativeEvent.offsetX, event.nativeEvent.offsetY, canvas_x, canvas_y)
        canvas.addEventListener(
            "mousemove",
            onmousemove,
            false
        )
    }

    function onmouseup(event) {
        const canvas = document.getElementById("pdf-comment");
        const canvas_ = canvas.getContext("2d");
        // canvas_.fillRect(event.pageX,event.pageY,30,30)
        let canvas_x = canvas.getClientRects()[0]["x"]
        let canvas_y = canvas.getClientRects()[0]["y"]
        // console.log("onmouseup", event.pageX, event.pageY)
        canvas.removeEventListener(
            "mousemove",
            onmousemove,
            false
        )
        startX.current = null;
        startY.current = null;
        formX.current = event.nativeEvent.offsetX
        formY.current = event.nativeEvent.offsetY
        setMousedown(false)
        if(formVisible==="moving"){
            setFormVisible("visible")
            formX.current = event.nativeEvent.offsetX;
            formY.current = event.nativeEvent.offsetY;
        }else{
            setFormVisible("invisible")
        }
    }

    return (
        <div className={"comment-rect-wrapper"}>
            <div className={"comment-rect"} css={`position: relative`}
                 css={BasicStyle}
                 onMouseDown={onmousedown}
                 onMouseUp={onmouseup}
                 onMouseMove={onmousemove}
            >
                <canvas
                    id={'pdf-comment'}
                    width={props.pageWidth}
                    height={props.pageHeight}
                >
                </canvas>
            </div>
                <SendCommentLayer
                    formVisible={formVisible}
                    formX={formX.current}
                    formY={formY.current}
                />


        </div>
    )
}

export default PdfComment