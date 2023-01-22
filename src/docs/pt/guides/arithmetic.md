---
title: 'Nós de Operações Aritiméticas'
description: 'OpenCV-Flow Nós de Operações Aritiméticas'
---

Nós de operações aritiméticas, realizam operações matemáticas básicas como adição, subtração, multiplicação, divisão.

> A saída principal dos nós de entrada é uma matriz do tipo Mat do opencv.js.

A seguir um exemplo de operações básicas de operações matemáticas. 
Observe os componentes de adição, note que o primeiro ficou saturado pois a soma de cada pixel ultrapassou o máximo de cor permitido,
ficando assim com a cor branca.

![Arithmétic Operation Sample](../../assets/arithmetic/samples_01.png)


## Add

Função OpenCV: **cv.add**

Este componente calcula a soma de cada pixel entre duas matrizes.

## Subtract

Função OpenCV: **cv.subtract**

Este componente calcula a subtração de cada pixel entre duas matrizes.

## Multiply

Função OpenCV: **cv.multiply**

Este componente calcula a multiplicação entre duas matrizes.

## Divide

Função OpenCV: **cv.divide**

Este componente calcula a divisão de cada pixel entre duas matrizes.

## Mul

Função OpenCV: **cv.mul**

Este componente calcula a multiplicação elemento a elemento entre duas matrizes.

## Normalize

Função OpenCV: **cv.normalize**

Ente componente normaliza a norma ou intervalo de valores de uma matriz. 
Existem diversos [tipos de normalização](https://docs.opencv.org/3.4/d2/de8/group__core__array.html#ga87eef7ee3970f86906d69a92cbf064bd) matemáticas disponíveis no opencv.

## Convert Scale Abs

Função OpenCV: **cv.convertScaleAbs**

Este componente dimensiona, calcula valores absolutos e converte o resultado em 8 bits.