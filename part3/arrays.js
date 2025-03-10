let teaFlavours=["oolong","matcha","chai"];
// let teaFl=new Array("oolong","matcha","chai");
let firstTea=teaFlavours[0];

let cities=["delhi","mumbai","kolkata"];
let favouriteCity=cities[2];


teaFlavours[1]="earl grey";

cities.push("chennai");
cities[4]="bengaluru";
// console.log(cities);

let teaOrders=["chai","oolong","matcha","earl grey"];
const lastOrder=teaOrders.pop();
// console.log(lastOrder);
// console.log(teaOrders);

let popularTeas=["oolong","matcha","earl grey"];
// let var1=5
// let var2=var1;
// var1=9;
// console.log(var2);//var2 has nothing to do with var1 changing
let softCopyTeas=popularTeas;
popularTeas[0]="chai";//it is same reference and hence it changes its value ofr both this and soft copy as will
// console.log(softCopyTeas);

let topCities=["delhi","mumbai","kolkata"];
// let hardCopyCities=[...topCities];//spread operator it just spread every element of array 
let hardCopyCities=topCities.slice();

topCities[0]="chennai";
// console.log(hardCopyCities);

let europeanCities=["paris","london","berlin"];
let asianCities=["tokyo","seoul","shanghai"];
// let allCities=europeanCities+asianCities;//concatenate as a strinng
// let allCities=[europeanCities,asianCities];//2d array
let allCities=europeanCities.concat(asianCities);
// let allCities=[...europeanCities,...asianCities];//merge two cities

let teaMenu=["oolong","matcha","earl grey"];
let menuLength=teaMenu.length;
console.log(menuLength);

let cityBucketList=["delhi","mumbai","kolkata","chennai"];
let isdelhiInBucket=cityBucketList.includes("delhi");
console.log(isdelhiInBucket);
