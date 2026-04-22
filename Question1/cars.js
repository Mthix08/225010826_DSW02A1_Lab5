// Student Number: 225010826

//the list of cars
const makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

// array of car objects
const cars = [
  {
    name: "Golf",
    type: "Hatchback",
    make: "VW",
    image: "images/v_VW.jpg",
  },
  {
    name: "Gusheshe",
    type: "Sedan",
    make: "BMW",
    image: "images/v_BMW.jpg",
  },

  {
    name: "C-Class",
    type: "Coupe",
    make: "Benz",
    image: "images/v_Benz.jpg",
  },

  {
    name: "A4",
    type: "Sedan",
    make: "Audi",
    image: "images/v_Audi.jpg",
  },

  {
    name: "Mustang",
    type: "Coupe",
    make: "Ford",
    image: "images/v_Ford.jpg",
  },

  {
    name: "Corolla",
    type: "Sedan",
    make: "Toyota",
    image: "images/v_Toyota.jpg",
  },
];
// Adding new cars to the list
cars.push(
  {
    name: "Aventador",
    type: "Coupe",
    make: "Lamborghini",
    image: "images/v_Lamboghini.jpg",
  },
  {
    name: "Ghost",
    type: "Sedan",
    make: "Rolls Royce",
    image: "images/v_RollsRoyce.jpg",
  },
);
// Adding new cars to the list
makes.push("Lamborghini", "Rolls Royce");
// Variables to track guesses
let correct = 0;
let total = 0;
let currentCar;

// start on page load
window.addEventListener("load", init);

// adding the cars to the dropdown list 
function init() {
  const makeList = document.getElementById("make-list");
  makes.forEach((make) => {
    const option = document.createElement("option");
    option.value = make;
    option.textContent = make;
    makeList.appendChild(option);
  });

  // Select the first random car
  selectRandomCar();

  // Display the car's details
  displayCar();

  document.getElementById("car-img").classList.remove("hidden");
  document.getElementById("guess-btn").classList.remove("disabled");

  // Add event listener to the guess button
  document.getElementById("guess-btn").addEventListener("click", makeGuess);
}

function selectRandomCar() {
  const randomIndex = Math.floor(Math.random() * cars.length);
  currentCar = cars[randomIndex];
}

// function to showing the car details
function displayCar() {
  document.getElementById("car-name").textContent = currentCar.name;
  document.getElementById("car-type").textContent = currentCar.type;
  document.getElementById("car-img").src = currentCar.image;
}

function makeGuess() {
  // Disable the guess button
  document.getElementById("guess-btn").classList.add("disabled");

  // Get the selected make from the dropdown
  const selectedMake = document.getElementById("make-list").value;

  // Check if the guess is correct
  if (selectedMake === currentCar.make) {
    correct++;
    document.getElementById("correct").textContent = correct;
  }

  // Increment the total guesses
  total++;
  document.getElementById("total").textContent = total;

  // Select a new random car
  selectRandomCar();

  // Update the display with the new car
  displayCar();

  // Re-enable the guess button
  document.getElementById("guess-btn").classList.remove("disabled");
}
