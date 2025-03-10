// //Encapsulation:-boxing of data and function into single unit
// //Inheritance:-Inheritance is a mechanism that allows objects to inherit properties and methods from other objects.
// //Polymorphism:-Polymorphism is the ability of objects to take on multiple forms.
// //Abstraction:-Abstraction is the process of hiding the implementation details of an object and exposing only the essential features.

// let car={
//     make:"Toyota",
//     model:"Camry",
//     year:2022,
//     start:function(){
//         return`${this.make} ${this.model} started`;
//     }
// }

// console.log(car.start());

// function Animal(type){
//     this.type=type;

// }
// Animal.prototype.sound=function(){
//     return `The ${this.type} makes a sound`;
// }
// Array.prototype.sum=function(){
//     return this.reduce((a,b)=>a+b,0)+"="+this;
// }//kisi ka bhi prototype change kar sakte ho

// let myArray=[1,2,3,4,5];
// console.log(myArray.sum());

// class Vehicle{
//     constructor(make,model){//normal functional constructor ki tarah hai
//         this.make=make;
//         this.model=model;
//     }
//     start(){//syntactic sugar we dont need to write function or use arrow function
//         return `${this.make} ${this.model} started`;
//     }
// }

// class Car extends Vehicle{//inheritance
//     constructor(make,model,color){
//         super(make,model);//super is used to call the constructor of the parent class
//         this.color=color;
//     }
//     start(){
//         return `${super.start()} and it is ${this.color}`;//super is used to call the method of the parent class
//     }
// }

// let myCar=new Car("Toyota","Camry","Red");
// console.log(myCar.start());
// console.log(myCar.make)

// let vehOne= new Vehicle("Toyota","Camry");
// console.log(vehOne.make);

// class BankAccount{
//     #balaance=0;//encapsulation

//     deposit(amount){
//         this.#balaance+=amount;
//         return this.#balaance;
//     }

//     getBalance(){
//         return '$'+this.#balaance;
//     }
// }

// let account=new BankAccount();
// account.deposit(100);
// console.log(account.balaance);//undefined
// console.log(account.getBalance());

// //Abstraction

// class CoffeeMachine{

//     start(){
//         //call DB
//         //filter valur
//         return `Starting the coffee machine`;
//     }
//     brewCoffee(){
//         return `Brewing coffee`;
//     }

//     pressStartButton(){
//       let messageone=  this.start();
//       let messagetwo= this.brewCoffee();
//       return `${messageone} and ${messagetwo}`;
//     }
// }

// const myMachine=new CoffeeMachine();
// // console.log(myMachine.start());
// // console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// //Polymorphism
// class Bird{

//     fly(){
//         return `Flying`;
//     }
// }
// class Penguin extends Bird{
//     fly(){
//         return `Penguins can't fly`;
//     }
// }
// class Sparrow extends Bird{
    
// }

// let bird=new Bird();
// let penguin=new Penguin();
// let sparrow=new Sparrow();
// console.log(bird.fly());
// console.log(penguin.fly());//polymorphism
// console.log(sparrow.fly());


// //static methods

// class Calculator{
//     static add(a,b){
//         return a+b;
//     }
// }

// let miniCalculator=new Calculator();
// // console.log(miniCalculator.add(1,2));//error
// console.log(Calculator.add(1,2));//only calculator class can use this method and directly

// Getter and Setter

class Employee{
    #salary;
    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary cannot be negative");
        }
        this.name=name;
        this.#salary=salary;
    }
    get salary(){
        return "Loda lega "+this._salary;
    }
    set salary(value){
        if(value<0){
            console.log("Salary cannot be negative");
        }
        else{
            this._salary=value;
        }
    }
}
let empOne=new Employee("John",1000);
console.log(empOne.salary);//undefined
console.log(empOne._salary);//you can access still until you define by #