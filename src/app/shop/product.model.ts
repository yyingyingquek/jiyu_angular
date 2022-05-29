export class Product {
  public index: number;
  public name: string;
  public description: string;
  public id: number;
  public price: number;
  public image: string

  constructor(
    index: number,
    name: string,
    description: string,
    id: number,
    price: number,
    image: string
  ) {
    this.index = index;
    this.name = name;
    this.description = description;
    this.id = id;
    this.price = price;
    this.image = image
  }
}
