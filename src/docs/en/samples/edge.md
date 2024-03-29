---
title: "Edge Detection"
description: "OpenCV-Flow - Erode and Dilate Samples"
---

![OpenCV-Flow Example](../../assets/samples/edge.jpeg)

The example in the illustration above uses the OpenCV 4 Edge Operators (
[Sobel](https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gacea54f142e81b6758cb6f375ce782c8d)
[Laplace](https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gad78703e4c8fe703d479c1860d76429e6)
[Canny](https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html)
[Scharr](https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gaa13106761eedf14798f37aa2d60404c9)
[Find Contours](https://docs.opencv.org/4.x/d5/daa/tutorial_js_contours_begin.html)
)

These operators are available in the Edge menu.

Fallow the source code:

```typescript

/**
 * Sobel component and node
 */
export class CVSobelComponent extends CVFIOComponent {
  static menu = { tabTitle: tabName, title: 'Sobel' };

  static processor = class SobelProcessor extends CVFNodeProcessor {
    properties = [
      { name: 'dDepth', type: PropertyType.Integer },
      { name: 'dX', type: PropertyType.Integer },
      { name: 'dY', type: PropertyType.Integer },
      { name: 'kSize', type: PropertyType.Integer },
      { name: 'scale', type: PropertyType.Decimal },
      { name: 'delta', type: PropertyType.Decimal },
      { name: 'borderType', type: PropertyType.BorderType },
    ];

    dDepth: number = cv.CV_8U;
    dX: number = 1;
    dY: number = 0;
    kSize: number = 3;
    scale: number = 1;
    delta: number = 0;
    borderType: BorderTypes = cv.BORDER_DEFAULT;

    async proccess() {
      const { inputsAsMat: inputs } = this;
      if (inputs.length) {
        this.sources = [];
        for (const src of inputs) {
          if (!src) continue;

          const out = new cv.Mat(src.rows, src.cols, cv.CV_8UC1);
          GCStore.add(out);

          cv.Sobel(
            src,
            out,
            this.dDepth,
            this.dX,
            this.dY,
            this.kSize,
            this.scale,
            this.delta,
            this.borderType
          );

          this.sources.push(out);

          this.output(out);
        }
      }
    }
  };
}

/**
 * Canny component and node
 */
export class CannyComponent extends CVFIOComponent {
  static menu = { tabTitle: tabName, title: 'Canny' };
  static processor = class CannyNode extends CVFNodeProcessor {
    properties = [
      { name: 'tthreshold1', type: PropertyType.Decimal },
      { name: 'threshold2', type: PropertyType.Decimal },
      { name: 'aperturesize', type: PropertyType.Integer },
      { name: 'l2gradiente', type: PropertyType.Boolean },
    ];

    tthreshold1: number = 80;
    threshold2: number = 170;
    aperturesize: number = 3;
    l2gradiente: boolean = false;

    async proccess() {
      const { inputsAsMat: inputs } = this;
      if (inputs.length) {
        this.sources = [];
        for (const src of inputs) {
          if (!src) continue;

          const out = new cv.Mat(src.rows, src.cols, src.type());
          GCStore.add(out);

          cv.Canny(
            src,
            out,
            this.tthreshold1,
            this.tthreshold1
            // this.aperturesize, TODO: opencv-ts ainda não recebe este
            // this.L2gradiente, TODO: opencv-ts ainda não recebe este
          );
          this.sources.push(out);
          this.output(out);
        }
      }
    }
  };
}

/**
 * Laplacian component and node
 */
export class LaplacianComponent extends CVFIOComponent {
  static menu = { tabTitle: tabName, title: 'Laplacian' };
  static processor = class LaplacianNode extends CVFNodeProcessor {
    properties = [
      { name: 'dDepth', type: PropertyType.Integer },
      { name: 'kSize', type: PropertyType.Integer },
      { name: 'scale', type: PropertyType.Decimal },
      { name: 'delta', type: PropertyType.Decimal },
      { name: 'borderType', type: PropertyType.BorderType },
    ];

    dDepth: number = cv.CV_8U;
    kSize: number = 3;
    scale: number = 1;
    delta: number = 0;
    borderType: BorderTypes = cv.BORDER_DEFAULT;

    async proccess() {
      const { inputsAsMat: inputs } = this;
      if (inputs.length) {
        this.sources = [];
        for (const src of inputs) {
          if (!src) continue;

          const out = new cv.Mat(src.rows, src.cols, src.type());
          GCStore.add(out);

          cv.Laplacian(
            src,
            out,
            this.dDepth,
            this.kSize,
            this.scale,
            this.delta,
            this.borderType
          );
          this.sources.push(out);
          this.output(out);
        }
      }
    }
  };
}

/**
 * Scharr component and node
 */
export class ScharrComponent extends CVFIOComponent {
  static menu = { tabTitle: tabName, title: 'Scharr' };
  static processor = class ScharrNode extends CVFNodeProcessor {
    properties = [
      { name: 'ddepth', type: PropertyType.Integer },
      { name: 'dx', type: PropertyType.Integer },
      { name: 'dy', type: PropertyType.Integer },
      { name: 'scale', type: PropertyType.Decimal },
      { name: 'delta', type: PropertyType.Decimal },
      { name: 'borderType', type: PropertyType.BorderType },
    ];

    ddepth: number = -1;
    dx: number = 1;
    dy: number = 0;
    scale: number = 1;
    delta: number = 0;
    borderType: BorderTypes = cv.BORDER_DEFAULT;

    async proccess() {
      const { inputsAsMat: inputs } = this;
      if (inputs.length) {
        this.sources = [];
        for (const src of inputs) {
          const out = new cv.Mat(src.rows, src.cols, src.type());
          GCStore.add(out);

          cv.Scharr(
            src,
            out,
            this.ddepth,
            this.dx,
            this.dy,
            this.scale,
            this.delta,
            this.borderType
          );
          this.sources.push(out);
          this.output(out);
        }
      }
    }
  };
}

/**
 * FindContours component and node
 */
export class FindContoursComponent extends CVFComponent {
  static menu = { tabTitle: tabName, title: 'Find Contours' };
  targets: TargetHandle[] = [{ title: 'src', position: Position.Left }];
  sources: SourceHandle[] = [
    { title: 'contours', position: Position.Right },
    { title: 'hierarchy', position: Position.Right },
  ];

  componentDidMount() {
    this.addOption(CVFComponentOptions.NOT_DISPLAY);
  }

  static processor = class FindContoursNode extends CVFNodeProcessor {
    properties = [
      { name: 'mode', type: PropertyType.Integer },
      { name: 'method', type: PropertyType.Integer },
    ];

    mode: RetrievalModes = cv.RETR_TREE;
    method: ContourApproximationModes = cv.CHAIN_APPROX_SIMPLE;

    async proccess() {
      const { inputsAsMat: inputs } = this;
      if (inputs.length) {
        const [src] = inputs;
        if (!src) return;

        const contours = new cv.MatVector();
        const hierarchy = new cv.Mat();
        GCStore.add(contours);
        GCStore.add(hierarchy);

        cv.findContours(src, contours, hierarchy, this.mode, this.method);

        this.sources = [contours, hierarchy];
      } else {
        this.sources = [];
      }
    }
  };
}
```
