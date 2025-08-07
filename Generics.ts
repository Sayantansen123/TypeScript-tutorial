//suppose there is an function
//so this will return an number
function identity(arg: number): number {
  return arg;
}

//now suppose that arg can be anything like string , number , boolean e.t.c
//we can use any there but it is not a good practice so we use generics here

//so this value takes input as number or boolean and return the same but problem is string is not accepted
function identityOne(arg: number | boolean): number | boolean {
  return arg;
}

//any solves the issue but then ts dont know whats the input and output gonna be

function idenntityTwo(arg: any): any {
  return arg;
}

//now the correct way to use generics
//so it will fix type whichever we give as parameter
function indentityThree<Type>(val: Type): Type {
  return val;
}

indentityThree(3); //it will get 3 as number and return 3
indentityThree("dawd"); //it will get string and return string

//short form of generics

function identityTrue<T>(val: T): T {
  return val;
}

//if we gonna pass a type

interface bottle {
  type: string;
  name: string;
}

// this is the way for complex types
identityTrue<bottle>({
  type: "hard",
  name: "sayantan",
});

//when parameter is array
function getProducts<T>(products: T[]): T {
  return products[0];
}

//syntax for arrow function

const getMoreSearchProduct = <T>(products: T[]): T => {
  return products[0];
};

//multiple generics as params

function func<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

// so now the function can have 2 parameneters and the parameter can be any type not fixed

func(3, 4);
func(2, true);
func("hi", 2);

function Anotherfunc<T, U extends number>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

//Anotherfunc(2,"hi")  //not allowed anymore

function Anotherfunc2<T, U extends bottle>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

//now the U excepts only type bottle and the function only return object
Anotherfunc2(3, {
  name: "any",
  type: "any",
});
