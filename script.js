const character = document.getElementById("character")
const game = document.getElementById("game")
const score = document.getElementById("score")
const record = document.getElementById("record")
const windowS = parseInt(window.getComputedStyle(window.document.querySelector("body")).getPropertyValue("width"))
console.log(localStorage.getItem("record"));
score.textContent = 0
let totalScore = 0
const scoreInterval = setInterval(() => {
    totalScore++
    score.textContent = totalScore
    if(JSON.parse(localStorage.getItem("record")) < totalScore){
        localStorage.setItem("record", JSON.stringify(totalScore))
        window.document.getElementById("record__color").style.color = "red"
    }
}, 100);
record.textContent = JSON.parse(localStorage.getItem("record")) ? JSON.parse(localStorage.getItem("record")) : 0
character.style.animation = "legs 500ms infinite"

const build = setInterval(() => {
    const cloudTop = Math.round(Math.random() * 10 * 7)
    let cd = Math.round(Math.random() * 8)
    let cloudDuraion = cd >= 4 ? cd : 6
    if(windowS <= 425){}
     else if(windowS <= 1024){
        cd = Math.round(Math.random() * 12)
        cloudDuraion = cd >= 6 ? cd : 10
    } else{
        cd = Math.round(Math.random() * 20)
        cloudDuraion = cd >= 10 ? cd : 15
    }
    const cloud = document.createElement("div")
    cloud.setAttribute("id", "cloud")
    game.prepend(cloud)
    cloud.style.top = cloudTop + "px"
    cloud.style.animationDuration = cloudDuraion + "s"
    setTimeout(() => {
        cloud.remove()
    }, 21000);
}, 1000);

setTimeout(() => {
    const block = setInterval(() => {
        const blockItem = document.createElement("div")
        blockItem.classList.add("block")
        if(windowS <= 425){
            blockItem.style.animationDuration = '1.5s'
        } else if(windowS <= 1024) {
            blockItem.style.animationDuration = '3s'
        } else {
            blockItem.style.animationDuration = '4s'
        }
        game.append(blockItem)
        setTimeout(() => {
            blockItem.remove()
        }, 8000);
    }, 2000)
}, 3000)

let bol = true
function jump() {
    if (bol) {
        if (character.classList != "animate") {
            bol = false
            character.style.animation = "legs 500ms infinite, jump 500ms"
        }
        setTimeout(() => {
            character.style.animation = "legs 500ms infinite"
            bol = true
        }, 500)
    }
}

const checkDead = setInterval(() => {
    const block = window.document.querySelectorAll(".block")
    if (block) {
        block.forEach(e => {
            const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
            const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
            const characterW = parseInt(window.getComputedStyle(character).getPropertyValue("width"))
            const blockStyleH = parseInt(window.getComputedStyle(e).getPropertyValue("height"))
            const blockStyleLeft = parseInt(window.getComputedStyle(e).getPropertyValue("left"))

            if (characterTop >= 150 - blockStyleH && blockStyleLeft >= characterLeft && blockStyleLeft < characterLeft + characterW - 15) {
                alert("you lose")
            }
        })
    }
}, 10);
