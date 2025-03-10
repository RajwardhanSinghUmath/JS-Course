// function greet(name){
//     console.log('Hello ' + name);
// }
// // greet('John');

// function makeTea(teaType) {
//     function orderTea() {
//         return `Ordering ${teaType}`;
//     }
//     console.log(orderTea();
//     return `Making ${teaType}`;
// }
// console.log(makeTea('Green Tea'));

// const calculateTotal=(price,quantity)=>price*quantity;//implicit return

// const calculateTotal=(price,quantity)=>{
//     return price*quantity;
// };
// console.log(calculateTotal(10,5));
// function makeTea(teaType){
//     return `Making ${teaType}`;
// }
// function processTeaOrder(makeTea){
//     return makeTea("earl grey");
// }
// console.log(processTeaOrder(makeTea));//first class function or higher order function   z
const time=new Date();
function createTeaMaker(name){
    function makeTea(teaType){
        return `Making ${teaType}, by ${name} on ${time}`;
    }
    return makeTea;
}
const teaType="green tea";

console.log(createTeaMaker("hitesh")(teaType));//bc fun ka fn chaladiya khud se

const teaMaker=createTeaMaker("hitesh");
console.log(teaMaker(teaType));//low iq logo ka method

// scope of a variable ek ke andar ek 