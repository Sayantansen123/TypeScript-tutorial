//there is an error line while we use for blocked scope
let greetings: string = "sayantan sen";

//gives error its not a string
//greetings = 6

//number
let userId: number = 33456;

//type script have type inference if u are declaring userId with a number value it automatically assigns userId as number
//let userId = 33456 ; (makes userId as number)

//boolean
let isloggedIn: boolean = false;

//any keyword

let hero;

function getHero() {
  return "thor";
}

hero = getHero(); //this will be inferred as any as ts dont know what type need to assign with hero
//if we make  let hero : string  then if the function return a number it will throw an error
//if we use any keyword like  let hero : any then we will stop the type checking in the code

console.log(greetings);

export {};
