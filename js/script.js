window.addEventListener('load', function(){
    "use strict"
    

});
//Global Variables
let form;
let empId;
let empName; 
let email;
let ext;
let dept;
let btnSubmit; 

const $ = (id) => document.getElementById(id);
form = $('empForm');
empId = $('id');
empName = $('name');
email = $('email');
ext = $('ext');
dept = $('dept');
btnSubmit = $('btn-submit');

// console.log(form);
// console.log(empId);
// console.log(empName);


// function showResult(e){
//     console.log("Id: "+ empId);
//     console.log("Name: "+ empName);
//     console.log("email: "+ email);
//     console.log("Extension: "+ ext);
//     e.preventDefault();
// }

form.addEventListener("onsubmit", function(e){
    e.preventDefault();

    console.log("Id: "+ empId.value);
    console.log("Name: "+ empName.value);
    console.log("email: "+ email.value);
    console.log("Extension: "+ ext.value);

});