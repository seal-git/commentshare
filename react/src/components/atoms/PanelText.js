import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./Button";
import {css} from "@emotion/react";

const TemplateStyle = css`
  color: white;
  font-size: 20px;
  p{
    display: inline;
  }
`

const SampleStyle = css`
  ${TemplateStyle};
  background-color: chocolate;
`;

const BasicStyle = css`
  ${TemplateStyle};
  background-color: black;
`;

function PanelText(props) {
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

PanelText.propTypes = {
    text: PropTypes.string.isRequired
};


export default PanelText;