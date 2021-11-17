import {css} from "@emotion/react";
import{
    useParams,
    Link
} from "react-router-dom";
import Header from "../organisms/Header.js";
import PdfView from "../organisms/PdfView";

const BasicStyle = css`
`

function PdfViewPage(props){
    return (
        <div >
            <Header label={props.label}/>
            <PdfView label={props.label}/>
        </div>
    );
}
export default PdfViewPage;
