import React from 'react';
import {css} from "@emotion/react";
import IconPanel from "../molecules/IconPanel";
import Text from "../atoms/Text";
import PropTypes from "prop-types";
import SvgIcons from "../atoms/SvgIcons";
import UserIconImage from "../atoms/UserIconImage";

function ContentArea(props) {

    let wrapperStyle = css`
      width: auto;
      height: 100%;
      min-height: 5rem;
      margin: 20px 0 20px 0;
      padding: 20px 10px 20px 10px;
      display: flex;
      flex-direction: column;
      background: ${props.sample === true ? "#00bf00" : "white"};
    `
    wrapperStyle = css`
      ${wrapperStyle};
      ${props.style};
    `
    return (
        <div css={wrapperStyle}>
            {props.children}
        </div>
    )
}

ContentArea.propTypes = {
    sample: PropTypes.bool,
    style: PropTypes.string,
}

ContentArea.defaultProps = {
    sample: false,
}

export default ContentArea;