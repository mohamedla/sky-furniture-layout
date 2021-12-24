// add Extra Image Field
const imagesWraper = document.querySelector('.imagesWraper'),
    addImg = document.querySelector('.addImg');

function addExtraImgField(fieldContainer){
    let div = document.createElement("div");
    div.innerHTML = "<input class='w-full' type='file' name='extraImg'> <div class='addImg' title='Add More Images'>";
    div.classList.add('extraItem');
    fieldContainer.appendChild(div);
}
    addImg.addEventListener('click',()=>{
        addExtraImgField(imagesWraper);
    });

// Add Extra Color Field
const colorWraper = document.querySelector('.colorWraper'),
    addColor = document.querySelector('.addColor');

function addExtraColorField(fieldContainer){
    let div = document.createElement("div");
    div.innerHTML = "<div class='grid grid-cols-3 gap-1 '><input class='input-field mb-5 justify-center items-center' type='text' placeholder='#ff00ff' name='color'> <input class='input-field mb-5' type='number' name='pieces' min='0'> <input style='border: 1px;padding: 0;margin: 0;line-height: normal;' class='w-full' type='file' name='extraImg'></div>";
    div.classList.add('extraImg');
    fieldContainer.appendChild(div);
}
    addColor.addEventListener('click',()=>{
        addExtraColorField(colorWraper);
    });