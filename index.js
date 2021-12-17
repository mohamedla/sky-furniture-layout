// display the searchbar
const searchBar = document.querySelector('section.searchbar'),
    searchTriger = document.querySelector('.searchTriger');

searchTriger.addEventListener('click',()=>{showHidden(searchBar);});
// display hidden item
function showHidden(hiddenItem) {
    if(hiddenItem.classList.contains('hidden')){
        hiddenItem.classList.remove('hidden');
    }else{
        hiddenItem.classList.add('hidden');
    }
}

// change mode
const chageMode = document.querySelector('.mode');
var cssRoot = document.querySelector(':root');

chageMode.addEventListener('click',()=>{
    var primaryColor = getComputedStyle(cssRoot).getPropertyValue('--primary');
    if (primaryColor == '#F4E7D3') {
        cssRoot.style.setProperty('--primary', '#1F4E5F');
        cssRoot.style.setProperty('--secondary', '#F4E7D3');
    } else {
        cssRoot.style.setProperty('--primary', '#F4E7D3');
        cssRoot.style.setProperty('--secondary', '#1F4E5F');
    }
});

//display the sidebar
const sideBar = document.querySelector('.side-bar'),
    sideTriger = document.querySelector('.sidebar-triger'),
    sideclose = document.querySelector('.sidebar-close');

    sideTriger.addEventListener('click',()=>{showHidden(sideBar);});
    sideclose.addEventListener('click',()=>{showHidden(sideBar);});

// remove the loading page when page is loaded
const loaderContainer = document.querySelector('#loader-container');

    window,addEventListener('DOMContentLoaded', ()=>{
        loaderContainer.classList.add('loaded');
    });