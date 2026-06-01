import { state } from "./TransientState.js"

//
export const Purchase = async () => {
let selectedEntree = await fetch(`http://localhost:8088/entrees/${state.selectedEntree}`)
    .then((res) => res.json()); //Converts response from api into JS

let selectedVegetables = await fetch(`http://localhost:8088/vegetables/${state.selectedVegetables}`)
    .then((res) => res.json());

let selectedSides = await fetch(`http://localhost:8088/sides/${state.selectedSides}`)
    .then((res) => res.json());
}