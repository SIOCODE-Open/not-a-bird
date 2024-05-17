class Resource {
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected: boolean;
  color: string;
  private elementIndex: number;
  private elementCount: number;
  private currentImage: string;
  private imageSrc: [
    // Iron
    "/assets/items/item.ironore.png",
    "/assets/items/item.steelbars.png",

    // Gold
    "/assets/items/item.goldore.png",
    "/assets/items/item.goldbars.png",

    // Wood
    "/assets/items/item.logs.png",
    "/assets/items/item.planks.png",

    // Coal
    "/assets/items/item.coalore.png",
    "/assets/items/item.coalbag.png",

    // Corn
    "/assets/items/item.corn.png",
    "/assets/items/item.popcorn.png",

    // Wheat
    "/assets/items/item.wheat.png",
    "/assets/items/item.flour.png",

    // Misheclouns
    "/assets/items/item.crystal.png",
    "/assets/items/item.gears.png",
    "/assets/items/item.firewood.png",
  ];

  constructor(
    x: number,
    y: number,
    color: string,
    isSelected: boolean,
    imageIndex: number,
    elementIndex: number,
    elementCount: number,
  ) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.color = color;
    this.isSelected = isSelected;
    this.imageSrc = [
      // Iron
      "/assets/items/item.ironore.png",
      "/assets/items/item.steelbars.png",

      // Gold
      "/assets/items/item.goldore.png",
      "/assets/items/item.goldbars.png",

      // Wood
      "/assets/items/item.logs.png",
      "/assets/items/item.planks.png",

      // Coal
      "/assets/items/item.coalore.png",
      "/assets/items/item.coalbag.png",

      // Corn
      "/assets/items/item.corn.png",
      "/assets/items/item.popcorn.png",

      // Wheat
      "/assets/items/item.wheat.png",
      "/assets/items/item.flour.png",

      // Misheclouns
      "/assets/items/item.crystal.png",
      "/assets/items/item.gears.png",
      "/assets/items/item.firewood.png",
    ];

    this.currentImage = this.imageSrc[imageIndex];
    this.elementIndex = elementIndex;
    this.elementCount = elementCount;
  }

  // Display
  updatePosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  updateColor(color: string) {
    this.color = color;
  }
  updateIsSelected(isSelected: boolean) {
    this.isSelected = isSelected;
  }
  updateImage(image: string) {
    this.currentImage = image;
  }

  // Getters
  getIsSelected() {
    return this.isSelected;
  }
  getElementIndex() {
    return this.elementIndex;
  }
  getElementCount() {
    return this.elementCount;
  }
  getCurrentImage() {
    return this.currentImage;
  }
  getAllImages() {
    return this.imageSrc;
  }
}

export { Resource };
