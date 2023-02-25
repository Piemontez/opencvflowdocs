---
title: 'Input Nodes'
description: 'OpenCV-Flow Input Nodes'
---

Input nodes are components that load videos and images or generate kernel of data to be processed by other components.

> The main output of the input nodes is an opencv.js type Mat matrix.
> Outputs can have different amounts of color channels.

## Video Capture

OpenCV function: **cv.VideoCapture**

Component responsible for capturing the video stream from the camera connected to the computer.

![Video Capture](../../assets/inputs/videocapture.png)

The outputs of this component are:

| Output    | Description |
|-----------|-------------|
| Out       | Image / **Opencv Mat**   |
| Rows      | Number of lines      |
| Cols      | Number of columns     |
| Type      | Type of image / **Opencv Mat Type**  |
| Channels  | Number of image channels |

## File Loader

The "File Loader" component loads images and videos from the computer.
The types of images that the IDE can load are limited to the types of images that the Opencv.js library loads.

The output types of this component are:

| Output    | Description |
|-----------|-------------|
| Out       | Image / **Opencv Mat**   |
| Rows      | Number of lines      |
| Cols      | Number of columns    |
| Type      | Type of image / **Opencv Mat Type**  |
| Channels  | Number of image channels |

## Kernel

O Componente "Kernel" cria um matriz Mat de saída, conforme o arranjo informado.
Os valores da matriz são 0 ou 1. 

![Kernel Capture](../../assets/inputs/kernelcapture.png)

Os tipos de saídas deste componente são:

| Output    | Description |
|-----------|-------------|
| Out       | Imagem / **Opencv Mat**   |


## Mat

The "Mat" Component creates an output Mat Matrix, according to the informed arrangement.
Array values can be informed via component properties.

The output types of this component are:

| Output    | Description |
|-----------|-------------|
| Out       | Image / **Opencv Mat**   |


## Structured Element

OpenCV function: **cv.getStructuringElement**

The "Structured Element" Component creates a structured image.
It is possible to create a rectangle, circle or cross type structure.

![Structured Element Capture](../../assets/inputs/structuredelementcapture.png)

The output types of this component are:

| Output    | Description |
|-----------|-------------|
| Out       | Image / **Opencv Mat**   |