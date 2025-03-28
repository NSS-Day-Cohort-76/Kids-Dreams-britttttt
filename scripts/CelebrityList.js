import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener ("click", (clickevent) => {
    const itemClicked = clickevent.target
    const celebrityId = itemClicked.dataset.id
    const celebritySport = itemClicked.dataset.sport


    if (itemClicked.dataset.type === "celebrity"){

        for (const celebrity of celebrities){
            if(parseInt(celebrityId) === celebrity.id){
                // window.alert(`${itemClicked.textContent} plays ${celebritySport}`)
                window.alert(`${celebrity.name} plays ${celebritySport}`)
            }
        }



    }
})

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
