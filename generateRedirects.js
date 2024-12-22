// generateRedirects.js

const fs = require("fs");
const path = require("path");

// Directory containing .md files
const markdownDir = path.join(__dirname, "markdown"); // Change this to your markdown directory
const redirectsFile = path.join(__dirname, "_redirects");

// Function to generate redirects
function generateRedirects() {
  // Read all files in the markdown directory
  fs.readdir(markdownDir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    const redirects = [];

    // Iterate through each file
    files.forEach((file) => {
      // Check for .md file extension
      if (path.extname(file) === ".md") {
        const baseName = path.basename(file, ".md"); // Get the file name without extension

        // Create the source and destination URLs
        const sourceUrl = `/${baseName}/`;
        const destinationUrl = `/blog/${baseName}/`;

        // Add the redirect entry with status code 301
        redirects.push(`${sourceUrl} ${destinationUrl} 301`);
      }
    });

    // Write the redirects to the _redirects file
    fs.writeFile(redirectsFile, redirects.join("\n"), (err) => {
      if (err) {
        console.error("Error writing redirects file:", err);
      } else {
        console.log("Redirects generated successfully!");
      }
    });
  });
}

// Run the function
generateRedirects();
