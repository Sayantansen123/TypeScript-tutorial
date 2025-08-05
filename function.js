"use strict";
//it will work even tough num should be number
Object.defineProperty(exports, "__esModule", { value: true });

// function addTwo(num){
//     num.toUpperCase()                    but as we dont assign any type it sees it as any type
//     return num + 2
// }
// addTwo(5)    gives not code we want
//write way

function addTwo(num) {
  return num + 2;
}

console.log(addTwo(5)); // now works fine with no uppercase lowercase error as it is number
//how to avoid giving all parameters of function
// let loginUser = (name: string , email : string , isPaid : boolean) => {}
//if we do this its give error
// loginUser("hell","gmail@gm")
//but if we make some adjustment for default values

var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
};
loginUser("da", "da");
