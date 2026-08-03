const fs = require('fs');

function verifyHtml(filePath, pageName) {
  console.log(`\n========================================`);
  console.log(`🔍 VERIFYING: ${pageName}`);
  console.log(`========================================`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ FAIL: File not found: ${filePath}`);
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf8');
  let score = 100;
  
  // 1. Title Tag
  const titles = html.match(/<title[^>]*>.*?<\/title>/gi) || [];
  if (titles.length === 1) {
    console.log(`✅ PASS: Single Title Tag Found: ${titles[0]}`);
  } else if (titles.length > 1) {
    console.log(`❌ FAIL: Duplicate Title Tags Found (${titles.length})`);
    score -= 10;
  } else {
    console.log(`❌ FAIL: Missing Title Tag`);
    score -= 10;
  }

  // 2. Canonical URL
  const canonicals = html.match(/<link[^>]*rel="canonical"[^>]*>/gi) || [];
  if (canonicals.length === 1) {
    console.log(`✅ PASS: Single Canonical Tag Found: ${canonicals[0]}`);
  } else if (canonicals.length > 1) {
    console.log(`❌ FAIL: Duplicate Canonical Tags Found (${canonicals.length})`);
    score -= 10;
  } else {
    console.log(`❌ FAIL: Missing Canonical Tag`);
    score -= 10;
  }

  // 3. Open Graph & Twitter
  const ogTitle = html.match(/<meta[^>]*property="og:title"[^>]*>/gi);
  const twitterCard = html.match(/<meta[^>]*name="twitter:card"[^>]*>/gi);
  if (ogTitle && ogTitle.length === 1) console.log(`✅ PASS: Open Graph Validated`);
  else { console.log(`❌ FAIL: Open Graph Missing or Duplicated`); score -= 5; }
  
  if (twitterCard && twitterCard.length === 1) console.log(`✅ PASS: Twitter Card Validated`);
  else { console.log(`❌ FAIL: Twitter Card Missing or Duplicated`); score -= 5; }

  // 4. JSON-LD Schemas
  const schemas = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)];
  console.log(`\n📊 Schema Analysis (${schemas.length} found):`);
  
  const foundSchemas = new Set();
  schemas.forEach((m, idx) => {
    try {
      // Decode entities for parsing
      let rawJson = m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      const json = JSON.parse(rawJson);
      
      const type = json['@type'];
      if (foundSchemas.has(type)) {
        console.log(`❌ FAIL: Duplicate Schema Type Found -> ${type}`);
        score -= 10;
      } else {
        foundSchemas.add(type);
        console.log(`✅ PASS: Valid Schema -> ${type}`);
      }
    } catch(e) { 
      console.log(`❌ FAIL: JSON-LD Parse Error in Schema #${idx + 1}`);
      score -= 20;
    }
  });

  // Check specific required schemas for the page
  if (pageName === 'Homepage') {
    if (!foundSchemas.has('Organization')) { console.log(`❌ FAIL: Missing Organization Schema`); score -= 5; }
    if (!foundSchemas.has('FAQPage')) { console.log(`❌ FAIL: Missing FAQPage Schema`); score -= 5; }
  } else if (pageName.includes('Loan')) {
    if (!foundSchemas.has('FinancialProduct')) { console.log(`❌ FAIL: Missing FinancialProduct Schema`); score -= 5; }
    if (!foundSchemas.has('BreadcrumbList')) { console.log(`❌ FAIL: Missing BreadcrumbList Schema`); score -= 5; }
  }

  console.log(`\n⭐ ESTIMATED PAGE SCORE: ${score}/100`);
}

verifyHtml('.next/server/app/index.html', 'Homepage');
verifyHtml('.next/server/app/personal-loan-in-gurgaon.html', 'Location Page: Personal Loan in Gurgaon');
