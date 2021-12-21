import {addRemoveClass, removeClass, showOrHideItem, displayHidden, hide}  from './index.js';



// display item color
const darkgray = document.querySelector('#darkgray'),
    darkgrayItem = document.querySelector('#darkgary-item'),
    darkblue = document.querySelector('#darkblue'),
    darkblueItem = document.querySelector('#darkblue-item'),
    yellow = document.querySelector('#yellow'),
    yellowItem = document.querySelector('#yellow-item'),
    orange = document.querySelector('#orange'),
    orangeItem = document.querySelector('#orange-item'),
    beige = document.querySelector('#beige'),
    beigeItem = document.querySelector('#beige-item');

    darkgray.addEventListener('click',()=>{
        hide(darkblueItem);
        hide(yellowItem);
        hide(orangeItem);
        hide(beigeItem);
        displayHidden(darkgrayItem);
    });
    darkblue.addEventListener('click',()=>{
        hide(darkgrayItem);
        hide(yellowItem);
        hide(orangeItem);
        hide(beigeItem);
        displayHidden(darkblueItem);
    });
    yellow.addEventListener('click',()=>{
        hide(darkblueItem);
        hide(darkgrayItem);
        hide(orangeItem);
        hide(beigeItem);
        displayHidden(yellowItem);
    });
    orange.addEventListener('click',()=>{
        hide(darkblueItem);
        hide(yellowItem);
        hide(darkgrayItem);
        hide(beigeItem);
        displayHidden(orangeItem);
    });
    beige.addEventListener('click',()=>{
        hide(darkblueItem);
        hide(yellowItem);
        hide(orangeItem);
        hide(darkgrayItem);
        displayHidden(beigeItem);
    });

// display item details
const descriptionbtn = document.getElementById('description'),
    descriptionbox = document.getElementById('description-box'),
    materialsbtn = document.getElementById('materials'),
    materialsbox = document.getElementById('materials-box');

    descriptionbtn.addEventListener('click',()=>{
        hide(materialsbox);
        removeClass('pb-6',materialsbtn);
        showOrHideItem(descriptionbox);
        addRemoveClass('pb-6',descriptionbtn);
    });
    materialsbtn.addEventListener('click',()=>{
        hide(descriptionbox);
        removeClass('pb-6',descriptionbtn);
        showOrHideItem(materialsbox);
        addRemoveClass('pb-6',materialsbtn);
    });

// show image in full screen
const fullImageCloser = document.querySelectorAll('.fullimage-close'),
    fullImageContainer = document.querySelector('.fullimage-container'),
    fullImage = document.querySelector('.fullimage-container div img'),
    fullImageTriger = document.querySelectorAll('.fullimage-triger');

    for (let triger of fullImageTriger) {
        triger.addEventListener('click',()=>{
            fullImage.setAttribute('src',triger.getAttribute('src'));
            displayHidden(fullImageContainer);
        })
    }

    for (let closer of fullImageCloser) {
        closer.addEventListener('click',()=>{hide(fullImageContainer);})
    }

// sroll hoz
const scrollItemsRight = document.getElementById('scroll-right'),
    scrollItemsLeft = document.getElementById('scroll-left'),
    itemList = document.getElementById('item-slider');
let x = -1;

    scrollItemsRight.onclick = function () {
        itemList.scrollLeft += 260;
    };

    scrollItemsLeft.onclick = function () {
        itemList.scrollLeft -= 260;
    };

// add to cart main
const addToCartMain = document.getElementById('addtocartmain');

    addToCartMain.addEventListener('click',()=>{
        if (addToCartMain.classList.contains('addtocartmain')) {
            addToCartMain.innerHTML = '<span>Remove From Cart</span>';
            addToCartMain.style.background = 'var(--secondary)';
            addToCartMain.style.color = 'var(--primary)';
        } else {
            addToCartMain.innerHTML = '<span>Add To Cart</span>';
            addToCartMain.style.background = null;
            addToCartMain.style.color = null;
        }
        addRemoveClass('addtocartmain',addToCartMain);
    });
