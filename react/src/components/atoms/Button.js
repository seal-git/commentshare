import React from 'react';
import PropTypes from 'prop-types';
import {css} from "@emotion/react";

const TemplateStyle = css`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 8.5px;
  text-align: center;
  height: 32px;
  width: 273px;
  left: 584px;
  top: 438px;
  border-radius: 2px;
`

const PrimaryStyle = css`
  ${TemplateStyle};
  color: #FFFFFF;
  background-color: #56B280;
  border: 1px solid #4E966F;
`;

const SecondaryStyle = css`
  ${TemplateStyle};
  color: #448562;
  background-color: #56B28033;
  border: 1px solid #4E966F80;
`;

function Button(props) {
    let myStyle;
    if (props.label === 'primary') {
        myStyle = PrimaryStyle;
    } else if (props.label === 'secondary') {
        myStyle = SecondaryStyle;
    }
    myStyle = css`
      ${myStyle};
      ${props.style};
    `
    return (
        <div css={myStyle}><p>{props.text}</p></div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};


export default Button;