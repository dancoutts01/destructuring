console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846
  
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
  
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
getUserData({}) // Your name is undefined and you like green

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // Whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

const {a,b} = obj.numbers

[arr[0], arr[1]] = [arr[1], arr[0]]

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})