---
title: 'IO Component'
description: 'IO Component for OpenCV-Flow'
---

CVFIOComponent são componentes com apenas uma entrada de dados e uma saída de dados.

A maioria dos componentes OpenCV-Flow foram criados com este componente. Este componente é ideal para adicionar um nó de processador independente.

Abaixo está o componente criado para processar o detector de bordas Sobel da biblioteca opencv.js.


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