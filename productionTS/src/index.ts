console.log("Hello, TypeScript!");

class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// produce same output as User
class UserSame {
  constructor(public name: string, public age: number) {}
}

const sayantan = new User("Sayantan", 25);
sayantan.name = "Sayantan Dutta";
