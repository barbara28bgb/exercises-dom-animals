const firstAnimal = {
  name: "Kira",
  age: "5",
  weigth: "25",
  spieces: "Dog",
  extintionYear: "No",
  id: "32",
};

const secondAnimal = {
  name: "Manie",
  age: "80",
  weigth: "780",
  spieces: "Big Foot",
  extintionYear: "246",
  id: "26",
};

const getAnimalSpices = (animal) => {
  return animal.spieces;
};

const isExtintAnimal = (animal) => {
  if (animal.extintionYear === "No") {
    return false;
  } else {
    return true;
  }
};

const animal = (animal) => {
  return `El animal ${animal.name} es un ${animal.spieces} 
de ${animal.age} y pesa ${animal.weigth} kg`;
};
console.log(animal(firstAnimal));
