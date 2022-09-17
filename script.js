const character = document.getElementById("character")
// const block = document.getElementById("block")
const game = document.getElementById("game")

character.style.animation = "legs 500ms infinite"

const build = setInterval(() => {
    const cloudTop = Math.round(Math.random() * 10 * 7)
    const cloudDuraion = Math.round(Math.random() * 8) >= 4 ? Math.round(Math.random() * 8) : 6
    const cloud = document.createElement("div")
    cloud.setAttribute("id", "cloud")
    game.prepend(cloud)
    cloud.style.top = cloudTop + "px"
    cloud.style.animationDuration = cloudDuraion + "s"
    setTimeout(() => {
        cloud.remove()
    }, 8000);
}, 1000);

setInterval(() => {
    const block = setInterval(() => {
        const blockItem = document.createElement("div")
        blockItem.classList.add("block")
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

// const checkDead = setInterval(()=>{
//     const characterTop = parseInt(window.getComputedStyle(character).
//     getPropertyValue("top"))
//     const blockLeft = parseInt(window.getComputedStyle(block).
//     getPropertyValue("left"))
//     if(blockLeft<20 && blockLeft>0 && characterTop>=130){
//         block.style.animation = "none";
//         block.style.display = "none"
//         alert("you lose")
//     }
// }, 10)