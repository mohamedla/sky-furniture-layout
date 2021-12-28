$(window).on('load',()=>{
    // scroll the sliders horz
    var slidVal = 0;
    $('.slider-container .scroll-arrow.right').on('click',(event)=>{
        const slider = ($(event.target).parent().parent().find(".slider"))[0];
        var maxSlideVal = slider.scrollWidth - slider.clientWidth;
        if (slidVal < maxSlideVal) {
            slidVal += 300;
        }
        slider.scroll({left:slidVal,behavior: "smooth"});
    });

    $('.slider-container .scroll-arrow.left').on('click',(event)=>{
        if (slidVal > 0) {
            slidVal -= 300;
        }
        ($(event.target).parent().parent().find(".slider"))[0].scroll({left:slidVal,behavior: "smooth"});
    });

    // add to favourit
    $('.slider-container .slider .card .favourit-budge').on('click',(event)=>{
        $(event.target).parent().toggleClass('added');
    });

    // add to cart
    $('.slider-container .slider .card .addtocart').on('click',(event)=>{
        $(event.target).parent().toggleClass('added');
    });
});