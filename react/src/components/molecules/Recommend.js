import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {css} from "@emotion/react";
import Text from "../atoms/Text";
import PaperImage from "../atoms/PaperImage";

function Recommend(props) {

    let wrapperStyle = css`
      background: ${props.sample === true ? "#bf0000" : "none"};
      margin: 30px;
      width: 33%;
    `
    let linkStyle = css`
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    `
    let imageStyle = css`
      background: ${props.sample === true ? "#bfbf00" : "none"};

      img {
        display: block;
        width: 100%;
        height: auto;
      }

      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    `
    let textStyle = css`
      font-size: 1rem;
      background: ${props.sample === true ? "#00bfbf" : "none"};
    `
    return (
        <div css={wrapperStyle}>
            <Link to={"/pdf/001"} css={linkStyle}>
                <PaperImage style={imageStyle}/>
                <Text text={props.text}
                      label={"nunitosans-bold-blue"}
                      style={textStyle}
                />
            </Link>
        </div>
    )
}

Recommend.propTypes = {
    sample: PropTypes.bool,
    text: PropTypes.string,
    style: PropTypes.string,
}

Recommend.defaultProps = {
    sample: false,
    text: "SPAN: Subgraph Prediction Attention Network for Dynamic Graphs"
}

export default Recommend;