// let computer = {cpu:12}
// let lenovo ={screen:"HD",__proto__:computer//accssessing the prototype of computer
// }
// let tomHardware = {}
// console.log(`computer`,lenovo.__proto__);//lenovo ka node dikhayga kyuki lenovo ka prototype computer hai


let genericCar={tyres:4

}

let tesla={driver:"AI"}

Object.setPrototypeOf(tesla,genericCar);
console.log(`tesla`,tesla.tyres);
console.log(`tesla`,tesla.__proto__);//isse better way bhi he
console.log(`tesla`,Object.getPrototypeOf(tesla));

//hasOwnProperty se pata chalega ki property khud ki he ya prototype se aayi he