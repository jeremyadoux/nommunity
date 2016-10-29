class plop {
  constructor() {
    this.name = "test";
  }
}

class plip extends plop {
  constructor() {
    super();
    this.test = "truc";

    console.log(super.name);
    this.name = "chouchou";
    console.log(super.name);
  }
}

let biloute = new plip();
console.log(biloute.name);
biloute.name = "super";
console.log(biloute.name);
