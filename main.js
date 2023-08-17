import { getCrocs, getStyles } from "./database.js"

const crocs = getCrocs()
console.log(crocs)

const styles = getStyles()
console.log(styles)