const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertImage(srcRel, destRel, options = { quality: 80 }) {
  const src = path.join(__dirname, '..', srcRel);
  const dest = path.join(__dirname, '..', destRel);

  if (!fs.existsSync(src)) {
    console.warn(`Source file not found: ${src}`);
    return;
  }

  try {
    let pipeline = sharp(src);
    if (options.resize) {
      pipeline = pipeline.resize(options.resize);
    }
    await pipeline.webp({ quality: options.quality || 80 }).toFile(dest);
    const srcSize = fs.statSync(src).size;
    const destSize = fs.statSync(dest).size;
    console.log(`Converted: ${srcRel} (${(srcSize / 1024).toFixed(1)} KB) -> ${destRel} (${(destSize / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Error converting ${srcRel}:`, err);
  }
}

async function run() {
  console.log('Starting image conversion to WebP...');

  // Team images
  await convertImage('public/images/steven-peddie.jpg', 'public/images/steven-peddie.webp', { quality: 82 });
  await convertImage('public/images/steven.jpeg', 'public/images/steven.webp', { quality: 82 });
  await convertImage('public/images/nicola.jpg', 'public/images/nicola.webp', { quality: 82 });
  await convertImage('public/images/olia.png', 'public/images/olia.webp', { quality: 82 });

  // Sector images
  await convertImage('public/images/Cons.png', 'public/images/construction.webp', { quality: 80 });
  await convertImage('public/images/Cons.png', 'public/images/construction-recruitment-agency.webp', { quality: 80 });
  await convertImage('public/images/Engineerings.png', 'public/images/engineering.webp', { quality: 80 });
  await convertImage('public/images/Engineerings.png', 'public/images/engineering-recruitment-agency.webp', { quality: 80 });
  await convertImage('public/images/Renewabless.png', 'public/images/renewables.webp', { quality: 80 });
  await convertImage('public/images/Renewabless.png', 'public/images/renewable-energy-recruitment-agency.webp', { quality: 80 });
  await convertImage('public/images/Logisticss.png', 'public/images/logistics.webp', { quality: 80 });
  await convertImage('public/images/Healthcares.png', 'public/images/healthcare.webp', { quality: 80 });
  await convertImage('public/images/Educations.png', 'public/images/education.webp', { quality: 80 });
  await convertImage('public/images/Businesssss.png', 'public/images/it-tech.webp', { quality: 80 });
  await convertImage('public/images/comercial.png', 'public/images/commercial.webp', { quality: 80 });
  await convertImage('public/images/Facilitiess.png', 'public/images/facilities.webp', { quality: 80 });
  await convertImage('public/images/Hospitalitys.png', 'public/images/hospitality.webp', { quality: 80 });

  // Large background assets
  if (fs.existsSync(path.join(__dirname, '../public/assets/general.png'))) {
    await convertImage('public/assets/general.png', 'public/assets/general.webp', { quality: 80 });
  }

  console.log('All image conversions complete!');
}

run();
