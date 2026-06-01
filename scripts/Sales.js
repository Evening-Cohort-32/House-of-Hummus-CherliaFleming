export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases").then(res => res.json())

//empty .map() needs a callback| Required format: Receipt #1 = $00.00
    let salesDivs = sales.map((sale) => {
return `<p>Receipt #${sale.id} = $${sale.totalCost}</p>`
    })

    salesDivs = salesDivs.join("")

    return salesDivs
}

//Changed orders to purchases