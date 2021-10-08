import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./Button";
import {css} from "@emotion/react";

const myStyle = css`
  background-color: #1ea7fd;
  color: red;
  font-size: 20pt;
`;

function PanelText(props) {

    return (
        <div css={myStyle}>{props.text}</div>
    )
}

PanelText.propTypes = {
  text: PropTypes.string.isRequired
};


export default PanelText;