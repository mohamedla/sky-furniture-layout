import {addRemoveClass, showOrHideItem, displayHidden, hide}  from './index.js';
        
window.onload = document.querySelector('#searchval-display').innerHTML = localStorage.getItem("searchValue");

// select order option
const orderOptions = document.querySelectorAll('.order-options');

    for (const option of orderOptions) {
        option.addEventListener('click',()=>{
            for (const opt of orderOptions) {
                opt.style.background = null;
                opt.style.color = null;
            }
            option.style.background = 'var(--secondary)';
            option.style.color = 'var(--primary)';
        });
    }
    
// flib fillter arrow
const fillterMenu = document.querySelectorAll('.fillter-menu');

    for (const menu of fillterMenu) {
        menu.addEventListener('click',()=>{
            addRemoveClass('rotate-180',menu.querySelector('svg'));
            showOrHideItem(menu.parentElement.querySelector('.options'));
        });
    }

// Display filter bar
const fillters = document.querySelector('.all-fillters'),
    fillterTriger = document.querySelector('.fillters-triger'),
    fillterClose = document.querySelector('.fillters-close');

    fillterTriger.addEventListener('click',()=>{
        displayHidden(fillters);
    });

    fillterClose.addEventListener('click',()=>{
        hide(fillters);
    });

// clear all fillters
const filltersClear = document.querySelector('.fillters-clear');

    filltersClear.addEventListener('click',()=>{
        const radios = document.querySelectorAll('.all-fillters input[type=radio]:checked');
        for (const radio of radios) {
            radio.checked = false;
        }
    });