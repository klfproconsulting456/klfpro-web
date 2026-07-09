const sharp = require('sharp');
const path = require('path');

const inputImagePath = 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\3731f7d8-0b14-43a8-802c-b0303bbb91e4\\media__1782888605206.jpg';

async function processImage() {
    try {
        const metadata = await sharp(inputImagePath).metadata();
        console.log('Image dimensions:', metadata.width, 'x', metadata.height);
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

processImage();
