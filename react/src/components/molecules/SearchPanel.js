import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";
import PanelText from "../atoms/PanelText";
import SearchIcon from '../atoms/SearchIcon';




function SearchPanel(props) {
    const myStyle = css`
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      padding: 10px;
      box-sizing: border-box;
      ${props.style};
    `;
    const textStyle= css`
      color: white;
      font-size: 20px;
    `;

    return (
        <div css={myStyle}>
            <SearchIcon label={props.label}/>
            <PanelText text={'Search'} style={textStyle}/>
        </div>
    )
}
SearchPanel.propTypes = {
    label: PropTypes.oneOf(['sample', 'basic'])
}

SearchPanel.defaultProps = {
    label: 'basic'
}


export default SearchPanel;