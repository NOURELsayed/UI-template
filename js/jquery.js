$(function(){
    "use strict"
    var winh = $(window).height();
    var upperh = $(".upper-bar").innerHeight();
    var navh = $(".navbar").innerHeight();
    
    $(".slider, .carousel-item").height(winh-(upperh + navh));
    
    //featured-work shuffle 
    $(".featured-work ul li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        
        if($(this).data("class") ==="all"){
            $(".shuffle-work .col-sm").css("opacity", 1);
        }
        else{
            $(".shuffle-work .col-sm").css("opacity", ".7");
            $($(this).data("class")).parent().css("opacity", 1);
        }
        
    });
    
    // trigger arrow slider
     
    //end trigger arrow
    
});