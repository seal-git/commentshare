import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import SvgIcons from '../atoms/SvgIcons';

const TemplateStyle = css`
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      padding: 10px;
      box-sizing: border-box;

      height: 50px;
      background: white;
`

const BasicStyle = css`
  ${TemplateStyle};


`;

function SearchPanel(props) {

    let myStyle;
    if(props.label === 'basic'){
        myStyle = BasicStyle;
    }
    myStyle = css`
      ${myStyle};
      ${props.style};
    `

    return (
        <div css={myStyle}>
            <SvgIcons label={'search'}/>
            <Text text={'Search'} label={'nunitosans-semibold-black'}/>
        </div>
    )
}
SearchPanel.propTypes = {
    label: PropTypes.oneOf(['basic']),
    style: PropTypes.string,
}

SearchPanel.defaultProps = {
    label: 'basic'
}


export default SearchPanel;


