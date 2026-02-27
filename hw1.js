/*
    Name:Nathan Bui
    Date created: 09/15/2024
    Dated Modified: 09/15/2024
    Purpose:Homework 1 Java script
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("Range");
    let output = document.getElementById("range_slider");
    output.innerHTML = slider.value;

slider.oninput = function() {output.innterHTML = this.value;}
