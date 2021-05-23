import puppeteer from "puppeteer";

(async () => {
  const b = await puppeteer.launch({
    headless: false,
  });
  const p = await b.newPage();
  await p.goto("https://example.com");
})();
