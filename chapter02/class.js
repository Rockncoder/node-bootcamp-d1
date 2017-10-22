class Animal {
  constructor() {
  }

  print() {
    console.log('I am an animal');
  }
}

class Cat extends Animal {

  constructor(name = 'a cat') {
    super();
    this.name = name;
  }

  print() {
    console.log(`I am ${this.name}`);
  }
}


const thunderCat = new Cat("ThunderCat");
thunderCat.print();
const meowMix = new Cat();
meowMix.print();