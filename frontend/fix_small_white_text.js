const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

function replaceInString(str) {
  let res = str;

  // Golden/Amber light texts to dark gold
  res = res.replace(/text-amber-100/g, 'text-[#B8972E]');
  res = res.replace(/text-amber-200/g, 'text-[#B8972E]');
  res = res.replace(/text-amber-300/g, 'text-[#B8972E]');
  res = res.replace(/text-\[\#fde68a\]/g, 'text-[#B8972E]');
  res = res.replace(/text-yellow-100/g, 'text-[#B8972E]');
  res = res.replace(/text-yellow-200/g, 'text-[#B8972E]');
  
  // Sky/Blue light texts to dark blue
  res = res.replace(/text-sky-100/g, 'text-[#0A1128]');
  res = res.replace(/text-sky-200/g, 'text-[#0A1128]');
  res = res.replace(/text-sky-300/g, 'text-[#0A1128]');
  res = res.replace(/text-blue-100/g, 'text-[#0A1128]');
  res = res.replace(/text-blue-200/g, 'text-[#0A1128]');

  // Neutral light texts that were missed
  res = res.replace(/text-zinc-100/g, 'text-[#0A1128]');
  res = res.replace(/text-zinc-200/g, 'text-[#0A1128]');
  res = res.replace(/text-zinc-300/g, 'text-[#0F1C3F]');
  res = res.replace(/text-gray-100/g, 'text-[#0A1128]');
  res = res.replace(/text-gray-200/g, 'text-[#0A1128]');
  res = res.replace(/text-gray-400/g, 'text-[#0F1C3F]');
  res = res.replace(/text-slate-500/g, 'text-[#1E293B]');
  
  // White opacity texts that regex /text-white/g might have missed if they were written weirdly
  // Actually /text-white/g handles text-white/50 -> text-[#0A1128]/50
  
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
        console.log('Fixed text in:', fullPath);
      }
    }
  }
}

processDirectory(directory);
processDirectory(appDirectory);
console.log('Done fixing small light text.');
