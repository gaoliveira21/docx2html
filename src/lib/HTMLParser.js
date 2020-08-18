const fs = require('fs');
const path = require('path');

class HTMLParser {

  constructor(docx) {
    this.docx = docx;
    this.viewsPath = path.resolve(__dirname, '..', 'views');
    this.layoutPath = path.resolve(this.viewsPath, 'layout', 'default.html');
    this.html = '';
  }

  onlyText() {
    this.docx = this.docx
      .filter(line => line.lineBreak !== true)
      .filter(line => line.items || line.text);
    return this;
  }

  createFile(dir, filename) {
    const filePath = path.resolve(dir);

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    fs.appendFile(path.resolve(filePath, `${filename}.html`), this.writeFile(), (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  }

  writeFile() {
    this.getLayoutContent();
    let docxContent = '';

    this.docx.forEach((line, index) => {
      if(line.format && line.format.bold && !line.items && line.text) {
        if(index === 0) {
          docxContent += `<h1 style="text-align: center;text-align: center; font-size: 36px !important; margin-bottom: 36px;">${line.text}</h1>`;
        } else {
          docxContent += `<p><strong>${line.text}</strong></p>\n`;
        }
      }

      if(line.items){
        docxContent += this.getItemText(line.items);
      }

    });

    return this.html.replace('{{ !!content }}', docxContent);
  }

  getLayoutContent() {
    this.html = fs.readFileSync(this.layoutPath).toString();
  }

  getItemText(items) {
    let paragraph = '<p>';

    items.forEach(item => {
      if(item.format && item.format.bold) {
        paragraph += `<strong>${item.text}</strong>`;
      } else {
        paragraph += item.text;
      }
      
    });

    paragraph += '</p>\n';

    return paragraph;
  }

}

module.exports = HTMLParser;