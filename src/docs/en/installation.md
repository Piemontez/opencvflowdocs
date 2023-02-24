---
title: 'Installation & Run'
description: 'OpenCV-Flow Installation'
---

There are two ways to use the IDE, online or installing the application for desktop use.

## Online Version

Acesse from the link [OpenCV-Flow Online](http://online.opencvflow.org/), 

## Desktop

To install, download the project from git and run the npm install command as below.

```bash
git clone https://github.com/Piemontez/opencvflow.git

cd opencvflow

npm install
```

The local tool has shown to perform better than the online one.
Depending on the needs of the tests, it is recommended to use the desktop version.

## Build Requirement

OpencvFlow requires node installed on the computer.

Maybe some built-in dependencies also need [node-gyp](https://www.npmjs.com/package/node-gyp) installed on your computer.
And because of that you need to install Python as instructed by node-gyp.

## Run

```bash
npm run start
```

> The project is developed in Node version 14.
> So far no previous versions of Node have been tested and we don't know if the IDE works on those versions.

## Source

O código-fonte do projeto está disponível em [github](https://github.com/piemontez/opencvflow).
