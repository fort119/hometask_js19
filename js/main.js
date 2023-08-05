class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get personInfo() {
    console.log(`Информация о человеке: ${this.name} и ему ${this.age}`);
  }
}

class Car {
  make;
  model;
  year;
  numberPlate;
  owner;

  constructor(make, model, year, numberPlate) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numberPlate = numberPlate;
  }

  checkAgeOfPerson(owner) {
    if (owner.age < 18) {
      console.log(`${owner.name} cлишком молод для автомобиля`)
    } else {
      this.owner = owner;
    }
  }

  get getCarInfo() {
    console.log(`Информация об автомобиле: ${this.make} ${this.model} ${this.year}. Рег. номер: ${this.numberPlate}`);
    this.owner ? this.owner.personInfo : console.log("Этот автомобиль не имеет владельца");
  }
}

let personV = new Person("Vanya", 20);
let personK = new Person("Kostya", 16);
let personD = new Person("Denis", 13);

let carD = new Car("dodge", "charger", 2020, "BH1234AA");
let carN = new Car("nissan", "GT-R", 2012, "AA3344BH");
let carB = new Car("bmw", "m3", 2023, "BC8899HH");

carD.checkAgeOfPerson(personV);
carN.checkAgeOfPerson(personK);
carB.checkAgeOfPerson(personD);

carD.getCarInfo;
carB.getCarInfo;
carN.getCarInfo;