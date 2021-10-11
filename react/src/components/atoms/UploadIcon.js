import React from 'react';
import {ReactComponent as Icon} from '../assets/upload-icon.svg';
import {css} from "@emotion/react";

function UploadIcon(props) {
    const myStyle = css`
      ${props.style};
      svg{
        height: 100%;
        width: auto;
        fill: white;
      }
    `;

    return (
        <div css={myStyle}>
            <Icon/>
        </div>
    )
}

export default UploadIcon;