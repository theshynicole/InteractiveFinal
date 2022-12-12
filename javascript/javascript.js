alert("Hello")
$(document).click(function(){
    $(container).css("grid-template-columns: repeat(3,1fr);") 
})


$(document).mousemove(function(){
    if($(".item1:hover").length==1) {
        $(".item1").css("background", "yellow")
        $("#tittle1").css("font-size","40px")
        $("tittle1").css("letter-spacing","20px")
        $("tittle1").css("filter","blur(0px)")
    }
    else{
        $(".item1").css("background", "red")
        $(".item1").css("font-size","20px")
        $(".item1").css("letter-spacing","normal")
    }
    if($(".item2:hover").length==1){
        $(".item2").css("background","blue")
    }else{
        $(".item2").css("background","rgb 97, 173, 116")
    }
    if($(".item3:hover").length==1) {
        $("item3").css("background","purple")
    }else{
        $(".item3").css("background","orange")
    }
})

$(document).scroll(function(){
   // console.log("I am scrolling")
    $(".block").addClass("move")

    var fromTop= $(document).scrollTop()
    console.log(fromTop)

    if(fromTop > 600){
        $("#last").css("opacity","1")
    }else{
        $("#last").css("opacity","0.3")
    }
})