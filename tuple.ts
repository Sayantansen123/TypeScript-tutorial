let Tuser: [string, number, boolean];

//tuple is array with fixed length and fixed type of elements
//order of the array matters
Tuser = ["Sayantan", 25, true]; //valid

//Tuser = [25, "Sayantan", true]; //invalid, will give error

type User = [string, number, boolean];

let Tuser2: User;

Tuser2 = ["Sayantan", 25, true]; //valid
//Tuser2 = [25, "Sayantan", true,] //invalid, will give error

export {};
