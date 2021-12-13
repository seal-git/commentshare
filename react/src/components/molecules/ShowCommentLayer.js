import React, {useState, useEffect, useRef} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";
import PropTypes from "prop-types";
import Comment from "./Comment";

function ShowCommentLayer(props) {
    const TemplateStyle = css`
      position: absolute;
      top: ${props.mouseY.current}px;
      left: ${props.mouseX.current + 40}px;
      z-index: 4;

      .balloon {
        position: relative;
        background: silver;
        min-height: 100px;
        min-width: 200px;
        padding: 5px;
      }

      .balloon::before {
        content: "";
        position: absolute;
        top: 0;
        left: -30px;
        border: 15px solid transparent;
        border-right: 15px solid silver;
      }

      .comment {
        border: 1px solid #333333;
        background: #1ea7fd;
        margin: 5px;
      }
    `;
    let BasicStyle;
    if (props.canvasState !== "stop") {
        BasicStyle = css`
          ${TemplateStyle};
          visibility: hidden;
        `
    } else {
        BasicStyle = css`
          ${TemplateStyle};
        `
    }

    function is座標上のコメント(comment, mouseX, mouseY) {
        if (comment.rect_x <= mouseX &&
            mouseX <= comment.rect_x + comment.rect_w &&
            comment.rect_y <= mouseY &&
            mouseY <= comment.rect_y + comment.rect_h
        ) {
            return true;
        } else {
            return false;
        }
    };
    let 座標上commentList = [];
    if (props.canvasState === "stop") {
        座標上commentList = props.commentList.filter(
            comment => is座標上のコメント(comment, props.mouseX.current, props.mouseY.current)
        );
        if (座標上commentList.length === 0) {
            BasicStyle = css`
              ${TemplateStyle};
              visibility: hidden;
            `
        }
    }
    // if (座標上commentList.length > 0) {
    //     console.log(座標上commentList)
    // }
    let 表示用commentList = []
    if (props.mouseX !== null && props.mouseY !== null) {
        let count = 0;
        座標上commentList.forEach(function (comment_) {
            let oneComment = (
                <Comment key={count} comment={comment_}/>
            )
            表示用commentList.push(oneComment);
            count++;
        })
    }

    return (
        <div css={BasicStyle}>
            <div className={"balloon"}>
                {表示用commentList}
            </div>
        </div>
    )
}

ShowCommentLayer.propTypes = {
    canvasState: PropTypes.string,
    setCanvasState: PropTypes.func,
    mouseX: PropTypes.number,
    mouseY: PropTypes.number,
    commentList: PropTypes.array,
    pageNumber: PropTypes.number,
}

export default ShowCommentLayer;