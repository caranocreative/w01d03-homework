//console.log("Javascript is running");


// Commit 1 - Easy Going answered

// for (let i = 0; i <= 20; i++) {
// 	console.log(i);
// }


// Commit 2 - Get Even answered

// for (let i = 2; i < 200; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }


// Commit 3 - Excited Kittens answered

// let excitedKitten = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 ==0) {
// 		console.log(excitedKitten[Math.floor(Math.random() * 3)]);
// 	}
// }

// Commit 4 - Fizz Buzz answered

// for (let i = 1; i <= 100; i++) {
//  if (i % 5 === 0 && i % 3 === 0) {
//  	console.log("FizzBuzz");
//  } else if (i % 3 === 0) {
//  	console.log("Fizz");
//  } else if (i % 5 === 0) {
//  	console.log("Buzz");
//  } else {
//  	console.log(i);
//  }
// }

//  Commit 5 - Getting to Know You answered

// const thom = ["Thom", 1000, "Christchurch"];
// const karolin = ["Karolin", 16, "New York"];
// const kristyn = ["Kristyn", 5, "Pittsburgh"];
// const matt = ["Matt H", 186, "Philadelphia"];

// thom[0] = "Gameboy";
// karolin[1] = 17;
// matt[2] = "Gotham City";
// kristyn[2] = "Brooklyn";

// Commit 6 - Yell at the Ninja Turtles answered" (I got it now)

// const ninjaTurtles = ['Donatello','Leonardo','Raphael','Michaelangelo'];

// for (let i = 0; i < ninjaTurtles.length; i++) {
// 		console.log(ninjaTurtles[i].toUpperCase());
// }

// Commit 7 - Kristyn and Thom have their outfits ready for class - array practice

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];


// let kristynShoe = kristynsCloset[0];
// thomsCloset[2].push(kristynShoe);
// delete kristynsCloset[0];

// console.log(thomsCloset);
// console.log(kristynsCloset);

// console.log(
// 	"Kristyn will wear", `${kristynsCloset[3]}`,
// 	`${kristynsCloset[4]}`,
// 	"Thom will wear", `${thomsCloset[0][1]}`,
// 	`${thomsCloset[1][1]}`);

// Commit 8 - I loops through their closets

for (let i = 0; i < kristynsCloset.length; i++) {
	console.log("WHIRR: Now washing", `${kristynsCloset[i]}`);
}

for (let i = 0; i < thomsCloset.length; i++) {
	for (let j = 0; j < thomsCloset[i].length; j++)	{
		console.log(thomsCloset[i][j]);
	}
	
}