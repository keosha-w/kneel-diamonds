import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//the responsibility of this event listener is to listen for the state changed event and generate all the HTML

document.addEventListener("stateChanged", event => {
    console.log ("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

