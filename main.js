$(function () {
    $("img").css("box-shadow", "0 0 30px lime")
    $(".btn1").click(function () {
        $("body").css("background","green")
    })
    $(".btn2").click(function () {
        document.body.style.display = "none"
    })
    $(".btn3").click(function () {
        $(".img3").css("border-radius", "50%")
    })
    $(".btn4").click(function () {
        $(".img1").css("box-shadow", "0 0 30px black")
        $(".img2").css("box-shadow", "0 0 30px black")
        $(".img1").css("border-radius", "50%")
        $(".img2").css("border-radius", "50%")
    })
    $(".images img").click(function () {
        $(this).css("border-radius", "50px")
        $(this).css("box-shadow", "0 0 30px black")
    $(".p1").css("border-radius", "0")
    $(".p2").css("border-radius", "0")
    $(".p3").css("border-radius", "0")
})
    $(".btn5").click(function () {
        $("img").css("box-shadow", "")

    })
    $(".btn6").click(function () {
        let color = window.prompt("rang kiriting")
        document.body.style.background = color

    })
    $(".btn7").click(function () {
        let ball = window.prompt("IELTS ballini kiriting")
        if (ball <= 7) {
            $("img").css("display", "none")
        }
    })

    $("button").click(
        function () {
            $(this).css("font-size", "30px")
            $(this).css("background", "lime")
            $(this).css("border-radius", "10px")

        }
    )
    $(".btn10").click(function () {
        $("h1").css("color", "red")
        $("p").css("color", "green")


    })


    $(".lime").css("background", "lime")
    $(".blue").css("background", "blue")
    $(".red").css("background", "red")

    $("div").click(function () {

        let color1 = $(this).css("background-color")
        $("body").css("background", color1)

    })
    $(".s").css("font-size", "30px")
    $(".st").css("font-size", "40px")
    $(".sty").css("font-size", "50px")
    $(".styl").css("font-size", "60px")
    $(".s").click(function () {
        let a = $(this).css("font-size")
        $(".st").css("font-size", a)
    })
    $(".st").click(function () {
        let a = $(this).css("font-size")
        $(".sty").css("font-size", a)
    })
    $(".sty").click(function () {
        let a = $(this).css("font-size")
        $(".styl").css("font-size", a)
    })
    $(".styl").click(function () {
        let a = $(this).css("font-size")
        $(".s").css("font-size", a)
    })
    $(".p1").css("box-shadow", "0 0 50px red")
    
    $(".p2").css("box-shadow", "0 0 50px blue")
    $(".p3").css("box-shadow", "0 0 50px green")
    $(".p1").click(function () {
let a = $(this).css("box-shadow")
$(".p2").css("box-shadow",a)

    })
    $(".p2").click(function () {
let a = $(this).css("box-shadow")
$(".p3").css("box-shadow",a)

    })
    $(".p3").click(function () {
let a = $(this).css("box-shadow")
$(".p1").css("box-shadow",a)

    })






})

