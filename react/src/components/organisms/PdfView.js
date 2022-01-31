import {
    Link, useParams
} from "react-router-dom";
import {css} from "@emotion/react";
import PdfArea from "../molecules/PdfArea";
import PropTypes from "prop-types";
import Text from "../atoms/Text";

function PdfView(props) {
    let wrapperStyle = css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: ${props.sample===true?"#bfbf00":"none"};
    `
    let textStyle=css`
      font-size: 1rem;
      background: ${props.sample===true?"#bf00bf":"none"};
    `
    let {pdfId} = useParams()
    return (
        <div css={wrapperStyle}>
            <p>
                <Text
                    text={`PdfView(pdfId:${pdfId})`}
                    label={"notosansjp-medium-black"}
                    style={textStyle}
                />
            </p>
            <Link to={"/pdf"}>
                <Text
                    text={"back to list"}
                    label={"nunitosans-bold-blue"}
                    style={textStyle}
                />
            </Link>
            <PdfArea pdfId={pdfId} sample={props.sample}/>
        </div>
    );
}
PdfView.propTypes = {
    sample: PropTypes.bool,
    style: PropTypes.string,
}

PdfView.defaultProps = {
    sample: false,
}

export default PdfView;
