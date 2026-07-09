const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

function replaceInString(str) {
  let res = str;
  // Change plain bg-[#0a0a0a] to a dark background with maroon glow
  // Note: we only want to do this for container elements, but globally replacing bg-[#0a0a0a] with a gradient might break some small badges if they don't support gradients.
  // However, most bg-[#0A1128] (which became #0a0a0a) were full section backgrounds!
  // Let's replace 'bg-[#0a0a0a]' with 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4A0E1B]/20 via-[#0a0a0a] to-[#0a0a0a]'
  res = res.replace(/bg-\[#0a0a0a\]/g, 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4A0E1B]/20 via-[#0a0a0a] to-[#0a0a0a]');
  
  // also for #050505
  res = res.replace(/bg-\[#050505\]/g, 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4A0E1B]/15 via-[#050505] to-[#050505]');

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
console.log('Added maroon glow to all dark backgrounds.');
