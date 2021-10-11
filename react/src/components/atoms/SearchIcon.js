import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";

import {ReactComponent as Icon} from '../assets/search-icon.svg';

const TemplateStyle = css`
  svg{
    height: 100%;
    width: auto;
    fill: white;
  }
  height: 100%;
  width: auto;
`

const SampleStyle = css`
  ${TemplateStyle};
  background-color: aqua;
`;

const BasicStyle = css`
  ${TemplateStyle};
  background-color: black;
`;

function SearchIcon(props) {
    let myStyle;
    if(props.label === 'sample'){
        myStyle = SampleStyle;
    }else if(props.label === 'basic'){
        myStyle = BasicStyle;
    }

    return (
        <div css={myStyle}>
            <Icon/>
        </div>
    )
}



export default SearchIcon;