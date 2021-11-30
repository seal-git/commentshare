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
  background: black;
`

function SearchPanel(props) {

    let myStyle;
    let iconStyle;
    let textStyle;
    if (props.label === 'sample') {
        myStyle = css`
          ${TemplateStyle};
          ${props.style};
        `
        iconStyle = css`
          background: #1fa67a;
        `
        textStyle = css`
          background: darkgrey;
        `
    } else if (props.label === "basic") {
        myStyle = css`
          ${TemplateStyle};
          ${props.style};
        `
    }

    return (
        <div css={myStyle}>
            <SvgIcons
                label={'search-white'}
                style={iconStyle}
            />
            <Text
                text={'Search'}
                label={'quicksand-medium-white'}
                style={textStyle}
            />
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


