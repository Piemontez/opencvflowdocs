---
title: "Background Remove"
description: "OpenCV-Flow - Background Remove Sample"
---

![OpenCV-Flow Example](../../assets/samples/bg_remove.webp)

O exemplo da ilustração acima usa a técnica OpenCV 4 [BackgroundSubtractorMOG2](https://docs.opencv.org/4.5.5/d7/d7b/classcv_1_1BackgroundSubtractorMOG2.html).

Para adicioná-lo ao fluxo, clique em imgproc -> BackgroundSubtractorMOG2.

Segue o código fonte:

```typescript
/**
 * BackgroundSubtractorMOG2 component and node
 */
export class BackgroundSubtractorMOG2Component extends CVFIOComponent {
  static menu = { tabTitle: tabName, title: "BGSubtractorMog2" };
  static processor = class MedianBlurNode extends CVFNodeProcessor {
    properties = [
      { name: "history", type: PropertyType.Integer },
      { name: "varThreshold", type: PropertyType.Decimal },
      { name: "detectShadows", type: PropertyType.Boolean },
    ];

    history: number = 500;
    varThreshold: number = 16;
    detectShadows: boolean = true;

    subtractor?: BackgroundSubtractorMOG2;
    fgmask?: Mat;

    async start() {
      this.subtractor = new cv.BackgroundSubtractorMOG2(
        this.history,
        this.varThreshold,
        this.detectShadows
      );
    }

    async proccess() {
      const { inputs } = this;
      if (inputs.length) {
        this.sources = [];
        inputs.forEach((src) => {
          if (!this.fgmask)
            this.fgmask = new cv.Mat(src.rows, src.cols, cv.CV_8UC1);

          this.subtractor!.apply(src, this.fgmask);

          this.sources.push(this.fgmask);
          this.output(this.fgmask);
        });
      }
    }

    async stop() {
      this.fgmask?.delete();
      this.fgmask = undefined;
    }
  };
}
```
