const EasyDocx = require('node-easy-docx');
const HTMLParser = require('./lib/HTMLParser');

const easyDocx = new EasyDocx({
  path: '/home/gabriel/Downloads/terms.docx'
});

easyDocx.parseDocx()
  .then(data => {
    const htmlParser = new HTMLParser(data);

    htmlParser.onlyText().createFile('example', 'terms');
  })
  .catch(err => {
    console.error(err);
  });