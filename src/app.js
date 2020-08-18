const EasyDocx = require('node-easy-docx');
const HTMLParser = require('./lib/HTMLParser');

module.exports = (docxpath, outputdir, outputfilename) => {
  try {
    const easyDocx = new EasyDocx({
      path: docxpath
    });

    easyDocx.parseDocx()
    .then(data => {
      const htmlParser = new HTMLParser(data);
  
      htmlParser.onlyText().createFile(outputdir, outputfilename);
    });
  } catch (error) {
    console.error(`Fail on convert, please verify if ${docxpath} exists.`);
  }

}
