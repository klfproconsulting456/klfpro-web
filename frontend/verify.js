const fs = require('fs');

const html = fs.readFileSync('.next/server/app/index.html', 'utf8');
const phtml = fs.readFileSync('.next/server/app/loans/personal-loan.html', 'utf8');

console.log('--- HOMEPAGE ---');
console.log('Title:', html.match(/<title>(.*?)<\/title>/)?.[1]);
console.log('Canonical:', html.match(/<link rel="canonical" href="(.*?)"/)?.[1]);
console.log('Has GT-WBK82X9C:', html.includes('GT-WBK82X9C'));
console.log('Has G-JJY1EXQSY6:', html.includes('G-JJY1EXQSY6'));
console.log('Has AW-17723359083:', html.includes('AW-17723359083'));

console.log('\n--- HOMEPAGE SCHEMAS ---');
const schemas = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)];
schemas.forEach(m => {
  try {
    const json = JSON.parse(m[1].replace(/&quot;/g, '\"'));
    console.log(json['@type']);
  } catch(e) { console.log('Found schema (parse error)'); }
});

console.log('\n--- PERSONAL LOAN PAGE ---');
console.log('Title:', phtml.match(/<title>(.*?)<\/title>/)?.[1]);
console.log('Canonical:', phtml.match(/<link rel="canonical" href="(.*?)"/)?.[1]);

console.log('\n--- PERSONAL LOAN SCHEMAS ---');
const pschemas = [...phtml.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)];
pschemas.forEach(m => {
  try {
    const json = JSON.parse(m[1].replace(/&quot;/g, '\"'));
    console.log(json['@type']);
  } catch(e) { console.log('Found schema (parse error)'); }
});
