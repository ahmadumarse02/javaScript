//  getElementById()

// Let's we use the getElementById() and change the background color and text color
// because we select the Id of the Tag in HTML.
let main = document.getElementById("main");
main.style.backgroundColor = "black";
main.style.color = "white";

//getElementByClassName() it return the HTML collection and starting index

let topHeading = document.body.getElementsByClassName("heading");
topHeading[0].innerHTML = "Umair";
topHeading[0].style.backgroundColor = "blue";

//getElementsByTagName it return the HTML collection and starting index

let h2 = document.body.getElementsByTagName("h2");
h2[0].innerHTML = "Umair";
h2[0].style.backgroundColor = "blue";
// console.log(h2);

//querySlector() it slect the first h1 

let select = document.querySelector("h1")
select.style.padding = "30px"
console.log(select)

//querySlectorAll()

let allSelect = document.querySelectorAll("h1")
allSelect.forEach ((e) => {
    e.style.padding = "3rem"
})