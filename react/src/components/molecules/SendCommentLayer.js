import React, {useState, useEffect, useRef} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";

function SendCommentLayer(props) {
    const value = useRef(null);
    const TemplateStyle = css`
      background: violet;
      position: absolute;
      top: ${props.formY}px;
      left: ${props.formX}px;
      z-index: 2;
    `;
    let BasicStyle;
    if (props.formVisible === "visible") {
        console.log("send", props.formX, props.formY)
        BasicStyle = css`
          ${TemplateStyle};
          visibility: visible;
        `
    } else {
        BasicStyle = css`
          ${TemplateStyle};
          visibility: hidden;
        `
    }
    function onsubmit(){
        console.log("submit", value.current.value)
    }

    return (<div css={BasicStyle}>
            <form>
                <label>
                    Comment
                    <input
                        type={"text"}
                        name={"comment"}
                        ref={value}
                    />
                </label>
                <input type={"button"} value={"Submit"} onClick={onsubmit}/>
            </form>
        </div>
    )
}

export default SendCommentLayer

;