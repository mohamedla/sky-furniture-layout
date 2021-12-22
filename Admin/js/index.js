// functions
    // display and hidden item
    export function showOrHideItem(hiddenItem) {
        if(hiddenItem.classList.contains('hidden')){
            hiddenItem.classList.remove('hidden');
        }else{
            hiddenItem.classList.add('hidden');
        }
    }
    // display hidden item
    export function displayHidden(hiddenItem) {
        if(hiddenItem.classList.contains('hidden')){
            hiddenItem.classList.remove('hidden');
        }
    }
    // hide item
    export function hide(hiddenItem) {
        if(!(hiddenItem.classList.contains('hidden'))){
            hiddenItem.classList.add('hidden');
        }
    }
    // add or remove class
    export function addRemoveClass(classname,Item) {
        if(Item.classList.contains(classname)){
            Item.classList.remove(classname);
        }else{
            Item.classList.add(classname);
        }
    }
    // add class
    export function addClass(classname,Item) {
        if(!(Item.classList.contains(classname))){
            Item.classList.add(classname);
        }
    }
    // remove class
    export function removeClass(classname,Item) {
        if(Item.classList.contains(classname)){
            Item.classList.remove(classname);
        }
    }

// end function

// remove the loading page when page is loaded
const loaderContainer = document.querySelector('#loader-container');

    window,addEventListener('DOMContentLoaded', ()=>{
        loaderContainer.classList.add('loaded');
    });

// change mode
const chageMode = document.querySelector('.mode'),
    cssRoot = document.querySelector(':root');
var isdark = false;

    chageMode.addEventListener('click',()=>{
        if (isdark) {
            cssRoot.style.setProperty('--primary', '#F4E7D3');
            cssRoot.style.setProperty('--secondary', '#1F4E5F');
        } else {
            cssRoot.style.setProperty('--primary', '#1F4E5F');
            cssRoot.style.setProperty('--secondary', '#F4E7D3');
        }
        isdark = !isdark;
    });

// display nav extra options
const fillterMenu = document.querySelectorAll('.trig-menu');

    for (const menu of fillterMenu) {
        menu.addEventListener('click',()=>{
            addRemoveClass('rotate-180',menu.querySelector('.arrow'));
            showOrHideItem(menu.parentElement.querySelector('.options'));
        });
    }

// display or hide nav
const menuTriger = document.querySelector('#display-menu');

    menuTriger.addEventListener('click', ()=>{
        showOrHideItem(document.querySelector('nav'));
    });