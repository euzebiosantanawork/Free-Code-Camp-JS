//Code

const carrot = new Vegetable('carrot');
console.log(carrot.name); //Should display 'carrot'

//Solution:

class Vegetable {
  cinstructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); //=> should be "carrot"
