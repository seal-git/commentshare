import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";

import {ReactComponent as Icon} from '../assets/search-icon.svg';

//TODO: Iconコンポーネントにまとめるか検討
// propはicon, label, style?

const TemplateStyle = css`
  svg {
    height: 100%;
    width: auto;
    fill: white;
  }

  height: 100%;
`
const SampleStyle = css`
  ${TemplateStyle};
  background-color: aqua;
  svg {
    background-color: red;
  }
`;
const BasicStyle = css`
  ${TemplateStyle};
  background-color: black;
`;

function SearchIcon(props) {
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
        <div css={myStyle}>
            <Icon/>
        </div>
    )
}

SearchIcon.propTypes = {
    label: PropTypes.oneOf(['sample', 'basic']),
    style: PropTypes.string,
}

SearchIcon.defaultProps = {
    label: 'basic'
}


export default SearchIcon;