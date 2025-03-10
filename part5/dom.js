//BOM
// console.log(window)
//location
//screen
//navigator

//DOM
// console.log(document)
// alert("connected")

//5 chalenges 


//example 1

document.getElementById('changeTextButton').addEventListener('click',function(){
    let para = document.getElementById("myParagraph");
    para.textContent="the paragraph is changed";
})//if you use function the context bole to this is the button but if you use arrow function the context is window basically the global this 


//example 2

document.getElementById("highlightFirstCity").addEventListener('click',function(){
    console.log(document.getElementById("citiesList").firstElementChild.classList.toggle("highlight"))
})

//example 3

document.getElementById("changeOrder")