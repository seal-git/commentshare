import React from 'react';
import {css} from "@emotion/react";
import PropTypes from 'prop-types';

import PanelText from "../atoms/PanelText";
import UploadIcon from '../atoms/UploadIcon';

function UploadPanel(props) {
    const myStyle = css`
      ${props.style};
      height: 100%;
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
    `;
    const iconStyle = css`
      height: 100%;
      width: auto;
      margin-right: 5px;
    `;
    const textStyle= css`
      color: white;
      font-size: 20px;
    `;

    return (
        <div css={myStyle}>
            <UploadIcon style={iconStyle}/>
            <PanelText text={'Upload'} style={textStyle}/>
        </div>
    )
}
UploadPanel.propTypes = {
    style: PropTypes.string,
}

UploadPanel.defaultProps = {
    style: css`
      background-color: blue;
    `
}


export default UploadPanel;