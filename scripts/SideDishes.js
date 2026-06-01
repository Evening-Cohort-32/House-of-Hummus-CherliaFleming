export const Sides = async () => {
    const getSidesResponse = await fetch(
        "http://localhost:8088/sides",
    );

    const Sides = await getSidesResponse.json();
//map because you have to show all vegetables available for user to choose
    const availableSides = Sides.map((sides) => { 
        return (
       `<div class="side-item">
       <input type="radio"
       name="selectedSide"
       id="side-${sides.id}"
       value="${sides.id}"
       />
       <label for="side-${sides.id}">
       ${sides.title} ${sides.price}</label>
       </div>
       `
        )
    })
    //joins all the HTML
    return `
    <div class="Sides">
${availableSides.join("")}</div>`

}

