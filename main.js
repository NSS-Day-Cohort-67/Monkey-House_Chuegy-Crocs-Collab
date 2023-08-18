import { getCrocs, getStyles } from "./database.js"

const crocs = getCrocs()
console.log(crocs)

const styles = getStyles()
console.log(styles)

// create a function that returns list of crocs names as html
// iterate through each object in array and extract keys
// declare htmlString variable
// put keys into interpolated string variable called htmlString
// return htmlString

// iterate through styles
// if croc.styleId === style.id
// return style.style

const crocToHtml = () => {
    let htmlString = ''
    for (const croc of crocs) {

        htmlString += `<article class="croc-name">${croc.color} ${croc.name}
        `
        for (const style of styles) {
            if (croc.styleId === style.id) {
                htmlString += `<div>${style.style}</div>`
            }
        }
        htmlString += `</article>`
    }
    return htmlString
}

// console.log(crocToHtml())


// create variable that holds html element
// variable.innerHTML equals htmlString
const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = crocToHtml()