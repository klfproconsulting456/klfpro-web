const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

// Files to EXCLUDE from text-white replacement to avoid breaking original light themes
const excludeList = [
  'globals.css',
  'app\\login\\page.tsx',
  'app/login/page.tsx',
  'app\\admin\\login\\page.tsx',
  'app/admin/login/page.tsx',
  'app\\admin\\layout.tsx',
  'app/admin/layout.tsx',
  'app\\portal\\layout.tsx',
  'app/portal/layout.tsx',
  'app\\portal\\dashboard\\page.tsx',
  'app/portal/dashboard/page.tsx'
];

function replaceInString(str) {
  let res = str;
  // Revert text colors
  res = res.replace(/text-slate-900/g, 'text-white');
  res = res.replace(/text-slate-800/g, 'text-slate-200');
  res = res.replace(/text-slate-700/g, 'text-slate-300');
  res = res.replace(/text-slate-600/g, 'text-slate-400');
  res = res.replace(/text-zinc-600/g, 'text-zinc-400');
  res = res.replace(/text-gray-700/g, 'text-gray-300');
  res = res.replace(/text-amber-700/g, 'text-amber-200');
  res = res.replace(/text-amber-600/g, 'text-[#fde68a]');

  // Revert borders
  res = res.replace(/border-amber-900\/10/g, 'border-white/10');
  res = res.replace(/border-amber-900\/15/g, 'border-white/15');
  res = res.replace(/border-amber-900\/20/g, 'border-white/20');
  
  // Revert bg-amber-900/5
  res = res.replace(/bg-amber-900\/5/g, 'bg-white/5');

  return res;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      // Check exclusion
      let skip = false;
      for (const ex of excludeList) {
        if (fullPath.includes(ex)) {
          skip = true;
          break;
        }
      }
      if (skip) continue;

      const origContent = fs.readFileSync(fullPath, 'utf8');
      const newContent = replaceInString(origContent);
      if (origContent !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Reverted text in:', fullPath);
      }
    }
  }
}

processDirectory(directory);
processDirectory(appDirectory);
console.log('Done reverting text to white.');
