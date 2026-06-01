import { Sales } from "./Sales.js"
import { getEntree } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const getEntreeHTML = await getEntree()
    const VeggiesHTML = await Veggies()
    const SidesHTML = await Sides()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
        <article class="getEntrees">
        <h3>Entrees</h3>
        ${getEntreeHTML}
        </article>
        <article class="Veggies">
        <h3>Vegetables</h3>
        ${VeggiesHTML}
        </article>
        <article class="Sides">
        <h3>Sides</h3>
        ${SidesHTML}
        </article>


    `
}


// added async to FoodTruck; added await to Sales(); 