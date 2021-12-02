import React from 'react';
import {css} from "@emotion/react";
import IconPanel from "../molecules/IconPanel";
import Text from "../atoms/Text";
import PropTypes from "prop-types";
import SvgIcons from "../atoms/SvgIcons";
import UserIconImage from "../atoms/UserIconImage";

function News(props) {

    let wrapperStyle = css`
      background: ${props.sample===true?"#bf0000":"none"};
      padding: 3px;
      margin: 1px;
    `
    let dateStyle = css`
      font-size: 1rem;
      display: inline-block;
      width: 7em;
      background: ${props.sample===true?"#bfbf00":"none"};
    `
    let contentStyle = css`
      font-size: 1rem;
      background: ${props.sample===true?"#00bfbf":"none"};
    `
    let moreStyle = css`
      font-size: 1rem;
      padding-left: 10px;
      background: ${props.sample===true?"#bf00bf":"none"};
    `

    return (
        <div css={wrapperStyle}>
            <div>
                <Text text={props.date}
                      label={"notosansjp-medium-gray"}
                      style={dateStyle}
                />
                <Text text={props.content}
                      label={"nunitosans-semibold-black"}
                      style={contentStyle}
                />
                <Text text={"more"}
                      label={"nunitosans-bold-blue"}
                      style={moreStyle}
                />
            </div>
        </div>
    )
}

News.propTypes = {
    sample: PropTypes.bool,
    style: PropTypes.string,
}

News.defaultProps = {
    sample: false,
}

export default News;