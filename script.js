mcgovernBtn.onmouseover = function (event) {
    this.style.left = Math.random() * 800 + "px"
    this.style.top = Math.random() * 300 + "px"
}

window.oncontextmenu = (event) => {
    event.preventDefault();
}


// window.onload = function(event){
//     for(i=0; i < 10; i++){
//         var troll = document.getElementById("words")
//         troll.innerHTML += "<p>VOTE NIXON</p><br>"
//     }
// }

document.getElementById("mcgovernBtn").addEventListener("mouseover", function () {
    for (i = 0; i < 10; i++) {
        var troll = document.getElementById("words")
        troll.innerHTML += "<p>VOTE NIXON</p><br>"
    }
})

vote.mouseover = function (event) {

    let voteCoords = this.getBoundingClientRect();

    let buttonCoords = {
        top: event.clientY - voteCoords.top,
        left: event.clientX - voteCoords.left
    }

    if (buttonCoords.top < 0) {
        buttonCoords.top = 0;
    }
    if (buttonCoords.left < 0) {
        buttonCoords.left = 0;
    }

    if (buttonCoords.left + mcgovernBtn.clientWidth > vote.clientWidth) {
        buttonCoords.top = vote.clientWidth - mcgovernBtn.clientWidth
    }
    if (buttonCoords.top + mcgovernBtn.clientHeight > vote.clientHeight) {
        buttonCoords.top = vote.clientHeight - mcgovernBtn.clientHeight
    }

    mcgovernBtn.style.left = buttonCoords.left + 'px'
    mcgovernBtn.style.top = buttonCoords.top + 'px'
}