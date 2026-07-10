const fs = require('fs');
let content = fs.readFileSync('components/marketing/ConversionLandingPage.tsx', 'utf8');
content = content.replace(/viewport=\{\{ once: true, margin: "-50px" \}\} /g, '');
fs.writeFileSync('components/marketing/ConversionLandingPage.tsx', content, 'utf8');
console.log('Cleaned up duplicate viewports');
