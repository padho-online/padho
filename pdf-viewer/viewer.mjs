import * as pdfjsLib from './build/pdf.mjs'; // Import PDF.js

// Set worker src (this is where the worker is located in your project structure)
pdfjsLib.GlobalWorkerOptions.workerSrc = './build/pdf.worker.mjs';

// Function to load PDF
export function loadPDF(pdfUrl) {
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
        console.log('PDF loaded');
        renderPage(pdfDoc, 1); // Render the first page
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
    });
}

// Function to render a page
function renderPage(pdfDoc, pageNum) {
    pdfDoc.getPage(pageNum).then(function(page) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: context,
            viewport: viewport
        });

        document.getElementById('pdfViewer').appendChild(canvas);
    }).catch(function(error) {
        console.error('Error rendering page:', error);
    });
}
