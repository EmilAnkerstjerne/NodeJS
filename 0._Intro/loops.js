const favoriteThings = ["Cleo", "🍆", 420, true, "\u93a2", {name: "yes", id: 2}];

// favoriteThings.forEach((thing, index, array) => {
//     console.log(thing, index, array);
// })

// favoriteThings.forEach((thing, index) => {
//     favoriteThings[index] = "Ohh I like " + thing;
// })

// const newFavThings = [];
// favoriteThings.forEach(thing => {
//     newFavThings.push("Ohh I like " + thing)
// })

const newFavThings = favoriteThings.map(thing => "Ohh I like " + thing);

console.log(favoriteThings.filter(thing => thing.length > 1));

// console.log(newFavThings);


