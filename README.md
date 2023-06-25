# XSS-Keylogger
Simple script that sends every keypresses by victim to a Node.js app on attacker side.

# Usage
## Attacker

On your Kali:

        # git clone https://github.com/yashar0x/XSS-Keylogger
        # cd XSS-Keylogger

Update the npm package manager globally to the latest version and clear the npm cache, which can help resolve certain installation issues:

        # npm install -g npm@latest
        # npm cache clean --force

Initialize a new npm package in the current directory, creating a package.json file:

        # npm init

Install the dependencies:

        # npm install express body-parser

Define the location of .crt and .key files in [server.js](server.js) file:

        const server = https.createServer({
        key: fs.readFileSync('{.key file location}'),
        cert: fs.readFileSync('{.crt file location}'),
        }, app);

**How to create a self-signed certificate using openssl: [LINK](https://devopscube.com/create-self-signed-certificates-openssl/)**

Run Node.js server:

        # node server.js

## Victim

Set the attacker's IP/Domain address and simply inject the content of [keylogger-script.js](keylogger-script.js) file into the victim's application.

**If you want to see XSS-Keylogger in action: [Stored-XSS led to Keylogger injection](https://yashar.pro/stored-xss-led-to-keylogger-injection/)**

## Disclaimer
**This tool is made for educational purposes only and I am not responsible for any abusive**
