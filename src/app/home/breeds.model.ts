// breed.model.ts

export class Breed {
    id: number;
    name: string;
    height: string;
    average_age: string;
    weight: string;
    classification: string;
    colorings: string;
    interesting_fact: string;
    imgUrl: string;
  
    constructor(
      id: number,
      name: string,
      height: string,
      average_age: string,
      weight: string,
      classification: string,
      colorings: string,
      interesting_fact: string,
      imgUrl: string
    ) {
      this.id = id;
      this.name = name;
      this.height = height;
      this.average_age = average_age;
      this.weight = weight;
      this.classification = classification;
      this.colorings = colorings;
      this.interesting_fact = interesting_fact;
      this.imgUrl = imgUrl;
    }
  }
  