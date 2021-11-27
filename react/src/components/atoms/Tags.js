import React from 'react';
import PropTypes from 'prop-types';
import {css} from "@emotion/react";

const TemplateStyle = css`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  line-height: 2px;

  display: inline-block;
  border-radius: 100px;
  padding: 2px 13px;

`

const BlueStyle = css`
  ${TemplateStyle};
  color: #000000E5;
  background: #79AFFF33;
  border: 2px solid #79AFFF;
`;

const RedStyle = css`
  ${TemplateStyle};
  color: #000000E5;
  background: #FF10101F;
  border: 2px solid #FF101099;
`;

const YellowStyle = css`
  ${TemplateStyle};
  color: #000000E5;
  background: #FEEE5F40;
  border: 2px solid #FFE600;
`;

const GreenStyle = css`
  ${TemplateStyle};
  color: #000000E5;
  background: #56B28033;
  border: 2px solid #56B280E5;
`;



function Tags(props) {
    let myStyle;
    if (props.label === 'blue') {
        myStyle = BlueStyle;
    } else if (props.label === 'red') {
        myStyle = RedStyle;
    } else if (props.label === 'yellow') {
        myStyle = YellowStyle;
    } else if (props.label === 'green') {
        myStyle = GreenStyle;
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