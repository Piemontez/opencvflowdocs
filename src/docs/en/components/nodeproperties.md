---
title: 'Node Properties'
description: 'OpenCV-Flow properties configuration'
---

```typescript
export class DilateComponent extends CVFIOComponent {
  //Nav Bar Menu link Definitions
  static menu = { tabTitle: "Arithmetic", title: 'Dilate' };

  static processor = class DilateNode extends CVFNodeProcessor {
    //Node property type configurations
    //Properties defined here are displayed in the properties panel for editing
    properties = [
      { name: 'kernel', type: PropertyType.OneZeroMatrix },
      { name: 'anchor', type: PropertyType.Point },
      { name: 'iterations', type: PropertyType.Integer },
      { name: 'borderType', type: PropertyType.BorderType },
      { name: 'borderValue', type: PropertyType.Scalar },
    ];

    kernel: Mat = cv.getStructuringElement(
      cv.MORPH_ELLIPSE,
      new cv.Size(3, 3),
      new cv.Point(-1, -1)
    );
    anchor: Point = new cv.Point(-1, -1);
    iterations: number = 1; //int
    borderType: BorderTypes = cv.BORDER_CONSTANT; //int
    borderValue: Scalar = cv.morphologyDefaultBorderValue();

    async proccess() {
        //....
    }
  };
}
```


## Property Types


```typescript
enum PropertyType {
  //IDE Types
  Text,
  Integer,
  Decimal,
  Boolean,
  Choice,
  MultiChoice,
  OneZeroMatrix,
  IntMatrix,
  DoubleMatrix,
  //OpenCV Types
  Size = 1000,
  Point,
  Scalar,
  ColorConversionCodes,
  BorderType
}
```
