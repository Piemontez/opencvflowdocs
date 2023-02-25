---
title: 'Converter Nodes'
description: 'OpenCV-Flow Converter Nodes'
---

Converter nodes are components that perform data type conversion in order to enable operations between components.

These components are needed as a pre-processing step for many components that use the opencv.js library.
Many components use a specific amount of image channels, 
certain components process only integer data types and others only decimal, 
and also components that process data in floating point ranges between 0 and 1.

> It is recommended that IDE users have basic knowledge of how the OpenCV library works,
> or at least know how the structure of the Mat Matrix of this library.
> Read more at:
> [Mat - The Basic Image Container](https://docs.opencv.org/4.x/d6/d6d/tutorial_mat_the_basic_image_container.html)
> and
> [Basic Operations on Images](https://docs.opencv.org/4.x/de/d06/tutorial_js_basic_ops.html)

## Cvt Color

OpenCV function: **cv.cvtColor**

Component responsible for converting the color space of an Opencv.js Mat matrix.

![Video Capture](../../assets/conversors/cvtconversors.png)

| Output    | Description |
|-----------|-------------|
| Out       | Image / **Opencv Mat**   |


## Conver To

OpenCV function: **Mat.convertTo**

Component that converts a matrix into another type of data with the possibility of informing the conversion scale.

For example: with this component you can convert an array of integers to a floating point array with a scale of 0 to 1.

| Output    | Description |
|-----------|-------------|
| Out       | Image / **Opencv Mat**   |
