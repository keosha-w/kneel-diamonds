import { getMetals, getOrders, getStyles } from "./database.js"


const buildOrderListItem = (order) => {
    const metalsPrice = getMetals()
    const JewelryStylesPrice = getStyles()
    const DiamondSizesPrice = getStyles()
// Remember that the function you pass to find() must return true/false
const foundMetal = metalsPrice.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const foundStyle = JewelryStylesPrice.find(
    (style) => {
        return style.id === order.styleId
    }
)

const foundSize = DiamondSizesPrice.find(
    (style) => {
        return style.id === order.styleId
    }
)
const totalCost = foundMetal.price + foundStyle.price + foundSize.price

const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


