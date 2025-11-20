// Write your code here

const products = ["laptop", "phone", "headphones", "Monitor"]
function logFirstProduct() {
  console.log(products[0])
} 

// logFirstProduct()

function addProduct(productName) {
  products[4] = productName
  
}
addProduct("fridge")
console.log(products) //
function updateProductName(position, productName) {
  products[position] = productName
}
updateProductName(1, "samsung")
console.log(products)
function removeLastProduct() {
  products.pop()
}
removeLastProduct()
console.log(products)


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
