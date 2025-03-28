import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener ("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    const childWish = itemClicked.dataset.wish
    const childId = itemClicked.dataset.id
   
    if (itemClicked.dataset.type === "child"){
   

        for (const child of children){
            if(parseInt(childId) === child.id)
                window.alert(`${itemClicked.textContent} wishes for ${childWish}`)
        }
            
    }     
})


export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

