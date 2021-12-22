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

// scroll horz
const sliderContainer = document.querySelectorAll('.slider-container');

    for (const container of sliderContainer) {
        container.querySelector('.scroll-right').addEventListener('click',()=>{
            container.querySelector('.item-slider').scrollLeft += 260;
        });
        container.querySelector('.scroll-left').addEventListener('click',()=>{
            container.querySelector('.item-slider').scrollLeft -= 260;
        });
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

// search Button
const searchbtn = document.querySelector('.searchbtn');

    searchbtn.addEventListener('click',()=>{
        var searchval = document.querySelector('#searchvalue').value;
        localStorage.setItem("searchValue",searchval);
        window.location.replace('./search.html');
    });