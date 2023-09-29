const qrText = document.querySelector("#qr-text");
const sizes = document.querySelector("#sizes");
const generateBtn = document.querySelector('#generateBtn');
const downloadBtn = document.querySelector('#downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput()
})

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput()
    // generateQRCode();
})

function isEmptyInput() {
    if (qrText.value.length > 0) {

        generateQRCode();
    }
    else {
        alert("Enter the text or URL to generate your QR code")
    }
}

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    if (img !== null) {
        let imgAtr = img.getAttribute('src')
        downloadBtn.setAttribute("href", imgAtr)
    }
    else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)
    }
})

function generateQRCode() {
    qrContainer.innerHTML = ""; //when we type next sentence/word it will make the html empty first then generete QR
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000"

    });
}

