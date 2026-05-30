export const Veggies = async () => {
    const getVeggieResponse = await fetch(
        "http://localhost:8088/vegetables",
    );

    const Veggies = await getVeggieResponse.json();
//map because you have to show all vegetables available for user to choose
    const availableVeggies = Veggies.map((vegetables) => { 
        return (
       `<div class="vegetable-item">
       <input type="radio"
       name="selectedVegetables"
       id="vegetable-${vegetables.id}"
       value="${vegetables.id}"
       />
       <label for ="vegetable-${vegetables.id}">
       ${vegetables.type} ${vegetables.price}</label>
       </div>
       `
        )
    })
    //joins all the HTML
    return `
    <div class="Veggies">
${availableVeggies.join("")}</div>`

}

