const searchBar = document.querySelector('section.searchbar'),
    searchTriger = document.querySelector('.searchTriger');

searchTriger.addEventListener('click',()=>{showHidden(searchBar);});

function showHidden(hiddenItem) {
    if(hiddenItem.classList.contains('hidden')){
        hiddenItem.classList.remove('hidden');
    }else{
        hiddenItem.classList.add('hidden');
    }
}

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