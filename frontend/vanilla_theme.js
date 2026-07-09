const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

function replaceInString(str) {
  let res = str;
  // Replace the previously injected maroon radial gradients
  res = res.replace(/bg-\[radial-gradient\(ellipse_at_top,_var\(--tw-gradient-stops\)\)\] from-\[#4A0E1B\]\/20 via-\[#0a0a0a\] to-\[#0a0a0a\]/g, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[radial-gradient\(ellipse_at_top,_var\(--tw-gradient-stops\)\)\] from-\[#4A0E1B\]\/15 via-\[#050505\] to-\[#050505\]/g, 'bg-[#FDFBF7]');

  // Replace remaining dark backgrounds
  res = res.replace(/bg-\[#0a0a0a\]/g, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[#0f0f0f\]/g, 'bg-[#FAF6EE]');
  res = res.replace(/bg-\[#050505\]/g, 'bg-[#FDFBF7]');
  
  // Replace dark gradients
  res = res.replace(/from-\[#1a050a\]/g, 'from-[#FAF6EE]');
  res = res.replace(/via-\[#0a0a0a\]/g, 'via-[#FDFBF7]');
  res = res.replace(/to-\[#050505\]/g, 'to-[#FAF6EE]');

  // Invert text colors
  // We have to be careful with text-white since it might be used on buttons (like blue buttons).
  // But since the user wants a full vanilla theme on a previously dark theme, most text-white is body text.
  res = res.replace(/text-white/g, 'text-slate-900');
  res = res.replace(/text-slate-200/g, 'text-slate-800');
  res = res.replace(/text-slate-300/g, 'text-slate-700');
  res = res.replace(/text-slate-400/g, 'text-slate-600');
  res = res.replace(/text-zinc-400/g, 'text-zinc-600');
  res = res.replace(/text-gray-300/g, 'text-gray-700');
  res = res.replace(/text-amber-200/g, 'text-amber-700');
  res = res.replace(/text-\[\#fde68a\]/g, 'text-amber-600');

  // Invert borders
  // border-white/10 -> border-amber-900/10
  res = res.replace(/border-white\/10/g, 'border-amber-900/10');
  res = res.replace(/border-white\/5/g, 'border-amber-900/10');
  res = res.replace(/border-white\/\[0\.[0-9]+\]/g, 'border-amber-900/10');
  res = res.replace(/border-white\/15/g, 'border-amber-900/15');
  res = res.replace(/border-white\/20/g, 'border-amber-900/20');
  
  // Invert bg-white/5 etc (used for cards on dark backgrounds)
  res = res.replace(/bg-white\/5/g, 'bg-amber-900/5');
  res = res.replace(/bg-white\/10/g, 'bg-amber-900/5');
  res = res.replace(/bg-white\/\[0\.[0-9]+\]/g, 'bg-amber-900/5');
  
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
console.log('Done replacing dark with light vanilla.');
