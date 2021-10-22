import React from 'react';
import {css} from "@emotion/react";
import UploadPanel from "../molecules/UploadPanel";
import SearchPanel from "../molecules/SearchPanel";

const TemplateStyle = css`
  display: flex;
  width: 100%;
  height: 40px;
  gap: 10px;
`
const SampleStyle = css`
  ${TemplateStyle};
  background-color: blueviolet;
`;
const BasicStyle = css`
  ${TemplateStyle};
  background-color: black;
`;

function Header(props) {
    let myStyle;
    if (props.label === 'sample') {
        myStyle = SampleStyle;
    } else if (props.label === 'basic') {
        myStyle = BasicStyle;
    }
    myStyle = css`
      ${myStyle};
      ${props.style};
    `
    return (
        <div css={myStyle}>
            <SearchPanel label={props.label}/>
            <UploadPanel label={props.label}/>
        </div>
    )
}


export default Header;