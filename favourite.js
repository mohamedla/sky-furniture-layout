import {showOrHideItem}  from './index.js';

const items = document.querySelectorAll('.item');

    for (const item of items) {
        const removers = item.querySelectorAll('.removefromfav');
        for (const remove of removers) {
            remove.addEventListener('click',()=>{
                showOrHideItem(item);
            });
        }
    }
