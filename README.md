<h1 align="center">
  Puppeteer in WSL 2
</h1>

## Guide

- [Getting Started](#getting-started)
  - [Update APT Packages](#update-apt-packages)
  - [Configure Sudoers](#configure-sudoers)
    - [Paste Sudoers Configs](#paste-sudoers-configs)
    - [Save Dbus File](#save-dbus-file)
  - [Create Project Folder](#create-project-folder)
    - [Install puppeteer libraries](#install-puppeteer-libraries)
    - [Initialization NodeJS Project](#initialization-nodejs-project)
    - [Install Puppeteer](#install-puppeteer)
    - [Active Modules in NodeJS](#active-modules-in-nodejs)
    - [Code](#code)
    - [Run Project](#run-project)
    - [Finish](#Finish)
- [References](#references)
- [Possibles Problems](#possibles-problems)

[](#getting-started)

[](#update-apt-packages)

## Update APT packages

> Run command bellow

```sh
# Step 1
$ sudo apt update
# Step 2
$ sudo apt upgrade
```

[](#configure-sudoers)

## Configure Sudoers

> Run command bellow

```sh
# Open dbus files
$ sudo vim /etc/sudoers.d/dbus
```

[](#paste-sudoers-configs)

## Paste Sudoers Configs

```sh
# /etc/sudoers.d/dbus
<yourname> ALL = (root) NOPASSWD: /etc/init.d/dbus
```

[](#save-dbus-file)

## Save Dbus File

> Save file, back to normal mode with _<ESC>_ and execute _:wq_
> to write and exit of file

[](#create-project-folder)

## Create project folder and enter

> Run command bellow

```sh
$ mkdir pup-wsl2 && cd pup-wsl2
```

[](#install-puppeteer-libraries)

## Install puppeteer libraries

> Run command bellow

```sh
$ sudo apt install libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
```

[](#initialization-nodejs-project)

## Initialization NodeJS Project

> Run command bellow

```sh
$ npm init -y
```

[](#install-puppeteer)

## Install puppeteer

> Run command bellow

```sh
$ npm install puppeteer
```

[](#active-modules-in-nodejs)

## Active modules in NodeJS

> Open file `pacakge.json` and add config `{"type": "module"}`, thus:

**Before**

```json
{
  "name": "pup-wsl2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "puppeteer": "^9.1.1"
  }
}
```

**After**

```json
{
  "name": "pup-wsl2",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "puppeteer": "^9.1.1"
  }
}
```

[](#code)

## Code

> Create new file index.js and copy/paste of code

```javascript
import puppeteer from "puppeteer";

(async () => {
  const b = await puppeteer.launch({
    headless: false,
  });
  const p = await b.newPage();
  await p.goto("https://example.com");
})();
```

[](#run-project)

## Run project

> Run command bellow

```sh
$ node index.js
```

[](#finish)

## Finish

> Should open the browser in goto page `https://example.com`

---

[](#possibles-problems)

## Possibles Problems:

Failed to download Chromium r536395! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.  
https://github.com/puppeteer/puppeteer/issues/2173

---

[](#references)

## References:

https://github.com/puppeteer/puppeteer/issues/1837#issuecomment-689006806  
https://ohaleks.hashnode.dev/using-puppeteer-on-windows-with-wsl  
https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress
