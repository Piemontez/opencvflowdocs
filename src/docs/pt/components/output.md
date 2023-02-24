---
title: "Output Component"
description: "Output Component for OpenCV-Flow"
---

O componente de saída permite criar um nó com apenas uma saída.

Abaixo está o componente criado para fazer um Kernel Gaussiano a partir da biblioteca opencv.js.

```typescript
export class GaussianKernel2DComponent extends CVFOutputComponent {
  static processor = class GaussianKernelProcessor extends CVFNodeProcessor {
    rows: number = 150; //Mat rows
    cols: number = 150; //Mat cols
    sigma: number = -1; //Gaussian sigma

    async proccess() {
      this.sources = [];
      for (const src of this.inputs) {
        const dst = new cv.Mat(this.rows, this.cols, cv.CV_32F, new cv.Scalar(0));

        const gaus = cv.getGaussianKernel(this.rows, this.sigma, cv.CV_32F);
        const gaust = cv.getGaussianKernel(this.cols, this.sigma, cv.CV_32F).t();

        cv.multiply(gaus, gaust, dst, 1);

        this.sources.push(dst);
        this.output(dst);
      }
    }
  };
}
```
