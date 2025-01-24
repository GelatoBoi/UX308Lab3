// Make a function that says things in a poem

function sayThings(tone, ...things2Say) {
    
    return `In a ${tone} tone I say ${things2Say.join(" ")}`;

}
    

console.log(sayThings("Excited", "Happy", "Friday!"));

