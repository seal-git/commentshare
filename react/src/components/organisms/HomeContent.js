import React from 'react';
import {css} from "@emotion/react";
import Text from "../atoms/Text";
import PropTypes from "prop-types";
import News from "../molecules/News";
import ContentArea from "../molecules/ContentArea";
import Recommend from "../molecules/Recommend";

function HomeContent(props) {

    let wrapperStyle = css`
      width: 80%;
      background: ${props.sample === true ? "#ffff00" : "none"};
      margin: 30px;
      display: flex;
      flex-direction: column;
    `
    let textStyle = css`
      background: ${props.sample === true ? "#0000ff" : "none"};
    `
    let recommendAreaStyle = css`
      flex-direction: row;
    `
    let newsViewList = []
    const newsList = [
        {
            date: "2021.9.3",
            content: "news1"
        },
        {
            date: "2021.9.20",
            content: "news2"
        },
        {
            date: "2021.9.20",
            content: "news2"
        },
    ]

    newsList.forEach((news) => {
        newsViewList.push(
            <News sample={props.sample}
                  date={news.date}
                  content={news.content}
            />
        )
    })
    let recommendViewList = []
    const recommendList = [
        "pdf1",
        "pdf2",
        "pdf3",
    ]
    recommendList.forEach((recommend) => {
        recommendViewList.push(
            <Recommend sample={props.sample}/>
        )
    })

    return (
        <div css={wrapperStyle}>
            <Text text={"News"}
                  label={"nunitosans-bold-black"}
                  style={textStyle}
            />
            <ContentArea sample={props.sample}>
                {newsViewList}
            </ContentArea>
            <Text text={"Recommend"}
                  label={"nunitosans-bold-black"}
                  style={textStyle}
            />
            <ContentArea sample={props.sample} style={recommendAreaStyle}>
                {recommendViewList}
            </ContentArea>
        </div>
    )
}

HomeContent.propTypes = {
    newsList: PropTypes.array,
    sample: PropTypes.bool,
    style: PropTypes.string,
}

HomeContent.defaultProps = {
    sample: false,
}

export default HomeContent;