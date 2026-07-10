const fs = require('fs');
let content = fs.readFileSync('components/marketing/ConversionLandingPage.tsx', 'utf8');
content = content.replace(/viewport=\{\{ once: true, margin: "-50px" \}\} whileInView(.*?)\n\s+viewport=\{\{ once: true, amount: ([\d.]+) \}\}/g, 'whileInView$1\n                  viewport={{ once: true, margin: "-50px", amount: $2 }}');
fs.writeFileSync('components/marketing/ConversionLandingPage.tsx', content, 'utf8');
console.log('Fixed');
