import {showHidden}  from './index.js';

// hide/show password field
const showPass = document.getElementById('show-pass'),
    passwordField = document.querySelector('#password');
var passSVGs = document.querySelectorAll('#show-pass svg');


    showPass.addEventListener('click',()=>{
        for(let passSVG of passSVGs){
            showHidden(passSVG);
        }
        if (passwordField.type == 'text') {
            passwordField.type = 'password';
        } else {
            passwordField.type = 'text';
        }
    });