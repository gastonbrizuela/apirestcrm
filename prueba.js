const puppeteer = require('puppeteer')

const htmlString = `<html>
<head>
    <title></title>
</head>
<body>
    <div class="container" style="height:200px;width: 200px;border: 1px solid red">
        <header style="height:50px">
            Header
        </header>
        <footer style="height:100px">
            footer
        </footer>
    </div>
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome'});
  const page = await browser.newPage()
  await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada')
  await page.screenshot({path: 'example.png'})
  await browser.close()
})()