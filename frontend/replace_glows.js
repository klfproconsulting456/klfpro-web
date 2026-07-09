const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

function replaceInString(str) {
  let res = str;
  // Replace tailwind sky-400 rgb with maroon rgb
  res = res.replace(/rgba\(56,189,248/g, 'rgba(153,27,51');
  // Replace indigo rgb with maroon rgb
  res = res.replace(/rgba\(99,102,241/g, 'rgba(153,27,51');
  
  // Also, any remaining linear-gradient for dark backgrounds that I missed
  res = res.replace(/#0A1128/gi, '#0a0a0a');
  res = res.replace(/#0F1C3F/gi, '#050505');

  return res;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      const origContent = fs.readFileSync(fullPath, 'utf8');
      const newContent = replaceInString(origContent);
      if (origContent !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDirectory(directory);
processDirectory(appDirectory);
console.log('Done replacing blue glows with maroon.');
