import React, {useState, useEffect, useRef} from 'react';
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import profileImage from "../assets/profile_image.png"
import {css} from "@emotion/react";

function Comment(props) {
    const TemplateStyle = css`
      border: 1px solid #333333;
      border-radius: 5px;
      background: white;
      padding: 5px;
    `;
    const 横flex = css`
      display: flex;
      flex-direction: row;
      gap: 10px;
    `
    const 縦flex = css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 30px;
    `
    const アカウント = css`
      font-size: small;
      color: gray;
      line-height: 15px;
    `
    const 名前 = css`
      font-size: small;
      line-height: 15px;
    `
    const 本文 = css`
      text-align: left;
      margin-left: 5px;
      vertical-align: text-top;
    `
    const 時間= css`
      text-align: left;
      margin-left: 5px;
      vertical-align: text-top;
      font-size: small;
      color: gray;
    `

    return (
        <div css={TemplateStyle}>
            <div css={横flex}>
                <div>
                    <img src={profileImage}/>
                </div>
                <div css={縦flex}>
                    <div css={アカウント}>@test_user</div>
                    <div css={名前}>テストユーザー</div>
                </div>
            </div>
            <div css={本文}>
                {props.comment.comment}
            </div>
            <div css={時間}> 12:00 2021/11/28</div>
        </div>
    )
}

export default Comment;