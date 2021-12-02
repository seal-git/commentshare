import {css} from "@emotion/react";
import{
    useParams,
    Link
} from "react-router-dom";
import Header from "../organisms/Header.js";
import PdfView from "../organisms/PdfView";
import PropTypes from "prop-types";


function PdfViewPage(props){
    return (
        <div >
            <Header sample={props.sample}/>
            <PdfView sample={props.sample}/>
        </div>
    );
}
PdfViewPage.propTypes = {
    sample: PropTypes.bool,
    style: PropTypes.string,
}

PdfViewPage.defaultProps = {
    sample: false,
}

export default PdfViewPage;
