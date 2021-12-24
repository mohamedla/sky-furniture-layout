
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

// enable and disable input fields
const inputContainers = document.querySelectorAll('.objectinput-container'),
    inputContainersAddDetail = document.querySelectorAll('.objectinput-container-addDetail');

    for (const contanier of inputContainers) {
        let input = contanier.querySelector('.input');
        contanier.querySelector('svg.edit').addEventListener('click',()=>{
            input.disabled = false;
            removeClass('input-field-disabled',input);
            addClass('input-field',input);
            hide(contanier.querySelector('svg.edit'));
            displayHidden(contanier.querySelector('svg.save'));
            
        });

        contanier.querySelector('svg.save').addEventListener('click',()=>{
            input.disabled = true;
            removeClass('input-field',input);
            addClass('input-field-disabled',input);
            addClass('input-field-disabled',input);
            hide(contanier.querySelector('svg.save'));
            displayHidden(contanier.querySelector('svg.edit'));
        });
    }

    if (inputContainersAddDetail.length != 0) {
        for (const contanier_detail of inputContainersAddDetail) {
            let inputs = contanier_detail.querySelectorAll('.input');
            contanier_detail.querySelector('svg.edit-addDetail').addEventListener('click',()=>{
                for (const input of inputs) {
                    input.disabled = false;
                    removeClass('input-field-disabled',input);
                    addClass('input-field',input);
                    hide(contanier_detail.querySelector('svg.edit-addDetail'));
                    displayHidden(contanier_detail.querySelector('svg.save-addDetail'));
                }
            });
        
            contanier_detail.querySelector('svg.save-addDetail').addEventListener('click',()=>{
                for (const input of inputs) {
                    input.disabled = true;
                    removeClass('input-field',input);
                    addClass('input-field-disabled',input);
                    hide(contanier_detail.querySelector('svg.save-addDetail'));
                    displayHidden(contanier_detail.querySelector('svg.edit-addDetail'));
                }
            });
        }
    }   

// preview selected image
const images = document.querySelectorAll('.image');

    for (const image of images) {
        var number = 0;
        while (number < image.querySelectorAll('input[type=file]').length) {
            let n = number;
            const imagefile = image.querySelector('input#image-'+ n);
            console.log(imagefile);
            imagefile.onchange = ()=>{
                console.log('img#image-'+ n);
                const file = imagefile.files[0];
                image.querySelector('img#image-'+ n).src = URL.createObjectURL(file);
            };
            number ++; 
        }
    }
