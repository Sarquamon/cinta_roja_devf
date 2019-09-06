// obj1 = {
//   name: "Firulais",
//   raza: "Husky",
//   correr: function() {
//     return "Toy corriendo we!";
//   }
// };

// class Doggos {
//   constructor(name, raza) {
//     this.name = name;
//     this.patas = true;
//     this.raza = raza;
//     this.size = 5;
//   }

//   bark() {
//     return "wau wau";
//   }

//   eat() {
//     return "yum yum ";
//   }

//   increaseSize() {
//     this.size++;
//     return this.size;
//   }
// }

// const doggo = new Doggos("Firulais", "Husky");

// console.log(doggo);

// console.log(doggo.increaseSize());
// console.log(doggo.increaseSize());
// console.log(doggo.increaseSize());
// console.log(doggo.size);

// una clase que se llame sea como math, con 3 metodos y 3 atributos, 1 metodo el numero mas grande el numero mas chico y que saque la serie de fourier con 3 const pi, euler

class misMates {
  constructor() {
    this.e = 2.71828182845;
    this.pi = 3.14159265359;
    this.h = 6.62607004;
    this.greatestNumber = 0;
    this.smallestNumber = 0;
  }

  getGreatestNumber(arr) {
    // return arr;
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        if (this.greatestNumber < arr[i]) {
          this.greatestNumber = arr[i];
          // console.log(
          //   `greatesNumber es: ${this.greatestNumber}. Y estoy en la pos: ${i}`
          // );
        }
      }
      return `El numero mas grande es: ${this.greatestNumber}`;
    } else {
      return "Necesito un freaking array!";
    }
  }

  getSmallestNumber(arr) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        if (this.smallestNumber > arr[i]) {
          this.smallestNumber = arr[i];
        }
      }
      return `El numero mas pequeño es: ${this.smallestNumber}`;
    } else {
      return "Necesito un freaking array!";
    }
  }

  // fourierSeries() {}
}

let time = 0;
let wave = [];
let slider;
function setup() {
  createCanvas(800, 600);
  slider = createSlider(1, 100, 2);
}
function draw() {
  background(255);
  translate(200, 200);

  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevX = x;
    let prevY = y;
    let n = i * 2 + 1;
    let radius = 100 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(0);
    noFill();
    ellipse(prevX, prevY, radius * 2);

    // fill(255);
    stroke(0);
    line(prevX, prevY, x, y);
    // ellipse(x, y, 8);
  }
  translate(200, 0);
  line(x - 200, y, 0, wave[0]);

  wave.unshift(y);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  if (wave.length > 400) {
    wave.pop();
  }

  time += 0.05;
}

const mates = new misMates();

const arreglo = [2, 3, 1, 4, 6, 2, 10];

console.log(mates.getGreatestNumber(arreglo));
console.log(mates.getSmallestNumber(arreglo));

//herencia
