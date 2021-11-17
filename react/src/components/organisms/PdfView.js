import {
    Link, useParams
} from "react-router-dom";
import axios from "axios";


function PdfView(props){
    let { pdfId } = useParams()
    return (
        <div >
            <p>PdfView(pdfId:{pdfId})</p>
            <Link to={"/pdf"}>
                back to list
            </Link>
        </div>
    );
}
export default PdfView;
