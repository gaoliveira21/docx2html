const EasyDocx = require('node-easy-docx');

const easyDocx = new EasyDocx({
  path: '/home/gabriel/Downloads/privacy-policy.docx'
});

easyDocx.parseDocx()
  .then(data => {
    // JSON data as result
    // let text = '';
    // data[8].items.forEach(item => {
    //   console.log(item.text.trim());
    //   text = `${text.trim()}${item.text.trim()}`;
    // });

    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });