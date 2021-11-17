import {css} from "@emotion/react";
import{
    useParams,
    Link
} from "react-router-dom";
import Header from "../organisms/Header.js";

const BasicStyle = css`
`

function PdfViewPage(props){
    let { pdfId } = useParams()
    return (
        <div >
            <Header label={props.label}/>
            <p>PdfView(pdfId:{pdfId})</p>
            <Link to={"/pdf"}>
                back to list
            </Link>
        </div>
    );
}
export default PdfViewPage;
