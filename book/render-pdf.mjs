// Custom PDF render for the ~800pp book.
// pagedjs-cli renders the whole document in a single Runtime.callFunctionOn CDP
// call, which exceeds puppeteer's default protocolTimeout (180s) on large books.
// pagedjs-cli exposes no way to set protocolTimeout, so we patch the shared
// puppeteer default export (the same instance printer.js imports) to inject
// protocolTimeout: 0 (disabled) into every launch.
import fs from "fs";
import puppeteer from "puppeteer";
import PrinterMod from "pagedjs-cli";

const Printer = PrinterMod.default || PrinterMod;

const _launch = puppeteer.launch.bind(puppeteer);
puppeteer.launch = (opts = {}) => _launch({ ...opts, protocolTimeout: 0 });

const input = process.argv[2] || "dist/book.html";
const output = process.argv[3] || "../universal-physics-book.pdf";

const printer = new Printer({
  headless: "new",
  allowLocal: true,
  allowRemote: false,
  timeout: 0,
  emulateMedia: "print",
});

let last = 0;
printer.on("page", (page) => {
  if (page.position - last >= 50 || page.position === 0) {
    process.stdout.write(`  rendering page ${page.position + 1}\n`);
    last = page.position;
  }
});
printer.on("rendered", (msg) => process.stdout.write(`rendered: ${msg}\n`));
printer.on("postprocessing", () => process.stdout.write("postprocessing...\n"));

const options = { outlineTags: ["h1", "h2", "h3"] };
const file = await printer.pdf(input, options);
if (file && output) {
  fs.writeFileSync(output, file);
  console.log("Saved to " + output + " (" + file.length + " bytes)");
}
process.exit(0);
