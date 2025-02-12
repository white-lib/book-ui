export type JustifyContent = string[];
export type AlignItems = string[];

export class ArrangementCore {
  private readonly justifyContent: JustifyContent = [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
  ];
  private readonly alignItems: AlignItems = [
    "flex-start",
    "center",
    "flex-end",
  ];

  getJustifyContent(): JustifyContent {
    return this.justifyContent;
  }

  getAlignItems(): AlignItems {
    return this.alignItems;
  }
}
