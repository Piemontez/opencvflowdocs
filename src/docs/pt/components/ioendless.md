---
title: 'IO Endless Component'
description: 'IO Endless Component for OpenCV-Flow'
---

CVFIOEndlessComponent é semelhante ao IO Component, com a única diferença, a quantidade de entradas é ilimitada.
À medida que novas entradas são conectadas, novas entradas e saídas são criadas.

Abaixo está o componente criado para processar o detector de arestas Canny da biblioteca opencv.js.

```typescript
export class CannyComponent extends CVFIOEndlessComponent {
  static processor = class SobelProcessor extends CVFNodeProcessor {
    async proccess() {
      this.sources = [];
      for (const src of this.inputs) {
        const dst = new cv.Mat(src.rows, src.cols, cv.CV_8UC1);

        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
        cv.Canny(src,dst, 80, 170);

        this.sources.push(dst);
        this.output(dst);
      }
    }
  };
}
```