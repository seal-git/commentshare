import React from 'react';
import {ReactComponent as Icon} from '../assets/upload-icon.svg';
import {css} from "@emotion/react";

const TemplateStyle = css`
  svg{
    height: 100%;
    width: auto;
    fill: white;
  }
  height: 100%;
`
const SampleStyle = css`
  ${TemplateStyle};
  background-color: aqua;
  svg {
    background-color: red;
  }
`;
const BasicStyle = css`
  ${TemplateStyle};
  background-color: black;
`;

function UploadIcon(props) {
    let myStyle;
    if(props.label === 'sample'){
        myStyle = SampleStyle;
    }else if(props.label === 'basic'){
        myStyle = BasicStyle;
    }
    myStyle = css`
      ${myStyle};
      ${props.style};
    `

    return (
        <div css={myStyle}>
            <Icon/>
        </div>
    )
}

export default UploadIcon;