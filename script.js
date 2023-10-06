console.log("Hello World")

function domManipulation(){
    const rootElement = document.querySelector("#root")
    console.log(rootElement)
    rootElement.innerHTML = "This is a done by dom manipulation"
}

function logClick(){
    console.log('clicked')
}

let tickCount = 0

function logTick(){
    console.log(`tick ${tickCount}`)
    tickCount++
}

window.addEventListener('load', domManipulation)
window.addEventListener('click', logClick)

window.setInterval(logClick, 1000)

