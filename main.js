let chat = document.getElementById("chat")
let box = document.getElementById("box")
let Chat = document.querySelector(".chat")

function send() {
    let inp = document.getElementById("inp")
    if (box.checked) {
        Chat.innerHTML = Chat.innerHTML + "<div class='right'><h3 align='right'>" + inp.value + "</h3></div>"
        // console.log("ong")
    }
    else {
        Chat.innerHTML = Chat.innerHTML + "<div class='left'><h3 align='left'>" + inp.value + "</h3></div>"
        // console.log("chap")
    }


    inp.focus()
    inp.value = ''
    event.preventDefault()
}


function check() 
{
    let inp = document.getElementById("inp")
    if (inp.value == "") {
        console.log("error")
    }

    else {
        send()
    }
}

