import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kid, celebrities) => {
    let celebrity = null

    for (const celebrityMatch of celebrities) {
        if (celebrityMatch.id === kid.celebrityId){
             celebrity = celebrityMatch
        }
    }

    return celebrity
}

export const findKidMatch = (celebrity, allKids) => {
    let celebrityKid = null 
    for (const kid of allKids){
        if (kid.id === celebrity.celebrityId) {
           celebrityKid = kid
        }
    }
    return celebrityKid
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        const star = findKidMatch(kidsStar, kids)
        html += `
            <li data-type="kids">
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

