const base64Img = require('base64-img');

module.exports = (itemArray) => {
  return new Promise((resolve, reject) => {
    let newItemArray = [];
    let count = 0;

    const batchSize = 100;
    // console.log(`batchSize: ${batchSize}`);

    for (i = 0; i < itemArray.length / batchSize; i++) {
      const from = batchSize * i;
      const to = batchSize * (i + 1);
      const arr = itemArray.slice(from, to);
      setTimeout(() => {
        convert(arr);
      }, 4000 * i);
    }

    setTimeout(() => {
      resolve(newItemArray);
    }, 4000 * (Math.ceil(itemArray.length / batchSize) + 1));

    function convert(arr) {
      arr.forEach((item) => {
        count += 1;
        if (item.image !== undefined) {
          base64Img.requestBase64(
            item.image.imageUrl.split('l225')[0] + 'l1000.jpg',
            function(err, res, body) {
              newItemArray.push({
                itemId: item.itemId.split('|')[1],
                itemTitle: item.title,
                base64: body.split('data:image/jpeg;base64,')[1],
              });
            },
          );
        }
      });
    }
  });
};
