const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\3731f7d8-0b14-43a8-802c-b0303bbb91e4\\media__1782888605206.jpg';
const outputDir = path.join(__dirname, 'public', 'images', 'specialties');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Image is 1024x720
// Grid is 3x3
// Total width: 1024 (col 1: 341, col 2: 341, col 3: 341)
// Total height: 720 (row 1: 240, row 2: 240, row 3: 240)

// I will extract the top 70% of each card to avoid the text
const cardWidth = Math.floor(1024 / 3);
const cardHeight = Math.floor(720 / 3);
const cropWidth = 320; // 320px
const cropHeight = 175; // 175px

const specialties = [
    { name: 'orthopedics', row: 0, col: 0 },
    { name: 'cardiology', row: 0, col: 1 },
    { name: 'primary-care', row: 0, col: 2 },
    { name: 'pediatrics', row: 1, col: 0 },
    { name: 'anesthesiology', row: 1, col: 1 },
    { name: 'ob-gyn', row: 1, col: 2 },
    { name: 'neurology', row: 2, col: 0 },
    { name: 'ophthalmology', row: 2, col: 1 },
];

async function sliceImage() {
    for (const spec of specialties) {
        // Calculate the center top offset for cropping
        // The cards have some gaps, so we need to be careful. Let's just do a rough extraction and let object-cover handle the rest.
        const left = spec.col * cardWidth + 10;
        const top = spec.row * cardHeight + 10;
        
        try {
            await sharp(inputImagePath)
                .extract({ left: left, top: top, width: cropWidth, height: cropHeight })
                .toFile(path.join(outputDir, `${spec.name}.jpg`));
            console.log(`Saved ${spec.name}.jpg`);
        } catch (e) {
            console.error(`Error on ${spec.name}:`, e);
        }
    }
}

sliceImage();
