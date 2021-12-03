import React, {useState} from 'react';
import samplePDF from "../sample-data/samplepdf.pdf";
import {Page, Document} from "react-pdf/dist/esm/entry.webpack";
import {css} from "@emotion/react";
import PdfComment from "./PdfComment";
import PropTypes from "prop-types";
import News from "./News";


function PdfArea(props) {
    let wrapperStyle = css`
      background: ${props.sample===true?"#bf0000":"#bfbfbf"};
      padding: 10px;
    `
    let pdfStyle = css`
      position: relative;
      .react-pdf__Page__textContent {
        user-select: none;
      }
      canvas {
        margin: auto;
      }
    `
    let pageNavStyle = css`
      text-align: center;
    `

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageHeight, setPageHeight] = useState(null);
    const [pageWidth, setPageWidth] = useState(null);

    const onDocumentLoadSuccess = async (pdf) => {
        const numPages = pdf.numPages;
        const page = await pdf.getPage(1);
        setNumPages(numPages);
        setPageNumber(1);
        setPageHeight(page.view[3]);
        setPageWidth(page.view[2]);
        console.log(page.view)
    };

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }


    return (
        <div css={wrapperStyle}>
            <div css={pdfStyle}>
                <Document
                    file={samplePDF}
                    options={{
                        cMapUrl: 'https://localhost/cmaps/',
                        cMapPacked: true,
                    }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber}>
                    </Page>
                    <PdfComment
                        pageNumber={pageNumber}
                        pageHeight={pageHeight}
                        pageWidth={pageWidth}
                    />
                </Document>

            </div>
            <div css={pageNavStyle}>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </div>

    )
}
PdfArea.propTypes = {
    sample: PropTypes.bool,
    style: PropTypes.string,
}

PdfArea.defaultProps = {
    sample: false,
}

export default PdfArea;