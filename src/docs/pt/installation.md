---
title: 'Instalação e Execução'
description: 'OpenCV-Flow Instalação e Execução'
---

Para rodar a aplicação instale o NodeJS 18+ e realize as etapas descritas em Build e Run.

## Build

A versão online esta disponível no link [OpenCV-Flow Online](http://online.opencvflow.org/), 

```bash
git clone https://github.com/Piemontez/opencvflow.git

cd opencvflow

npm install
```

A ferramente local demonstrou ter desempenho maior que a online.
Dependendo da necessidade dos testes é recomendado utilizar a versão desktop.

## Requisito de Construção

O OpencvFlow requer node instalado no computador.

Talvez algumas dependências internas dependam do [node-gyp](https://www.npmjs.com/package/node-gyp) instalado no seu computador.
E por causa disso você precisa instalar o Python conforme instruído pelo node-gyp.

## Run

```bash
npm run start
```

> O projeto é desenvolvido em Node versão 14.
> Até o momento não foram testadas versões anteriores do Node e não sabemos se o IDE funciona nessas versões.

## Source

The source code of the project is available at [github](https://github.com/piemontez/opencvflow).
