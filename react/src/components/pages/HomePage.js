import Header from "../organisms/Header.js";
import {css} from "@emotion/react";
import PropTypes from "prop-types";
import HomeContent from "../organisms/HomeContent";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function HomePage(props) {
    return (
        <div css={wrapperStyle}>
            <Header sample={props.sample}/>
            <HomeContent sample={props.sample}/>
        </div>
    );
}

HomePage.propTypes = {
    sample: PropTypes.bool,
    style: PropTypes.string,
}

HomePage.defaultProps = {
    sample: false,
}

export default HomePage;
