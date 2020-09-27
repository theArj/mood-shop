const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

itemList.innerHTML = '<li> Hello World</li>'
console.log(itemList)

const itemsContainer = document.getElementById("items");

import data from './data.js';

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    let newDiv = document.createElement('div');
      newDiv.className = 'item'
    // display the image
    let img = document.createElement('img');
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)
  
    let desc = document.createElement('P')
    desc.innerText =data[i].desc
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)
  
    let button = document.createElement('button')
    button.id = data[i].name
  
    // creates a custom attribute called data-price.
    // That will hold the price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    // put new div inside items container
    itemsContainer.appendChild(newDiv)
  }

  const = cart []

  // ----------------------------------------------------------------
  // Add Item.
  function addItem(name, price, qty) {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].name === name) {
        cart[i].qty += 1
        // Stop running code here with return statement if duplicates are added to cart.
        return
      }
    }
    const item = {name, price, qty: 1}
    cart.push(item)
  }

  // ----------------------------------------------------------------
  // Show Items.
  function showItems() {
    const qty = getQty()
    // console.log(`You have ${qty} items in your cart.`)
    cartQty.innerHTML = `You have ${qty} items in your cart.`

    let itemStr = ''
    for (let i = 0; i < cart.length; i += 1) {
      // console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
      // const name = cart[i].name
      // const price = cart[i].price
      // const qty = cart[i].qty

      // const {name, price, qty} = cart[i]

      itemStr += `<li>${name} $${price} x ${qty} = ${qty * price}</li>`
    }
    itemList.innerHTML = itemStr

    // console.log(`Total in cart: $${getTotal()}`)
    cartTotal.innerHTML = `Total in cart: $${getTotal()}`
  }

  // ----------------------------------------------------------------
  // Get Quantity.
  function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
      qty += cart[i].qty
    }
    return qty
  }

  // ----------------------------------------------------------------
  // Get Total.
  function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
      total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
  }

  // ----------------------------------------------------------------
  // Remove Item Function.
  function removeItems (name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].name === name) {
        if (aty > 0) {
          cart[i].qty -= qty
        }
        if (cart[i].qty < 1 || qty === 0) {
          cart.splice(i, 1)
        }
        return
      }
    }
  }
  // ----------------------------------------------------------------
  // Test code.
  // addItem("Apple", 0.99, 3)
  // addItem("Orange", 1.29, 1)
  // addItem("Opinion", 0.99, 1)
  // addItem("Frisbee", 9.99, 1)
  // addItem("Apple", 0.99, 1)
  // addItem("Orange", 1.29, 1)

  // showItems()

  // removeItems("Orange")
  // removeItems("Apple", 1)

  showItems()