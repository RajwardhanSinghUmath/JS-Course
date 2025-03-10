function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("John", 30);
console.log(person1.name); // Output: "John"
console.log(person1.age); // Output: 30

function Car(make, model) {
    this.make = make;
    this.model = model;
}
const car1 = new Car("Toyota", "Camry");//this and new are connected somehow 
// console.log(car1)

function Tea(type){
    this.type=type;
    this.describe=function(){
        return `This is ${this.type} tea`;
    }
}
const tea1=new Tea("Green");
console.log(tea1);

function Animal(species){
    this.species=species;
}
Animal.prototype.sound=function(){
    return `The ${this.species} makes a sound`;
}//here we are adding a new property to the prototype of the Animal constructor function.(the entire class)

let dog=new Animal("Dog");
console.log(dog.sound());

function Drink(type){
    if(!new.target)
    {
        throw new Error("You must use the 'new' keyword to create a Drink instance.");//creates error
    }
    this.type=type;
}
let tea=new Drink("Tea");
let coffee=Drink("Coffee");//gives error
