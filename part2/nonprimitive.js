const obj={
    "first name":"hitesh",
    // firstname:"hitesh",
    isLoggedIn:true,
};//agar const obj bhi hua to bhi andar ke elements change hoge aur to aur add bhi kar sakte he 
// console.log(obj.firstname);
console.log(obj["first name"]);
console.log( obj.isLoggedIn);
obj.lastname="choudhary";
console.log(obj);

let today = new Date();
console.log(today);
console.log(today.getDate());

//Array
let heroes=["shaktiman","naagraj","doga"];
let anotherUser=["hitesh",2,true,undefined,null];//can have anything

//type conversion
console.log(1+"1");//make sring
console.log(1+true);//considers 1

let val="2abc";
console.log(Number(val));
console.log(Number(null));
console.log(Number(undefined));
