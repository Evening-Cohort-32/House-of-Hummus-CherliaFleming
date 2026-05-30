import { Sales } from "./Sales.js"
import { getEntree } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const getEntreeHTML = await getEntree()
    const VeggiesHTML = await Veggies(
        
    )

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
        <h3>"Entrees"</h3>
        ${getEntreeHTML}
        </article>

    `
}
