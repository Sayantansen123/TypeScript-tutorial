//it will work even tough num should be number

// function addTwo(num){
//     num.toUpperCase()                    but as we dont assign any type it sees it as any type
//     return num + 2
// }

// addTwo(5)    gives not code we want

//write way

function addTwo(num: number) {
  return num + 2;
}

console.log(addTwo(5)); // now works fine with no uppercase lowercase error as it is number

//how to avoid giving all parameters of function
// let loginUser = (name: string , email : string , isPaid : boolean) => {}

//if we do this its give error
// loginUser("hell","gmail@gm")

//but if we make some adjustment for default values
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("da", "da");

//function and their return types
function addSomething(num: number): number {
  return num + 2;
  //return "hello"  gives error as u returning a number
}

//there can be a scenario where a function can return many types we will see that later

//void
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//never  it appears in forceful execution of function
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
