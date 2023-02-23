---
title: 'Instalação e Execução'
description: 'OpenCV-Flow Instalação e Execução'
---

Existem duas formas de usar a IDE, de forma online ou instalando a aplicação para uso desktop. 

## Versão Online

Acesse o link [OpenCV-Flow Online](http://online.opencvflow.org/), 

## Desktop

Para instalar, baixe o projeto do git e rode o comando de instalação do npm conforme abaixo.

```bash
git clone https://github.com/Piemontez/opencvflow.git

cd opencvflow

npm install
```

A ferramente local demonstrou ter desempenho maior que a online.
Dependendo da necessidade dos testes é recomendado utilizar a versão desktop.

## Requisito de Construção
O OpencvFlow requer node instalado no computador.

Talvez algumas dependências internas também precisem do [node-gyp](https://www.npmjs.com/package/node-gyp) instalado no seu computador.
E por causa disso você precisa instalar o Python conforme instruído pelo node-gyp.

## Run

```bash
npm run start
```

> O projeto é desenvolvido em Node versão 14.
> Até o momento não foram testadas versões anteriores do Node e não sabemos se o IDE funciona nessas versões.

## Source

O código-fonte do projeto está disponível em [github](https://github.com/piemontez/opencvflow).
