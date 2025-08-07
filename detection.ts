//typeof Array return object in js
//typeof null return object in js
// empty string return string
//this coulde be problem so we need to tackle this

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase;
  }
  //now if val : number | number [] | string then it will throw error so we need ot be aware
  return val + 3;
}

//another example
function provideId(id: string | null) {
  if (!id) {
    console.log("please provide id");
    return;
  }
  //if we not check for null it will throw error
  return id.toLowerCase;
}

//by checking things using typeof is work like type guard

//using in keyword for narrowing

interface Usersssss {
  name: string;
  email: string;
}

interface Adminssss {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: Adminssss | Usersssss) {
  //checks if the isAdmin field is in account or not
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

//instance of keyword
//it can be constructed with new
function logValue(x: Date | string) {
  //checks whether the x is Date or
  if (x instanceof Date) {
    console.log(x.toUTCString);
  } else {
    console.log(x.toLowerCase);
  }
}
