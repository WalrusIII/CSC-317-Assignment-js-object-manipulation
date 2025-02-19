const sculptureList = require('./data.js'); // import data.js

// console.log(sculptureList) // <---- comment out this line in your solution!


// empty object to be filled by for loop
const sculptureListLengths = [];

// for loop that iterates through the list provided to us
for (const item of sculptureList){

    // create a new object
    const newItem = {};

    // assign our new object with the length of the values from the object in sculptureList
    Object.assign(newItem,{
        name: item.name.length,
        artist: item.artist.length,
        description: item.description.length,
        url: item.url.length,
        alt: item.alt.length
    });
    
    // push our new object onto sculptureListLengths
    sculptureListLengths.push(newItem);

}

// console.log sculptureListLengths to see the result
console.log(sculptureListLengths)