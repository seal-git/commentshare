import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import SvgIcons from '../atoms/SvgIcons';


function IconPanel(props) {
    let wrapperStyle = css`
      display: inline-block;
      background: ${props.sample===true?"#3f0000":"black"};
    `;
    let itemsStyle = css`
      height: 100%;
      display: flex; //TODO: inline-flexを使うとwrapperが不要か、また不具合があるか確かめる
      align-items: center;
      gap: 1px;
      padding: 1px;
      box-sizing: border-box;
      background: ${props.sample===true?"#00bf00":"none"};
    `
    let iconStyle = css`
      svg {
        height: 30px;
        width: 30px;
      }
      background: ${props.sample===true?"#0000bf":"none"};
    `;
    let textStyle = css`
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props.sample===true?"#bf00bf":"none"};
    `;

    let icon, text;
    if (props.label === "search") {
        wrapperStyle = css`
          ${wrapperStyle};
          ${props.style};
        `
        icon = <SvgIcons label={"search-white"} style={iconStyle}/>
        text = <Text
            text={'Search'}
            label={'quicksand-medium-white'}
            style={textStyle}
        />
    } else if (props.label === "upload") {
        wrapperStyle = css`
          ${wrapperStyle};
          ${props.style};
        `
        icon = <SvgIcons label={"upload-white"} style={iconStyle}/>
        text = <Text
            text={'Upload'}
            label={'quicksand-medium-white'}
            style={textStyle}
        />
    } else if (props.label === "timeline") {
        wrapperStyle = css`
          ${wrapperStyle};
          ${props.style};
        `
        icon = <SvgIcons label={"timeline-white"} style={iconStyle}/>
        text = <Text
            text={'Time Line'}
            label={'quicksand-medium-white'}
            style={textStyle}
        />
    }
    return (
        <div css={wrapperStyle}>
            <div css={itemsStyle}>
                {icon}
                {text}
            </div>
        </div>
    )
}

IconPanel.propTypes = {
    label: PropTypes.oneOf(["search", "upload", "timeline"]),
    sample: PropTypes.bool,
    style: PropTypes.string,
}

IconPanel.defaultProps = {
    label: "search",
    sample: false,
}


export default IconPanel;


