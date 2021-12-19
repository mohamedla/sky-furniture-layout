// Functions
    // display and hidden item
    function showOrHideItem(hiddenItem) {
        if(hiddenItem.classList.contains('hidden')){
            hiddenItem.classList.remove('hidden');
        }else{
            hiddenItem.classList.add('hidden');
        }
    }
    // display hidden item
    function displayHidden(hiddenItem) {
        if(hiddenItem.classList.contains('hidden')){
            hiddenItem.classList.remove('hidden');
        }
    }

    // hide item
    function hide(hiddenItem) {
        if(!(hiddenItem.classList.contains('hidden'))){
            hiddenItem.classList.add('hidden');
        }
    }
    // add or remove class
    function addRemoveClass(classname,Item) {
        if(Item.classList.contains(classname)){
            Item.classList.remove(classname);
        }else{
            Item.classList.add(classname);
        }
    }
    // add class
    function addClass(classname,Item) {
        if(!(Item.classList.contains(classname))){
            Item.classList.add(classname);
        }
    }
    // remove class
    function removeClass(classname,Item) {
        if(Item.classList.contains(classname)){
            Item.classList.remove(classname);
        }
    }
// end of functions

// change mode
const chageMode = document.querySelector('.mode'),
    cssRoot = document.querySelector(':root');
var isdark = false;

chageMode.addEventListener('click',()=>{
    // var primaryColor = getComputedStyle(cssRoot).getPropertyValue('--primary');
    if (isdark) {
        cssRoot.style.setProperty('--primary', '#F4E7D3');
        cssRoot.style.setProperty('--secondary', '#1F4E5F');
    } else {
        cssRoot.style.setProperty('--primary', '#1F4E5F');
        cssRoot.style.setProperty('--secondary', '#F4E7D3');
    }
    isdark = !isdark;
});

// display the searchbar
const searchBar = document.querySelector('section.searchbar'),
    searchTriger = document.querySelector('.searchTriger');

searchTriger.addEventListener('click',()=>{showOrHideItem(searchBar);});


//display the sidebar
const sideBar = document.querySelector('.side-bar'),
    sideBarContainer = document.querySelector('.side-bar-container'),
    sideTriger = document.querySelector('.sidebar-triger'),
    sideclose = document.querySelector('.sidebar-close');

    sideTriger.addEventListener('click',()=>{
        showOrHideItem(sideBar);
        showOrHideItem(sideBarContainer);
    });
    sideclose.addEventListener('click',()=>{
        showOrHideItem(sideBar);
        showOrHideItem(sideBarContainer);
    });
    sideBar.addEventListener('mouseout',()=>{
        sideBarContainer.addEventListener('click',()=>{
            showOrHideItem(sideBar);
            showOrHideItem(sideBarContainer);
        });
    });
    sideBar.addEventListener('mouseleave',()=>{
        sideBarContainer.addEventListener('click',()=>{
            showOrHideItem(sideBar);
            showOrHideItem(sideBarContainer);
        });
    });
    
    
    

// remove the loading page when page is loaded
const loaderContainer = document.querySelector('#loader-container');

    window,addEventListener('DOMContentLoaded', ()=>{
        loaderContainer.classList.add('loaded');
    });

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

// add item to favourite
const addtofavourite = document.querySelectorAll('.addtofavourite');

    for (const addfavourite of addtofavourite) {
        addfavourite.addEventListener('click',()=>{
            addRemoveClass('favourite-bgcolor',addfavourite);
            if (addfavourite.classList.contains('favourite-bgcolor')) {
                addfavourite.style.background = null;
            } else {
                addfavourite.style.background = 'red';
            }
        });
    }

// add item to cart
const addtocart = document.querySelectorAll('.addtocart');

    for (const additem of addtocart) {
        additem.addEventListener('click',()=>{
            addRemoveClass('cart-bgcolor',additem);
            if (additem.classList.contains('cart-bgcolor')) {
                additem.style.background = null;
                additem.style.color = null;
            } else {
                additem.style.background = 'var(--secondary)';
                additem.style.color = 'var(--primary)';
            }
        });
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
