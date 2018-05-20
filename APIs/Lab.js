const base64Img = require('base64-img');

const url = 'https://i.ebayimg.com/thumbs/images/g/XFgAAOSwslRazdkw/s-l225.jpg';

base64Img.requestBase64(url, function(err, res, body) {
  console.log(body);
});
