const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
const QrTeminal = require("qrcode-terminal");
module.exports = function(image) {
  Jimp.read(image).then(images => {
    var qr = new QrCode();
    qr.callback = function(err, value) {
      if (err) {
        console.error(err);
        return;
      }

      QrTeminal.generate(value.result, { small: true });
    };

    qr.decode(images.bitmap);
  });
};
