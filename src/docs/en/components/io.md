---
title: 'IO Component'
description: 'IO Component for OpenCV-Flow'
---

CVFIOComponent are components with only one data input and one data output.

Most OpenCV-Flow components were created with this component. It is component ideal for adding a standalone processor node.

Below is the component created to process the Sobel edge detector from the opencv.js library.


```typescript
export class SobelComponent extends CVFIOComponent {
  static processor = class SobelProcessor extends CVFNodeProcessor {
    async proccess() {
      this.sources = [];
      for (const src of this.inputs) {
        const dst = new cv.Mat(src.rows, src.cols, cv.CV_8UC1);

        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
        cv.Sobel(src,dst, cv.CV_8U, 1, 0, 3, 1, 0, cv.BORDER_DEFAULT);

        this.sources.push(dst);
        this.output(dst);
      }
    }
  };
}
```