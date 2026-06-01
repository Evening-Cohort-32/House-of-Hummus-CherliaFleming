import { FoodTruck } from "./FoodTruck.js"
import { setEntree, setVegetables, setSides } from "./TransientState.js"

const mainContainer = document.querySelector("#container")
//async missing 
const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

//added stageChanged event listener to re-render when the state changes 
document.addEventListener("stateChanged", renderAllHTML)
renderAllHTML()

//When the user selects an item in any of the three columns, the choice should be stored as transient state.
const entreeSelected = (event) => {
    if (event.target.name === "selectedEntree") {
        setEntree(event.target.value)
    }
    if (event.target.name === "selectedVegetables") {
        setVegetables(event.target.value)
    }
    if (event.target.name === "selectedSides") { 
        setSides(event.target.value)
    }
}

document.addEventListener("change", entreeSelected)
