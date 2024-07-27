const products = [
    { id: 1, name: "T-Shirt", price: 19.99 },
    { id: 2, name: "Mug", price: 9.99 },
    { id: 3, name: "Hat", price: 14.99 },
  ];
  
  let cart = [];
  
  const productList = document.querySelector(".products ul");
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  
  function displayProducts() {
    productList.innerHTML = "";
    products.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        ${product.name} - $${product.price}
        <button data-product-id="${product.id}">Add to Cart</button>
      `;
      listItem.querySelector("button").addEventListener("click", addToCart);
      productList.appendChild(listItem);
    });
  }
  
  function addToCart(event) {
    const productId = event.target.dataset.productId;
    const selectedProduct = products.find((product) => product.id === parseInt(productId));
    cart.push(selectedProduct);
    updateCart();
  }
  
  function updateCart() {
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.name} - $${item.price}`;
      cartList.appendChild(listItem);
      total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  displayProducts();
  