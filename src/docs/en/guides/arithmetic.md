---
title: 'Arithmetic Operations Nodes'
description: 'OpenCV-Flow Arithmetic Operations Nodes'
---

Arithmetic operations nodes, perform basic math operations like addition, subtraction, multiplication, division.

> The main output of the input nodes is an opencv.js type Mat matrix.

The following is an example of basic math operations.
Observe the addition components, note that the first one became saturated because the sum of each pixel exceeded the maximum color allowed,
thus becoming white.

![Arithmétic Operation Sample](../../assets/arithmetic/samples_01.png)

## Add

OpenCV function: **cv.add**

This component calculates the sum of each pixel between two matrices.

## Subtract

OpenCV function: **cv.subtract**

This component calculates the subtraction of each pixel between two matrices.

## Multiply

OpenCV function: **cv.multiply**

This component calculates the multiplication between two matrices.

## Divide

OpenCV function: **cv.divide**

This component calculates the division of each pixel between two matrices.

## Mul

OpenCV function: **cv.mul**

This component calculates the element-by-element multiplication between two matrices.

## Normalize

OpenCV function: **cv.normalize**

This component normalizes the norm or range of values of an array.
There are several [types of normalization](https://docs.opencv.org/3.4/d2/de8/group__core__array.html#ga87eef7ee3970f86906d69a92cbf064bd) mathematics available in opencv.

## Convert Scale Abs

OpenCV function: **cv.convertScaleAbs**

This component scales, calculates absolute values and converts the result to 8 bits.