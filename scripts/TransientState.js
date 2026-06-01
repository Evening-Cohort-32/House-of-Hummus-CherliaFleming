 export const state = {}


//The user's choices should be cleared from transient state once the purchase is made.
// I originally had "dispatchEvent" but removed from the setters because the re-render should only happen after the purchase button is clicked, not every time a radio button is selected.
 export const setEntree = (entreeId) => {
    state.selectedEntree = entreeId;
   
 }

 export const setVegetables = (vegetablesId) => {
   state.selectedVegetables = vegetablesId;


 }

 export const setSides = (sidesId) => {
   state.selectedSides = sidesId;

 }