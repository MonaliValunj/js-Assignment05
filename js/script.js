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

form.addEventListener("submit", function(e){
    e.preventDefault();

    console.log("Id: "+ empId.value);
    console.log("Name: "+ empName.value);
    console.log("email: "+ email.value);
    console.log("Extension: "+ ext.value);
    console.log("Department: "+ dept.value);

});

