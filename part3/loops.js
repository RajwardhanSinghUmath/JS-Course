// let couuntdown=[]
// let i=5;
// while(i>0){
//     couuntdown.push(i);
//     i--;
// }
// // console.log(couuntdown);
// // let teaType="";
// // let Teacollection=[];
// // do{
// //     teaType=prompt("enter tea type");
// //     if(teaType==="stop"){
// //         break;
// //     }
// //     Teacollection.push(teaType);
// // }
// // while(teaType!="stop")

//     // let total=0;
//     // let k=1;
//     // do{
//     //     total+=k;
//     //     k++;
//     // }while(k<=3);
//     // console.log(total);


// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let multiples=[];
// for(let i=0;i<numbers.length;i++){
//     multiples.push(numbers[i]*2);

// }
// console.log(multiples);


// let array=["green tea","black tea","oolong tea","white tea","chai","matcha","herbal tea"];
// let selectedTea=[];
// for(let i=0;i<array.length;i++){
//     if(array[i]=="chai")break;
//     selectedTea.push(array[i]);
// }
// console.log(selectedTea);

// let cities=["new york","london","paris","tokyo","berlin"];
// let selectedCities=[];
// for(let i=0;i<cities.length;i++){
//     if(cities[i]=="paris")continue;
//     selectedCities.push(cities[i]);
// }
// console.log(selectedCities);

// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let selectedNumbers=[];
// for(const num of numbers){
// if(num==4)break;
// selectedNumbers.push(num);
// }
// console.log(selectedNumbers);

// let teas=["green tea","black tea","oolong tea","white tea","chai","matcha","herbal tea"];
// let selectedTeas=[];
// for(const tea of teas){
//     if(tea=="chai")continue;
//     selectedTeas.push(tea);
// }
// console.log(selectedTeas);

// let citiesPopulation={
//     "London":8982000,
//     "New York":8623000,
//     "Paris":2141000,
//     "Tokyo":13929286,
//     "Berlin":3748148
    
// };
// let selectedCities={};
// for(const city in citiesPopulation){
//     if(city=="Berlin")break;
//     selectedCities[city]=citiesPopulation[city];
// }
// console.log(selectedCities);
// console.log(Object.keys(selectedCities));
// console.log(Object.values(selectedCities));
// Object.freeze(selectedCities);//cant change any more


let teaTypes=["green tea","black tea","oolong tea","white tea","chai","matcha","herbal tea"];
let selectedTeas=[];
teaTypes.forEach(tea=>{
    if(tea=="chai")return;
    selectedTeas.push(tea);
})
console.log(selectedTeas);