console.log("Hello, TypeScript!");
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// produce same output as User
class UserSame {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const sayantan = new User("Sayantan", 25);
sayantan.name = "Sayantan Dutta";
export {};
