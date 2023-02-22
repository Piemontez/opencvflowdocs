---
title: 'Nós de Operações Morfológica'
description: 'OpenCV-Flow Nós de operações Morfológica'
---

 A Morfologia Matemática é um instrumento para extração de componentes da imagem, útil para representação e descrição da forma de uma região, 
 como fronteiras, esqueletos, realce, filtragem, segmentação, esqueletização e outros.

## Erode & Dilate

Erosão e dilatação são a base de todas as operações morfológicas de processamento de imagem. 

Por meio de um elemento estruturante a erosão realizaa uma busca na imagem tal estrutura,
e cria uma imagem de saida onde cada pixel nesta imagem indica que a estrutura foi localizada.

A dilatação por sua vez, para cada pixel da imagem de entrada que possuir uma informação,
replica a estrutura na imagem de saída.

![Erode & Dilate](../../assets/morphology/erode_dilate.png)

Os tipos de saídas destes componentes são:

| Saída     | Descrição |
|-----------|-----------|
| Out       | Imagem / **Opencv Mat**   |

## Opening & Closing 

A abertura e fechamente são operações que apenas enfileram as operações de erosão e dilatação.

A abertura realiza a operação erosão seguida da dilatação. 
Esta sequência de operações resulta na aberturas de estruturas na imagem.

O fechamento realiza a operação dilatação seguida da erosão.
Esta sequência de operações resulta no fechamento de estruturas na imagem.


![Fingerprint](../../assets/morphology/fingerprint.png)

Os tipos de saídas destes componentes são:

| Saída     | Descrição |
|-----------|-----------|
| Out       | Imagem / **Opencv Mat**   |
