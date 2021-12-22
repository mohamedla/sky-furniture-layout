import {hide, displayHidden, addClass, removeClass} from './index.js';

const inputContainers = document.querySelectorAll('.profileinput-container'),
    inputContainersAddDetail = document.querySelector('.profileinput-container-addDetail');

    for (const contanier of inputContainers) {
        contanier.querySelector('svg.edit').addEventListener('click',()=>{
            contanier.querySelector('input').disabled = false;
            removeClass('input-field-disabled',contanier.querySelector('input'));
            addClass('input-field',contanier.querySelector('input'));
            hide(contanier.querySelector('svg.edit'));
            displayHidden(contanier.querySelector('svg.save'));
        });

        contanier.querySelector('svg.save').addEventListener('click',()=>{
            contanier.querySelector('input').disabled = true;
            removeClass('input-field',contanier.querySelector('input'));
            addClass('input-field-disabled',contanier.querySelector('input'));
            hide(contanier.querySelector('svg.save'));
            displayHidden(contanier.querySelector('svg.edit'));
        });
    }

    inputContainersAddDetail.querySelector('svg.edit-addDetail').addEventListener('click',()=>{
        for (const input of inputContainersAddDetail.querySelectorAll('input')) {
            input.disabled = false;
            removeClass('input-field-disabled',input);
            addClass('input-field',input);
            hide(inputContainersAddDetail.querySelector('svg.edit-addDetail'));
            displayHidden(inputContainersAddDetail.querySelector('svg.save-addDetail'));
        }
    });

    inputContainersAddDetail.querySelector('svg.save-addDetail').addEventListener('click',()=>{
        for (const input of inputContainersAddDetail.querySelectorAll('input')) {
            input.disabled = true;
            removeClass('input-field',input);
            addClass('input-field-disabled',input);
            hide(inputContainersAddDetail.querySelector('svg.save-addDetail'));
            displayHidden(inputContainersAddDetail.querySelector('svg.edit-addDetail'));
        }
    });