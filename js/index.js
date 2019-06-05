
$(".banner1").banner({
    items:$(".banner1 .imgBox").children(),//必传
    left:$(".banner1 #left"),
    right:$(".banner1 #right"),
    list:false,
    autoplay:true,
    delayTime:2000,
    moveTime:1000,
    index:0
});

$(".banner2").banner({
    items:$(".banner2 .imgBox2").children(),//必传
    list:true,
    autoplay:true,
    delayTime:2000,
    moveTime:1000,
    index:0
});

$("#switchCity").click(function(){
    $("#citylist").css({
        display:"block"
    })
    $("#switchCity").css({
        background:"#b91c2b",
        color:"#fff"
    })
})
$(".citylistclose").click(function(){
    $("#citylist").css({
        display:"none"
    })
    $("#switchCity").css({
        background:"",
        color:""
    })
})

$(".pinpaiku").children("li").mouseover(function(){
    $(this).children("a").children("img").attr("src",`images/f8-${$(this).attr("index")}.jpg`)
})
$(".pinpaiku").children("li").mouseout(function(){
    $(this).children("a").children("img").attr("src",`images/f8-${$(this).attr("index")}.2.jpg`)
})
