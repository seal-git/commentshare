import React, {useState, useEffect, useRef} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";


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

const TemplateStyle = css`
  background: bisque;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  canvas {
    margin: auto;

  }
`

const BasicStyle = css`
  ${TemplateStyle};
`

function PdfComment(props) {
    const [context, setContext] = useState(null)
    const [mousedown, setMousedown] = useState(false)
    const startX = useRef(null)
    const startY = useRef(null)


    useEffect(() => {
        const canvas = document.getElementById("pdf-comment");
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
            //     event.pageX,
            //     event.pageY,
            //     startX.current,
            //     startY.current,
            //     startX.current - canvasX,
            //     startY.current - canvasY,
            //     event.pageX - startX.current,
            //     event.pageY - startY.current
            //     )
            canvas_.clearRect(
                0,
                0,
                canvas.clientWidth,
                canvas.clientHeight
            )
            canvas_.strokeRect(
                startX.current - canvasX,
                startY.current - canvasY,
                event.pageX - startX.current,
                event.pageY - startY.current
            )
        }
    }

    function onmousedown(event) {
        setMousedown(true);
        startX.current = event.pageX;
        startY.current = event.pageY;
        const canvas = document.getElementById("pdf-comment");
        const canvas_ = canvas.getContext("2d");
        let canvas_x = canvas.getClientRects()[0]["x"]
        let canvas_y = canvas.getClientRects()[0]["y"]
        canvas_.clearRect(
            0,
            0,
            canvas.clientWidth,
            canvas.clientHeight
        )
        // console.log("onousedown", event.pageX, event.pageY, canvas_x, canvas_y)
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
        setMousedown(false)
    }

    return (
        <div className={"comment-rect"}
             css={BasicStyle}
             onMouseDown={onmousedown}
             onMouseUp={onmouseup}
             onMouseMove={onmousemove}
        >
            <canvas id={'pdf-comment'}>
            </canvas>
        </div>
    )
}

export default PdfComment