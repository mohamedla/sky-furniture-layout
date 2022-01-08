//  Declare Fuction to use inside Html
    // remove Field
    function remove (event){
        $(event.currentTarget).parent().parent().remove();
    }
    // enable and disable editing in a field
    function change(event) {
        const editIcon = '<svg class="edit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>',
        saveIcon = '<svg class="save" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';
        const target  = $(event.currentTarget);
        if (target.children().attr("class") == "edit") {
            target.html(saveIcon);
            target.parent().find(".input").prop("disabled",false);
        } else if($(event.currentTarget).children().attr("class") == "save") {
            target.html(editIcon);
            target.parent().find(".input").prop("disabled",true);
        }
        target.parent().find(".input").toggleClass("disabled").toggleClass("enabled");
    }
    // preview Uploaded Image
    function imgSelect(event) {
        var file = event.currentTarget.files[0];
        $(event.currentTarget).parent().find('img').attr("src",URL.createObjectURL(file));
    }
$(window).on('load',()=>{
    // enable and disable input field
    $("form .change").on("click",(event)=>{change(event);});
    // remove input field
    $("form .remove").on("click",(event)=>{remove(event);});
    // Add new input field
    function addField(event,field) {
        $(event.currentTarget).parent().parent().append(field);
    }
        // add color field
    $("form .addColor").on("click",(event)=>{
        let colorField;
        if ($("form").parent().hasClass("new")) {
            colorField = `
            <div class="input-2col mt-1">
                <div class="input-con">
                    <input class="input mr-1 disabled" required type="text" name="color">
                </div>
                <div class="input-con">
                    <input class="input disabled" required min="0" type="number" name="pieces">
                    <div class="remove" onclick="remove(event);">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </div>
                </div>
            </div>`;
        } else {
            colorField = '<div class="input-2col mb-1"><div class="input-con mr-1"><input class="input enabled" required type="text" name="color"><div class="change" onclick="change(event);"><svg class="save" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div></div><div class="input-con"><input class="input enabled" required min="0" type="number" name="pieces"><div class="change" onclick="change(event);"><svg class="save" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div><div class="remove" onclick="remove(event);"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></div></div></div>';
        }
        addField(event,colorField);
    });
        // add Image Feild
    $("form .addImg").on("click",(event)=>{
        let imgField;
        if ($("form").parent().hasClass("new")) {
            imgField =`
            <div class="input-con">
                <img id="image-0" src="" alt="Extra Image">
                <input id="image-0" class="input disabled" style="width: 80%;" required value="Italian Bosshkash Chair" onchange = "imgSelect(event);" type="file" name="extraImg1" accept="image/*">
            <div>
            <div class="remove" onclick="remove(event);">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </div>`;
        } else {
            imgField = '<div class="input-con"><img id="image-0" src="" alt=""><input id="image-0" class="input enabled" style="width: 80%;" required value="Italian Bosshkash Chair" onchange = "imgSelect(event);" type="file" name="extraImg1" accept="image/*"><div class="change" onclick="change(event);"><svg class="save" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div><div><div class="remove" onclick="remove(event);"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></div></div></div>';
        }
        addField(event,imgField);
    });
    // Preview Uploaded Image
    $("form input[type='file']").on("change",(event)=>{
        imgSelect(event);
    });
});
