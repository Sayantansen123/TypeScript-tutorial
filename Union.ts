//now you can use the `score` variable with either a string or a number value
let score: string | number;

score = 55;
score = "55";

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  role: string;
};

let sayantan: User | Admin;

//both are allowed
sayantan = {
  name: "Sayantan",
  age: 25,
};

sayantan = {
  name: "Sayantan",
  role: "Admin",
};

//array that contain either all string or all number
let xDArray: string[] | number[] = ["Hello", "World"];
xDArray = [1, 2, 3];
//xDArray = [1, 2, "3"]; give error

//array that contain both string and number

let xDArray2: (string | number)[] = ["Hello", "World"];
//now it can contain both string and number
xDArray2 = [1, 2, "3"];

let pi: 3.14 = 3.14; //literal type
pi = 3.14; //valid
//pi = 3.14159; //invalid, will give error

export {};
