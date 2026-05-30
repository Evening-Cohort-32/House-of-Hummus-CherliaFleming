
export const getEntree = async () => {
    const getEntreeResponse = await fetch(
        "http://localhost:8088/entrees",
    );

    const getEntree = await getEntreeResponse.json();
//map because you have to show all entrees available and prices 
    const availableEntrees = getEntree.map((getEntree) => { 
        return (
       `<div class="entree-item">
       <input type="radio"
       name="selectedEntree"
       id="entree-${getEntree.id}"
       value="${getEntree.id}"
       />
       <label for ="entree-${getEntree.id}">
       ${getEntree.name} ${getEntree.price}</label>
       </div>
       `
        )
    })
    //joins all the HTML
    return `
    <div class="getEntrees">
    ${availableEntrees.join("")}</div>`

}

