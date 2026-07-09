const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}
const files = [...walk('d:/Documents/desktop/klfpro-website/frontend/components/healthcare'), ...walk('d:/Documents/desktop/klfpro-website/frontend/app/klfpro-healthcare')];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/\"\/klfpro-healthcare\/([^\"]+)\"/g, '"/$1"');
  content = content.replace(/\"\/klfpro-healthcare\"/g, '"/"');
  content = content.replace(/\`\/klfpro-healthcare\/([^\`]+)\`/g, '`/$1`');
  content = content.replace(/\`\/klfpro-healthcare\`/g, '`/`');
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Done replacing strings');
