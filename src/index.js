let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let button = document.querySelector('button');

const QR_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const generateQR = (url) => {
  if (qrText.value.length > 0) {
    qrImage.src = url + qrText.value;
    imgBox.classList.add('show-img');
  } else {
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('error');
    }, 1000);
  }
    
};

button.addEventListener('click', () => {
  generateQR(QR_URL);
})
