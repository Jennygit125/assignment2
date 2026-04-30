
const bunnies = [
    { name: "Lucy", age: 5,},
    { name: "Bob", age: 3, },
    { name: "Charlie", age: 4,},
    { name: "Daisy", age: 2, },
    { name: "Ella", age: 6,},
    { name: "Frank", age: 1,}
];
bunnies.push({ name: "Mario", age: 7, });
//*add mario by push method ?
bunnies.splice(0, 1);
//*remove lucy by splice method  using index 0 to select and count 1 to delete 1 element
bunnies.unshift({ name: "Luigi", age: 8, });
//*add luigi by unshift method to the beginning
console.log(bunnies);
//* this shows the array
//* console.log(bunnies.map(b => b.name), bunnies.map(b => b.age));
/* ugly only shows values can probably be rewritten to overwrite a element in inner html for a form type effect ? or game logic ?*/
