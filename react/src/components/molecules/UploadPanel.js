import React from 'react';
import {css} from "@emotion/react";
import PropTypes from 'prop-types';

import PanelText from "../atoms/PanelText";
import UploadIcon from '../atoms/UploadIcon';

const TemplateStyle = css`
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      padding: 10px;
      box-sizing: border-box;
`
const SampleStyle = css`
  ${TemplateStyle};
  background-color: coral;
`;
const BasicStyle = css`
  ${TemplateStyle};
  background-color: black;
`;

function UploadPanel(props) {
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
            <UploadIcon label={props.label}/>
            <PanelText text={'Upload'} label={props.label}/>
        </div>
    )
}
UploadPanel.propTypes = {
    label: PropTypes.oneOf(['sample', 'basic']),
    style: PropTypes.string,
}

UploadPanel.defaultProps = {
    label: 'basic'
}


export default UploadPanel;