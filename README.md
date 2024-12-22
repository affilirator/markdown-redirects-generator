# Markdown Redirects Generator

![Markdown Redirects Generator](https://img.shields.io/badge/node-%3E%3D14-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## Overview

The **Markdown Redirects Generator** is a simple Node.js application that scans a directory of Markdown (`.md`) files and generates a `_redirects` file for use in static site hosting services like Netlify. Each Markdown file is transformed into a redirect rule that maps the source URL to a blog URL, making it easy to manage your site's routing.

## Features

- **Automatic Redirect Generation**: Converts `.md` filenames into redirect rules.
- **Customizable Output**: Easily modify the source and destination URL formats.
- **Lightweight and Fast**: Simple script with minimal dependencies.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- Basic knowledge of JavaScript and command-line interface

### Installation

1. **Clone the repository**:

   - git clone https://github.com/affilirator/markdown-redirects-generator.git
   - cd markdown-redirects-generator

2. **Install dependencies** (if any):

   npm install

3. **Create a directory for your Markdown files**:
   mkdir markdown

4. **Add your `.md` files** to the `markdown` directory.

### Usage

To generate the `_redirects` file, run the following command:
node generateRedirects.js

After running the script, you will find a new file named `_redirects` in your project directory containing the redirect rules based on your Markdown files.

### Example

Given the following Markdown files in the `markdown` directory: - why-you-dream.md - how-to-code.md - understanding-ai.md

The generated `_redirects` file will look like this:

/why-you-dream/ /blog/why-you-dream/ 301
/how-to-code/ /blog/how-to-code/ 301
/understanding-ai/ /blog/understanding-ai/ 301

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add features, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch:

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need for efficient URL management in static sites.
- Thanks to the open-source community for their continuous support!

---

Feel free to reach out if you have any questions or need assistance!
