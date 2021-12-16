import React from 'react';
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import IconPanel from "../molecules/IconPanel";
import Text from "../atoms/Text";
import PropTypes from "prop-types";
import SvgIcons from "../atoms/SvgIcons";
import UserIconImage from "../atoms/UserIconImage";


function Header(props) {
    // 各要素(div, Component)ごとにスタイルを設定する(classNameは使わない)
    // storybookでボックスを色づけるサンプル表示のcssを設定する
    // props.sampleがtrueの時に有効になる。storybookの"sample"というトグルボタンで切り替える。
    let wrapperStyle = css`
      height: 50px;
      width: 100%;
      min-width: 900px;
      display: flex;
      background: ${props.sample === true ? "#00ff00" : "black"};
    `;
    let leftWrapperStyle = css`
      display: flex;
      flex: 1;
      gap: 20px;
      background: ${props.sample === true ? "#ff0000" : "none"};
    `;
    let rightWrapperStyle = css`
      display: flex;
      //display: inline-block;
      flex: 0 0 auto;
      gap: 20px;
      margin: 5px 0 5px 0;
      padding-right: 20px;
      background: ${props.sample === true ? "#0000ff" : "none"};
    `;
    let textWrapperStyle = css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding-right: 30px;
      padding-left: 30px;
      background: ${props.sample === true ? "#00ffff" : "none"};
      a{
        text-decoration: none;
      }
    `
    let textStyle = css`
      font-size: 1.5rem;
      color: white;
      background: ${props.sample === true ? "#ff00ff" : "none"};
    `
    let iconStyle = css`
      svg {
        padding: 2px;
        border: 1px solid gray;
        border-radius: 20px;
      }
      background: ${props.sample === true ? "#ffff00" : "none"};
    `
    let userIconStyle = css`
      background: ${props.sample === true ? "#ffff00" : "none"};
    `
    wrapperStyle = css`
      ${wrapperStyle};
      ${props.style};
    `
    return (
        <div css={wrapperStyle}>
            <div css={leftWrapperStyle}>
                <div css={textWrapperStyle}>
                    <Link to={"/"}>
                        <Text
                            text={"Comment Share"}
                            label={"nunuitosans-semibold-white"}
                            style={textStyle}
                        />
                    </Link>
                </div>
                <IconPanel label="search" sample={props.sample}/>
                <IconPanel label="upload" sample={props.sample}/>
                <IconPanel label="timeline" sample={props.sample}/>
            </div>
            <div css={rightWrapperStyle}>
                <SvgIcons label={"notifications-gray"} style={iconStyle}/>
                <SvgIcons label={"direct-message-gray"} style={iconStyle}/>
                <UserIconImage style={userIconStyle}/>
            </div>
        </div>
    )
}

Header.propTypes = {
    sample: PropTypes.bool,
    style: PropTypes.string,
}

Header.defaultProps = {
    sample: false,
}

export default Header;