const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

async function generateIco() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  try {
    // Read the PNG files we want to include in the ICO
    const files = [
      path.join(publicDir, 'favicon-16x16.png'),
      path.join(publicDir, 'favicon-32x32.png'),
      path.join(publicDir, 'favicon-48x48.png')
    ];
    
    const ico = await pngToIco(files);
    
    // Write the ICO file
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
    console.log('Generated favicon.ico successfully!');
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
  }
}

generateIco();