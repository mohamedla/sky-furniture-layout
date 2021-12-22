import {hide, displayHidden}  from './index.js';

const submiting = document.getElementById('submit'),
    finalSubmitPage = document.getElementById('finalsubmit'),
    submitPage = document.querySelector('.orderchanges'),
    orderChangesBtn = document.getElementById('orderchanges');

    submiting.addEventListener('click',()=>{
        alert('Order Submited');
        window.location.replace('./index.html');
    });

    orderChangesBtn.addEventListener('click', ()=>{
        hide(submitPage);
        displayHidden(finalSubmitPage);
    });