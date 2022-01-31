import React, {useState, useEffect, useRef} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";
import autosize from "autosize";
import axios from 'axios';
import PropTypes from "prop-types";

/*
コメントを送信するポップアップを表示するレイヤー
 */
function SendCommentLayer(props) {
    const value = useRef(null);
    let wrapperStyle = css`
      background: violet;
      position: absolute;
      top: ${props.formY}px;
      left: ${props.formX}px;
      z-index: 3;

      textarea {
        resize: none;
        line-height: 1.2;
        width: 100%;
      }
    `;

    if (props.canvasState === "form") {
        // console.log("form visible", props.formX, props.formY)
        let textarea = document.getElementById("send-comment-textarea")
        if (textarea !== null) {
            textarea.focus({preventScroll: true});
        }
        wrapperStyle = css`
          ${wrapperStyle};
          opacity: 1;
          pointer-events: auto;
        `
    } else {
        let button = document.getElementById("send-comment-button")
        if (button !== null) {
            button.setAttribute("disabled", true)
        }
        let textarea = document.getElementById("send-comment-textarea");
        // console.log(textarea)
        if (textarea !== null) {
            textarea.value = "";
        }
        wrapperStyle = css`
          ${wrapperStyle};
          opacity: 0;
          pointer-events: none;
        `
    }

    function onclick() {
        let comment = {
            "pdf_id": props.pdfId,
            "value": value.current.value,
            "span_page": props.pageNumber,
            "rect_x": props.rect.x,
            "rect_y": props.rect.y,
            "rect_w": props.rect.w,
            "rect_h": props.rect.h,
        };
        axios.post('/api/add_comment', {data: comment})
            .then(result => {
                //送信成功時はコメントに時間を付けてcommentListを更新する
                console.log(result["data"])
                comment["time"] = result.data.time
                console.log("submit", comment);
                props.dispatch({
                    type: "add",
                    comment: comment
                })
            })
            .catch(error => {
                console.log('error')
            })
        const canvas = document.getElementById("select-canvas");
        if (canvas !== null) {
            const canvas_ = canvas.getContext("2d");
            canvas_.clearRect(
                0,
                0,
                canvas.clientWidth,
                canvas.clientHeight
            )
        }
        props.setCanvasState("stop");
        value.current.value = "";
    }

    function onsubmit(event) {
        //enterを押しても送信されないようにする
        event.preventDefault();
    }

    function onkeydown(event) {
        //ctrl+enterで送信する
        if (event.ctrlKey && event.keyCode == 13) {
            document.getElementById("send-comment-button").click();
            event.preventDefault();
        }
    }

    let textarea = document.getElementById("send-comment-textarea");
    if (textarea !== null) {
        textarea.addEventListener("input", () => {
            autosize(textarea);
            let button = document.getElementById("send-comment-button")
            if (button !== null) {
                if (value.current.value.length === 0) {
                    button.setAttribute("disabled", true);
                } else {
                    button.removeAttribute("disabled")
                }
            }
        })

    }


    return (
        <div css={wrapperStyle}>
            <form
                onSubmit={onsubmit}
                onKeyDown={onkeydown}
            >
                    <textarea
                        id={"send-comment-textarea"}
                        type={"text"}
                        name={"comment"}
                        ref={value}
                    />
                <input
                    id={"send-comment-button"}
                    type={"button"}
                    value={"Submit"}
                    onClick={onclick}
                />
            </form>
        </div>
    )
}

SendCommentLayer.propTypes = {
    canvasState: PropTypes.string,
    setCanvasState: PropTypes.func,
    formX: PropTypes.number,
    formY: PropTypes.number,
    pdfId: PropTypes.string,
    pageNumber: PropTypes.number,
    rect: PropTypes.object,
    dispatch: PropTypes.func,
}

export default SendCommentLayer;