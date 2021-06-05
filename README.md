<h1 align="center">
  Puppeteer in WSL 2
</h1>

## Guide

- [Getting Started](#getting-started)
  - [Windows](#windows)
    - [VcXsrv](#vcxsrv)
      - [Download VcXsrv](#download-vcxsrv)
      - [Install VcXsrv](#install-vcxsrv)
      - [Usage VcXsrv](#usage-vcxsrv)
  - [Linux (WSL 2)](#linux-wsl-2)
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
- [Common Questions](#common-questions)
- [Possibles Problems](#possibles-problems)
- [References](#references)

[](#getting-started)

[](#windows)

[](#vcxsrv)

[](#download-vcxsrv)

## Download VcXsrv

> Click to [here](https://ufpr.dl.sourceforge.net/project/vcxsrv/vcxsrv/1.20.9.0/vcxsrv-64.1.20.9.0.installer.exe) for downloading VcXsrv

[](#install-vcxsrv)

## Install VcXsrv

> Open the file `vcxsrv-64.1.20.9.0.installer.exe`.  
> Select the type of install `Full`, click in next and install.  
> After installing click in `Close` to finish.

[](#usage-vcxsrv)

## Usage VcXsrv

> Press `Win` to open search bar, and open program `XLaunch`.

![open-xlaunch](https://user-images.githubusercontent.com/55293671/119524211-d21d4180-bd53-11eb-8112-081a1fd96a1f.png)

> Select display setting `Multiple windows`, with Display number `-1` and next.

![display-settings-and-next](https://user-images.githubusercontent.com/55293671/119524210-d184ab00-bd53-11eb-9472-e8157d9529ce.png)

> Select option `Start no client`, and next.

![select-start-no-client-and-next](https://user-images.githubusercontent.com/55293671/119524214-d2b5d800-bd53-11eb-8c76-6bdb9978aa7f.png)

> Check the option `Disable access control`, and next.

![select-disable-access-control-and-next](https://user-images.githubusercontent.com/55293671/119524213-d2b5d800-bd53-11eb-85a2-87e74f663674.png)

> Click to `Finish`

![click-to-finish](https://user-images.githubusercontent.com/55293671/119524711-435cf480-bd54-11eb-87ab-b0919c972ef7.png)

> The XLaunch Srv running in background.

![background-running](https://user-images.githubusercontent.com/55293671/119525185-ababd600-bd54-11eb-9003-7190cb7c9abf.png)

[](#linux-wsl-2)

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

[](common-questions)

## Common Questions

**How to Automate execution of program XLaunch and script WSL 2 Bridge Mode?**  
R: Click to [here](https://gist.github.com/HallexCosta/c090c1dfe5e6ff26333ad8d29bb6aed9) for go along a easy tutorial step to step.
  
**Software for auto execution script using DotNet v5.0**  
R: Click to [here](https://github.com/HallexCosta/wsl2-fix-network-gui/) for go along repository.

[](#possibles-problems)

## Possibles Problems:

Failed to download Chromium r536395! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.  
https://github.com/puppeteer/puppeteer/issues/2173

[](#references)

## References:

https://github.com/puppeteer/puppeteer/issues/1837#issuecomment-689006806  
https://ohaleks.hashnode.dev/using-puppeteer-on-windows-with-wsl  
https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress
