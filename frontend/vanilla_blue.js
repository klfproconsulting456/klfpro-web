const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

function replaceInString(str) {
  let res = str;

  // 1. Remove my messy glows
  res = res.replace(/bg-\[radial-gradient\([^\]]+\)\] from-\[[^\]]+\]\/[0-9]+ via-\[[^\]]+\] to-\[[^\]]+\]/g, 'bg-[#FAF6EE]');
  
  // 2. Main dark backgrounds -> Light Vanilla
  res = res.replace(/bg-\[#0a0a0a\]/gi, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[#050505\]/gi, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[#0f0f0f\]/gi, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[#4A0E1B\]/gi, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[#5C1625\]/gi, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[#310912\]/gi, 'bg-[#FAF6EE]');
  
  // Replace gradient colors to vanilla
  res = res.replace(/from-\[#1a050a\]/g, 'from-[#FAF6EE]');
  res = res.replace(/via-\[#0a0a0a\]/g, 'via-[#FDFBF7]');
  res = res.replace(/to-\[#050505\]/g, 'to-[#FAF6EE]');
  res = res.replace(/from-\[#0a0a0a\]/g, 'from-[#FAF6EE]');
  res = res.replace(/to-\[#0a0a0a\]/g, 'to-[#FAF6EE]');

  // 3. Text to Dark Blue
  // Avoid replacing text-white on primary buttons (often bg-blue-600 text-white), but here we assume most text-white is body text.
  res = res.replace(/text-white/g, 'text-[#0A1128]');
  res = res.replace(/text-slate-200/g, 'text-[#0A1128]');
  res = res.replace(/text-slate-300/g, 'text-[#0F1C3F]');
  res = res.replace(/text-slate-400/g, 'text-[#1E293B]');
  res = res.replace(/text-zinc-400/g, 'text-[#1E293B]');
  res = res.replace(/text-gray-300/g, 'text-[#1E293B]');
  res = res.replace(/text-slate-900/g, 'text-[#0A1128]');

  // 4. Borders to Dark Blue with opacity
  res = res.replace(/border-white\/10/g, 'border-[#0A1128]/15');
  res = res.replace(/border-white\/5/g, 'border-[#0A1128]/10');
  res = res.replace(/border-white\/15/g, 'border-[#0A1128]/20');
  res = res.replace(/border-white\/20/g, 'border-[#0A1128]/25');
  res = res.replace(/border-white\/\[0\.[0-9]+\]/g, 'border-[#0A1128]/15');

  // 5. Translucent backgrounds (cards/hover)
  res = res.replace(/bg-white\/5/g, 'bg-[#0A1128]/5');
  res = res.replace(/bg-white\/10/g, 'bg-[#0A1128]/10');
  res = res.replace(/bg-white\/15/g, 'bg-[#0A1128]/15');
  res = res.replace(/bg-white\/\[0\.[0-9]+\]/g, 'bg-[#0A1128]/5');

  // 6. Fix globals.css text colors
  res = res.replace(/text-slate-100/g, 'text-[#0A1128]');

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
console.log('Done creating vanilla + dark blue theme.');
