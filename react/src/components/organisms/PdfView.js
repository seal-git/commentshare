import {
    Link, useParams
} from "react-router-dom";
import samplePDF from "../sample-data/naist_exam.pdf";
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";

function PdfView(props){
    let { pdfId } = useParams()
    return (
        <div >
            <p>PdfView(pdfId:{pdfId})</p>
            <Link to={"/pdf"}>
                back to list
            </Link>
            <Document
                file={samplePDF}
                options={{
                    cMapUrl: 'https://localhost/cmaps/',
                    cMapPacked: true,
                }}
            >
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
}
export default PdfView;
