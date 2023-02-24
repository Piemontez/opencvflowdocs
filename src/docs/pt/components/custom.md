---
title: "Custom Component"
description: "Custom Component for OpenCV-Flow"
---

O OpenCV-Flow permite criar componentes com entradas e fontes personalizadas.

Abaixo está o componente criado para processar o operador Add da biblioteca opencv.js.

```typescript
export class PlusComponent extends CVFComponent {
  //Node inputs definitions
  targets: TargetHandle[] = [
    { title: "src1", position: Position.Left },
    { title: "src2", position: Position.Left },
  ];
  //Node outputs definitions
  sources: SourceHandle[] = [
    { title: "out", position: Position.Right }
  ];

  static processor = class PlusProcessor extends CVFNodeProcessor {
    async proccess() {
        const [src1, src2] = inputs; //Inputs from targets definitions
        const out: Mat = new cv.Mat(src1.rows, src1.cols, src1.type(), new cv.Scalar(0));

        cv.add(src1, src2, out);

        this.sources = [out];//same number of outputs as sources definitions
        this.output(out);
    }
  };
}
```


### Handle Directions

As propriedades "targets" e "sources" indicam as entradas exigidas pelo componente e quais saídas serão disponibilizadas.
É possível indicar a posição dos "targets" e "sources" do componente por meio da propriedade "position".

Possible positions:
```typescript
enum Position {
    Left = "left",
    Top = "top",
    Right = "right",
    Bottom = "bottom"
}
```