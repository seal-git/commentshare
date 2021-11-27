import React, {useState, useEffect, useRef} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";
import autosize from "autosize";

/*
コメントを送信するポップアップを表示するレイヤー
 */
function SendCommentLayer(props) {
    const value = useRef(null);
    const TemplateStyle = css`
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
    let BasicStyle;
    if (props.formVisible === "visible") {
        console.log("form visible", props.formX, props.formY)
        let textarea = document.getElementById("send-comment-textarea")
        if (textarea !== null) {
            textarea.focus({preventScroll: true});
        }
        BasicStyle = css`
          ${TemplateStyle};
          opacity: 1;
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

        BasicStyle = css`
          ${TemplateStyle};
          opacity: 0;
        `
    }

    function onclick() {
        let comment = {
            "rect": props.rect,
            "comment": value.current.value
        };
        console.log("submit", comment);
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
        props.dispatch({
            type: "add",
            comment: comment
        })
        props.setFormVisible("invisible");
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
        <div css={BasicStyle}>
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

export default SendCommentLayer

;