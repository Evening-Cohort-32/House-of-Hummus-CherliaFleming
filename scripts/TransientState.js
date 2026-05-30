 export const state = {}

 export const setEntree = (entreeId) => {
    state.selectedEntree = entreeId;
    document.dispatchEvent(new CustomEvent("stateChanged"));
 }

 export const setVegetables = (vegetablesId) => {
   state.selectedVegetables = vegetableId;
   document.dispatchEvent(new CustomEvent("stateChanged"));

 }

 export const setSides = (sidesId) => {
   state.selectedSides = sidesId;
   document.dispatchEvent(new CustomEvent("stateChanged"));

 }