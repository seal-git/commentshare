import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";
import PanelText from "../atoms/PanelText";
import SearchIcon from '../atoms/SearchIcon';

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
  background-color: bisque;
`;
const BasicStyle = css`
  ${TemplateStyle};
  background-color: black;
`;

function SearchPanel(props) {

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
            <SearchIcon label={props.label}/>
            <PanelText text={'Search'} label={props.label}/>
        </div>
    )
}
SearchPanel.propTypes = {
    label: PropTypes.oneOf(['sample', 'basic']),
    style: PropTypes.string,
}

SearchPanel.defaultProps = {
    label: 'basic'
}


export default SearchPanel;