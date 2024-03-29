import QRCode from 'qrcode';

const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text));
  } catch (err) {
    console.error(err);
  }
}

generateQR('http://localhost:3000/');