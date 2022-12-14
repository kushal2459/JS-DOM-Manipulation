'use strict'


document.querySelector(".submit").addEventListener('click', function () {
    document.querySelector('.output').textContent= `Hey ${document.querySelector('.fname').value} ${document.querySelector(".lname").value}! Have a nice day :)`;
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
});

document.querySelector(".delete").addEventListener('click', function () {
    document.querySelector('.output').textContent = "";
    document.querySelector(".fname").value = "";
    document.querySelector(".lname").value = "";
})