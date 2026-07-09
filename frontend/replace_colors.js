const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

function replaceInString(str) {
  let res = str;
  // Replace dark backgrounds starting with #0 or #1
  res = res.replace(/bg-\[#[01][0-9a-fA-F]{5}\]/g, 'bg-[#4A0E1B]');
  res = res.replace(/from-\[#[01][0-9a-fA-F]{5}\]/g, 'from-[#4A0E1B]');
  res = res.replace(/via-\[#[01][0-9a-fA-F]{5}\]/g, 'via-[#5C1625]');
  res = res.replace(/to-\[#[01][0-9a-fA-F]{5}\]/g, 'to-[#310912]');
  
  // also handle some specific ones that might be plain black #000 or similar if they use tailwind classes
  res = res.replace(/bg-black/g, 'bg-[#310912]');
  res = res.replace(/to-black/g, 'to-[#310912]');
  res = res.replace(/from-black/g, 'from-[#4A0E1B]');
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
console.log('Done replacing colors.');
