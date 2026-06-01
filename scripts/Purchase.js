import { state } from "./TransientState.js"

//// 1. Fetch the selected entree, vegetable, and side from the API using state ids
export const Purchase = async () => {
let selectedEntrees = await fetch(`http://localhost:8088/entrees/${state.selectedEntrees}`)
    .then((res) => res.json()); //Converts response from api into JS

let selectedVegetables = await fetch(`http://localhost:8088/vegetables/${state.selectedVegetables}`)
    .then((res) => res.json());

let selectedSide = await fetch(`http://localhost:8088/sides/${state.selectedSide}`)
    .then((res) => res.json());

//Calculate the total of selected options; used toFixed(2) to round to 2 decimal places for a clean number 
const total = (selectedEntrees.price + selectedVegetables.price + selectedSide.price).toFixed(2)

const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({totalCost: total})
    }

        const response = await fetch("http://localhost:8088/purchases", postOptions)

//clear transient state after purchase, this wipes out the value previously stored 
state.selectedEntrees = null 
state.selectedVegetables = null 
state.selectedSide = null 

//re-render
document.dispatchEvent(new CustomEvent("stateChanged"))
}





