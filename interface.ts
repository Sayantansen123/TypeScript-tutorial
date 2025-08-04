// interface defining a User object
//more like an class in other languages

interface User {
  readonly id: number; //readonly property, cannot be changed
  name: string;
  userId: number;
  googleId?: string; //optional property, can be undefined
  age: number;
  //startTrail: () => string; //method that returns a string
  startTrail(): string; //method that returns a string
  getCoupon(couponName: string, value: number): number; //method with parameters
}

//suppose this user interface comuing from a library and we need to add a new field github id so we can extend the interface
//type cannot be extended, but interface can be extended
interface User {
  githubId: string; //optional property, can be undefined
}

//extending the user interface to add a new field
//extending type like this we need to use & operator
interface Admin extends User {
  role: "Admin" | "ta" | "new"; //new field added
}

const sayantan: User = {
  id: 1, //id is readonly, cannot be changed later
  name: "Sayantan",
  userId: 12345,
  age: 25,
  githubId: "sayantan123", //new field added
  startTrail: () => {
    return "Trail started";
  },

  //we dont have to match the name with the interface method
  getCoupon: (name: "sayantan", val: 10) => {
    return 10;
  },
};

//extended interface can be used to create an object
const sayantanXD: Admin = {
  id: 1, //id is readonly, cannot be changed later
  name: "Sayantan",
  userId: 12345,
  role: "Admin", //role is new field added
  age: 25,
  githubId: "sayantan123", //new field added
  startTrail: () => {
    return "Trail started";
  },

  //we dont have to match the name with the interface method
  getCoupon: (name: "sayantan", val: 10) => {
    return 10;
  },
};
