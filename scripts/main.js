import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

//stageChanged event listener to re-render when the state changes 
document.addEventListener("stateChanged", renderAllHTML)
renderAllHTML()

