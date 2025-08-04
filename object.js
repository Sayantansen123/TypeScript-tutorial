var User = {
    name: "John Doe",
    age: 30,
    isActive: true,
};
//passsing object as parameter
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isActive;
}
// if we add extra parameter it will give error
//createUser({name: "sayantan", age: 10, isActive: false,isAdmin: true});
//but if we create a new variable
var newUser = {
    name: "sayantan",
    age: 10,
    isActive: false,
    isAdmin: true,
};
createUser(newUser); // this will work as we are passing a variable
//returning object from function
function createUserObject() {
    return {
        name: "Jane Doe",
        age: 25,
        isActive: true,
    };
}
//passing object with type
function createUserWithType(user) {
    return { name: user.name, age: user.age, isActive: user.isActive };
}
createUserWithType({ name: "Alice", age: 28, isActive: true });
var myUser = {
    id: "123",
    name: "Bob",
    age: 35,
    isActive: true,
};
myUser.name = "Robert"; // This is allowed
myUser.age = 36; // This is allowed
myUser.isActive = false; // This is allowed
