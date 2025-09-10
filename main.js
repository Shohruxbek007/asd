$(document).ready(function(){

$(".but1").click(function (){
    $("img").css("opacity","0%")
})

$(".but2").click(function (){
    $(this).css("background","lime")
    $(this).css("width","300px")

    $(this).css("height","70px")
})

$(".but3").click(function (){
    $("h1").css("color","red")
    $("p").css("color","green")

})
$("img").click(function (){
    $(document.body).css("background",`url("${this.src}")`)
      
})



})
