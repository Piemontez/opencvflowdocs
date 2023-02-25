---
title: 'Smoothing Knots'
description: 'OpenCV-Flow Smoothing Nodes'
---

Smoothing nodes, perform operations to blur the image, are usually used to remove noise from the image.

> The main output of the input nodes is an opencv.js type Mat matrix.
> Outputs can have different color channel angles.

## Blur

OpenCV function: **cv.blur**

Image blurring is achieved by convolving the image with a low-pass filter kernel. It is useful for removing noise. 
It actually removes high frequency content (eg: noise, edges) from the image. 
So edges are blurred a little bit in this operation (there are also blurring techniques which don't blur the edges). OpenCV provides four main types of blurring techniques
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## Gaussian

OpenCV function: **cv.GaussianBlur**

In this method, instead of a box filter, a Gaussian kernel is used. 
It is done with the function, cv.GaussianBlur(). 
We should specify the width and height of the kernel which should be positive and odd. We also should specify the standard deviation in the X and Y directions, sigmaX and sigmaY respectively. 
If only sigmaX is specified, sigmaY is taken as the same as sigmaX. 
If both are given as zeros, they are calculated from the kernel size. Gaussian blurring is highly effective in removing Gaussian noise from an image
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## Media 

OpenCV function: **cv.medianBlur**

Here, the function cv.medianBlur() takes the median of all the pixels under the kernel area and the central element is replaced with this median value. 
This is highly effective against salt-and-pepper noise in an image
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## Bilateral Filtering

OpenCV function: **cv.bilateralFilter**

cv.bilateralFilter() is highly effective in noise removal while keeping edges sharp. 
But the operation is slower compared to other filters. We already saw that a Gaussian filter takes the neighbourhood around the pixel and finds its Gaussian weighted average.
This Gaussian filter is a function of space alone, that is, nearby pixels are considered while filtering. 
It doesn't consider whether pixels have almost the same intensity. It doesn't consider whether a pixel is an edge pixel or not. So it blurs the edges also, which we don't want to do
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

Bilateral filtering also takes a Gaussian filter in space, but one more Gaussian filter which is a function of pixel difference. 
The Gaussian function of space makes sure that only nearby pixels are considered for blurring, 
while the Gaussian function of intensity difference makes sure that only those pixels with similar intensities to the central pixel are considered for blurring. 
So it preserves the edges since pixels at edges will have large intensity variation
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).

## 2D Convolution / filter2D

OpenCV function: **cv.filter2D**

OpenCV provides a cv.filter2D() function to convolve a kernel with an image
([OpenCV 4 Docs](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)).