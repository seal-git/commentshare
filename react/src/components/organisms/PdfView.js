import {
    Link, useParams
} from "react-router-dom";
import samplePDF from "../sample-data/naist_exam.pdf";
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import PdfArea from "../molecules/PdfArea";

function PdfView(props) {
    let {pdfId} = useParams()
    return (
        <div>
            <p>PdfView(pdfId:{pdfId})</p>
            <Link to={"/pdf"}>
                back to list
            </Link>
            <PdfArea pdfId={pdfId}/>
        </div>
    );
}

export default PdfView;
