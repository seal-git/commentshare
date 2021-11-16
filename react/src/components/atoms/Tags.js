import React from 'react';
import PropTypes from 'prop-types';
import {css} from "@emotion/react";

const TemplateStyle = css`
  color: #000000E5;
  background: #79AFFF33;
  border: 2px solid #79AFFF;

  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  line-height: 2px;

  display: inline-block;

  border-radius: 100px;
  padding: 2px 13px;

`

const SampleStyle = css`
  ${TemplateStyle};
`;

const BasicStyle = css`
  ${TemplateStyle};
`;

function Tags(props) {
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
        <div css={myStyle}><p>{props.text}</p></div>
    )
}

Tags.propTypes = {
    text: PropTypes.string.isRequired
};


export default Tags;