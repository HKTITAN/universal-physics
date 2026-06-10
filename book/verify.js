const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
(async () => {
  const p = require('path').resolve(__dirname, '..', 'universal-physics-book.pdf');
  const bytes = fs.readFileSync(p);
  const doc = await PDFDocument.load(bytes, { updateMetadata: false });
  const { width, height } = doc.getPage(50).getSize();
  console.log(JSON.stringify({
    file: p,
    sizeMB: +(bytes.length / 1048576).toFixed(2),
    pages: doc.getPageCount(),
    pageSizePts: { width, height },
    pageSizeIn: { width: +(width / 72).toFixed(2), height: +(height / 72).toFixed(2) },
  }, null, 2));
})();
