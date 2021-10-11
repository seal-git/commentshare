import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./Button";
import {css} from "@emotion/react";


function PanelText(props) {

    const myStyle = css`
      ${props.style};
    `;

    return (
        <div css={myStyle}>{props.text}</div>
    )
}

PanelText.propTypes = {
    text: PropTypes.string.isRequired
};


export default PanelText;