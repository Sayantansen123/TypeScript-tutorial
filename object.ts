const Userss = {
  name: "John Doe",
  age: 30,
  isActive: true,
};

//passsing object as parameter

function createUser({ name: string, age: number, isActive: boolean }) {}

// if we add extra parameter it will give error
//createUser({name: "sayantan", age: 10, isActive: false,isAdmin: true});

//but if we create a new variable

let newUser = {
  name: "sayantan",
  age: 10,
  isActive: false,
  isAdmin: true,
};

createUser(newUser); // this will work as we are passing a variable

//returning object from function
function createUserObject(): {
  name: string;
  age: number;
  isActive: boolean;
} {
  return {
    name: "Jane Doe",
    age: 25,
    isActive: true,
  };
}

//creating a type for object

type UserType = {
  name: string;
  age: number;
  isActive: boolean;
};

//passing object with type
function createUserWithType(user: UserType): UserType {
  return { name: user.name, age: user.age, isActive: user.isActive };
}

createUserWithType({ name: "Alice", age: 28, isActive: true });

type Userss = {
  readonly id: string;
  name: string;
  age: number;
  isActive: boolean;
  credCardsDetail?: number; //it will not give error if we dont pass this parameter as it is optional
};

let myUser: Userss = {
  id: "123",
  name: "Bob",
  age: 35,
  isActive: true,
};

myUser.name = "Robert"; // This is allowed
myUser.age = 36; // This is allowed
myUser.isActive = false; // This is allowed
//myUser.id = "daw" this is not allowed as id is readonly

//use of & operator to combine types

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// combining types using & operator
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
