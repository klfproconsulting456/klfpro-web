const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

function replaceInString(str) {
  let res = str;
  // Revert the solid backgrounds to dark (black/dark grey)
  res = res.replace(/bg-\[#4A0E1B\]/g, 'bg-[#0a0a0a]');
  res = res.replace(/bg-\[#5C1625\]/g, 'bg-[#0f0f0f]');
  res = res.replace(/bg-\[#310912\]/g, 'bg-[#050505]');
  
  // Keep the gradient from/to/via as maroon so it acts as a shadow/glow
  // Actually, some from/via/to are for solid cards. Let's make them dark too with a slight maroon tint.
  res = res.replace(/from-\[#4A0E1B\]/g, 'from-[#1a050a]');
  res = res.replace(/via-\[#5C1625\]/g, 'via-[#0a0a0a]');
  res = res.replace(/to-\[#310912\]/g, 'to-[#050505]');

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
console.log('Done reverting to dark with maroon shadows.');
