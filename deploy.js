// Simple deployment helper script

const fs = require('fs');
const path = require('path');

// Function to check and fix image paths in HTML files
function fixImagePaths() {
  console.log('Checking for absolute paths in HTML files...');
  
  const htmlFiles = ['index.html'];
  let fixedCount = 0;
  
  htmlFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      console.log(`File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix image paths that start with a leading slash
    const originalContent = content;
    content = content.replace(/src=\"\/(images\/[^\"]+)\"/g, 'src="$1"');
    
    // Fix other resource paths if needed
    content = content.replace(/href=\"\/(css\/[^\"]+)\"/g, 'href="$1"');
    content = content.replace(/href=\"\/(js\/[^\"]+)\"/g, 'href="$1"');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      fixedCount++;
      console.log(`Fixed paths in ${file}`);
    }
  });
  
  if (fixedCount === 0) {
    console.log('No absolute paths found. All files are ready for deployment!');
  } else {
    console.log(`Fixed absolute paths in ${fixedCount} files.`);
  }
}

// Ensure .nojekyll file exists
function ensureNoJekyll() {
  const nojekyllPath = '.nojekyll';
  if (!fs.existsSync(nojekyllPath)) {
    fs.writeFileSync(nojekyllPath, '', 'utf8');
    console.log('.nojekyll file created to prevent Jekyll processing.');
  } else {
    console.log('.nojekyll file already exists.');
  }
}

// Main function
function prepareForDeployment() {
  console.log('Preparing files for GitHub Pages deployment...');
  ensureNoJekyll();
  fixImagePaths();
  console.log('Deployment preparation complete!');
  console.log('\nTo deploy to GitHub Pages:');
  console.log('1. Commit all changes');
  console.log('2. Push to your GitHub repository');
  console.log('3. Enable GitHub Pages in your repository settings');
}

// Run the preparation
prepareForDeployment();