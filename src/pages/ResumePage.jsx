import pdf from "../Adam.pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "../CSS/Resume.css";

// Needed for functionality of react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResumePage() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentSuccess() {
    setNumPages(numPages);
  }
  return (
    <div className="pdf-container">
      <a
        className="pdf-link"
        href={pdf}
        target="_blank"
        rel="noreferrer"
        download="Adam_Nguyen_Resume_2023"
      >
        <button>Download</button>
      </a>
      Last updated: July 2023
      <Document file={pdf} onLoadSuccess={onDocumentSuccess}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
export default ResumePage;

// https://www.npmjs.com/package/react-pdf
