// ...........................................DOM.....................................................................................................................
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// ..............................................for change color with id in html.......................................................................
let head = document.getElementById("heading");
head.style.color ="blue";
head.style.backgroundColor ="yellow";
head.style.fontSize ="64px";
head.style.border ="4px solid ";
console.log(head);//this line not necessary

// ...........................................for change color with class in html................................................................................
let paragraph = document.getElementsByClassName("para");
paragraph[0].style.color = "blue";
paragraph[0].style.backgroundColor = "pink";
paragraph[0].style.border = " 6px solid blue";
paragraph[1].style.color = "pink";
paragraph[1].style.backgroundColor = "blue";
paragraph[1].style.border = " 6px solid pink";

//........concordinate html say para 2 ko index 1 daytay hay to wp index 1 ka para change hogayiga Document object model ki jaga hello world ajayga............................
paragraph[1].innerHTML = "Hello world";
// .......................div same class kay hoto kisi ek ka color wagara change krana ho to index day daygay jis ko change karna ho.................................
let collection = document.getElementsByClassName("container");
collection[1].style.fontSize = "20px";

// ..................................li may tea ko paragraph demo may agiya bhar.....................................................
let collection1 = document.getElementsByTagName("li")
document.getElementById("demo").innerHTML= collection1[1].innerHTML;
document.getElementById("demo").innerHTML= collection1[2].innerHTML;

// .............................button ko click kar kay text ka color change hoga html code may para2 , p tag ki jaga h1 bhi lasaktay hay,html kay code may dbl say double click par change hoga text color...................
function changeColor(newColor){
    let btn =document.getElementById("para2")
    btn.style.color =newColor
    
}
// background change hoga button click kar kay
function changebackgroundColor(newColor){
    let btn =document.getElementById("para2")
    btn.style.backgroundColor =newColor
}
// jo bhi pahla paragraph hoga isiko color dayga dosray ko nhi dayga 
document.querySelector("p").style.backgroundColor="orange"



