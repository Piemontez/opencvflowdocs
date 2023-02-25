---
title: 'Nós de Alisamento'
description: 'OpenCV-Flow Nós de Alisamento'
---

Nós de alisamento, realizam operações de desfoque da imagem, normalmente são utilizados para a remoção de ruídos da imagem. 

> A saída principal dos nós de entrada é uma matriz do tipo Mat do opencv.js.
> As saídas podem ter diferentes quantidades de canais de cores.

## Blur

Função OpenCV: **cv.blur**

O desfoque da imagem é obtido pela convolução da imagem com um kernel de filtro passa-baixo. 
É útil para remover o ruído. Na verdade, ele remove o conteúdo de alta frequência (por exemplo: ruído, bordas) da imagem. 
Portanto, as bordas ficam um pouco desfocadas nesta operação
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## Gaussian

Função OpenCV: **cv.GaussianBlur**

Neste método, em vez de um filtro de caixa, um kernel gaussiano é usado. Isso é feito com a função cv.GaussianBlur(). 
Devemos especificar a largura e altura do kernel que deve ser positivo e ímpar. 
Também devemos especificar o desvio padrão nas direções X e Y, sigmaX e sigmaY respectivamente. 
Se apenas sigmaX for especificado, sigmaY será considerado o mesmo que sigmaX. 
Se ambos forem dados como zeros, eles serão calculados a partir do tamanho do kernel. 
O desfoque gaussiano é altamente eficaz na remoção do ruído gaussiano de uma imagem
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## Media 

Função OpenCV: **cv.medianBlur**

Aqui, a função cv.medianBlur() pega a mediana de todos os pixels sob a área do kernel e o elemento central é substituído por esse valor mediano. Isso é altamente eficaz contra o ruído de sal e pimenta em uma imagem
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## Bilateral Filtering

Função OpenCV: **cv.bilateralFilter**

cv.bilateralFilter() é altamente eficaz na remoção de ruído, mantendo arestas vivas. Mas a operação é mais lenta em comparação com outros filtros. Já vimos que um filtro gaussiano pega a vizinhança ao redor do pixel e encontra sua média ponderada gaussiana. Este filtro gaussiano é uma função apenas do espaço, ou seja, os pixels próximos são considerados durante a filtragem. Não considera se os pixels têm quase a mesma intensidade. Ele não considera se um pixel é um pixel de borda ou não. Assim, também desfoca as bordas, o que não queremos fazer
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).


A filtragem bilateral também leva um filtro gaussiano no espaço, mas mais um filtro gaussiano que é uma função da diferença de pixels. 
A função gaussiana de espaço garante que apenas os pixels próximos sejam considerados para desfoque, enquanto a função gaussiana de diferença de intensidade garante que apenas os pixels com intensidades semelhantes ao pixel central sejam considerados para desfoque. 
Assim ele preserva as bordas já que os pixels nas bordas terão grande variação de intensidade
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## 2D Convolution / filter2D

Função OpenCV: **cv.filter2D**

O OpenCV fornece uma função cv.filter2D() para convoluir um kernel com uma imagem
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).