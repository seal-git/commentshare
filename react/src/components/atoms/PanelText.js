import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./Button";

const style = {
    color: 'red',
    fontsize: '16pt'
}

function PanelText(props) {

    return (
        <div style={style}><p>{props.text}</p></div>
    )
}

PanelText.propTypes = {
  text: PropTypes.string.isRequired
};


export default PanelText;