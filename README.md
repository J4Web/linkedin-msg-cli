# LinkedIn Message Generator 💼

[![npm version](https://img.shields.io/npm/v/linkedin-msg-cli)](https://www.npmjs.com/package/linkedin-message-gen)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/linkedin-msg-cli)](https://www.npmtrends.com/linkedin-message-gen)

A CLI tool to generate personalized LinkedIn messages for job applications and referrals. Save time while maintaining professional outreach!


## Features ✨

- 🖥 Interactive CLI with guided prompts (powered by Inquirer.js)
- 📂 Role-based templates (Frontend, Backend, Blockchain, ML, etc.)
- 🎚 Customizable sections (Toggle Introduction/Skills/Projects/Resume)
- 🔗 Auto-formatting with proper LinkedIn message styling
- 📝 Config presets for frequently used configurations
- 📋 Copy to clipboard functionality

## Installation 📦

```bash
npm install linkedin-msg-cli
```


## Usage 🚀

```bash
 npx linkedin-msg-cli
 ```




## Tpical Workflow 🔄

Select role type:
? Select role type: (Use arrow keys)
❯ Frontend Developer 
  Backend Developer
  Full-stack Developer
  Blockchain Developer
  ML Engineer



Choose sections:
? Select sections to include: (Press <space> to select)
◉ Introduction
◉ Skills
◯ Resume
◯ Projects
◯ Custom Section


## Input dynamic content:

? Enter recipient's name: John Doe  
? Position applying for: Senior Frontend Engineer  
? Years of experience:  



## Get formatted output:

```
Hi John Doe,

I'm Jane Smith, a 3 year(s) experienced Frontend Developer at Tech Corp...

Skills Snapshot:

Frontend: React, TypeScript, Next.js
Backend: Node.js, Express

Projects:

E-commerce Platform
Built with Next.js and TypeScript
https://example.com/project

I'm excited about the opportunity to join Acme Corp as a Senior Frontend Engineer.```
