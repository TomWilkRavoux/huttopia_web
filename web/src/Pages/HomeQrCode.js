import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const HomePageQRCode = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    QRCode.toDataURL('http://localhost:3000/')
      .then(url => {
        setSrc(url);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return <img src={src} alt="Home Page QR Code" />;
}

export default HomePageQRCode;
