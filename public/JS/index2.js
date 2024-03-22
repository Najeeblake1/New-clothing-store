// large container that displays all of the product listed above
const contentDisplay = document.getElementById('contentDisplay');
// the for each statement loops through all the objects at the top passing through the parameter
products.forEach((product) => {
    const contentContainer = document.createElement('div');
        contentContainer.classList.add('contentContainer');

        const productTitle = document.createElement('h1');
            productTitle.textContent = product.title;
        contentContainer.appendChild(productTitle);

        const imgContainer = document.createElement('div');
            imgContainer.classList.add('imgContainer');

            const img = document.createElement('img');
                img.src = product.picurl;
            imgContainer.appendChild(img);

        contentContainer.appendChild(imgContainer);

        const itemInfoContainer = document.createElement('div');
            itemInfoContainer.classList.add('itemInfoContainer');
            // * Add stock quantity update
            const priceStockBox = document.createElement('div');
                priceStockBox.classList.add('priceStockBox');

                const priceDisc = document.createElement('p');
                    priceDisc.classList.add('info');
                    priceDisc.textContent = "Price: $" + product.price;
                priceStockBox.appendChild(priceDisc);

                const stockDisc = document.createElement('p');
                    stockDisc.classList.add('info');
                    stockDisc.textContent = "Stock: " + product.stock;
                priceStockBox.appendChild(stockDisc);

            itemInfoContainer.appendChild(priceStockBox);

            const descBox = document.createElement('div');
                descBox.classList.add('productDescriptionContainer');

                const productDescription = document.createElement('p');
                    productDescription.textContent = product.desc;
                descBox.appendChild(productDescription);

            itemInfoContainer.appendChild(descBox);

        contentContainer.appendChild(itemInfoContainer);

        const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer');

            const addToCart = document.createElement('button');
                addToCart.classList.add('actionButtons');
                addToCart.textContent = "add to cart";

                addToCart.addEventListener('click', () => {
                    if (product.stock > 0) {
                        updateCart(product);
                    } else {
                        alert("Out of stock!");
                    }
                });

            buttonContainer.appendChild(addToCart);
        contentContainer.appendChild(buttonContainer);
    contentDisplay.appendChild(contentContainer);
});


// Cart table
const cart = document.createElement('table');
    cart.classList.add('cart');


    // Cart Titles
    const titleRow = document.createElement('tr');
        const tableHeadings = ["Product", "Quantity", "Price"];
        tableHeadings.forEach((heading) => {
            const title = document.createElement('th');
                title.textContent = heading;
            titleRow.appendChild(title);
        });
    cart.appendChild(titleRow);


    // Display chosen product list
    const cartProductDisplay = document.createElement('div')
        cartProductDisplay.classList.add('cartProductDisplay')
    cart.appendChild(cartProductDisplay)

    // Cart: bottom Row
    const taxRow = document.createElement('tr')
        taxRow.classList.add('taxRow')

        const taxTitle = document.createElement('tr')
            taxTitle.classList.add('totalTitle')
            taxTitle.textContent = "Tax";
        taxRow.appendChild(taxTitle)

        const taxAmount = document.createElement('td')
            taxAmount.classList.add('totals')
            taxAmount.textContent= "$0.00"
        taxRow.appendChild(taxAmount)

    cart.appendChild(taxRow)

    const totalRow = document.createElement('tr')
        totalRow.classList.add('totalRow')

        const totalTitle = document.createElement('tr')
            
            totalTitle.textContent = "Total";
        totalRow.appendChild(totalTitle)

        const totalAmount = document.createElement('td')
            totalAmount.classList.add('totalAmount')
            totalAmount.textContent = "$0.00";
        totalRow.appendChild(totalAmount)

    cart.appendChild(totalRow)
document.body.appendChild(cart);    


    
    function updateCart(product) {
        // Check if the product is already in the cart
        const existingCartItem = document.querySelector('.cartProductDisplay').querySelector(`[data-id="${product.id}"]`);
    
            if (existingCartItem) {
                // If the product is in the cart, increment the quantity
                const quantityElement = existingCartItem.querySelector('.quantityDisplay')
                    let quantity = parseInt(quantityElement.textContent)
                    quantity++;
                    quantityElement.textContent = quantity;
            } else {
                // If the product is not in the cart, add a new row
                const cartRow = document.createElement('tr')
                    cartRow.setAttribute('data-id', product.id)

                    // Product Title
                    const productNameCell = document.createElement('td')
                        const productTitle = document.createElement('p')
                            productNameCell.textContent = product.title;
                        productNameCell.appendChild(productTitle)
                        const deleteProductFromCart = document.createElement('button')
                            deleteProductFromCart.textContent='X';
                            deleteProductFromCart.addEventListener(('click'), () => {
                                cartProductDisplay.removeChild(cartRow)
                                updateStock();
                                updateTotal();
                            })
                        productNameCell.appendChild(deleteProductFromCart)

                        
                    cartRow.appendChild(productNameCell);

                    // Quantity
                    const productQuantityCell = document.createElement('td')
                        productQuantityCell.classList.add('quantity');
                
                        

                        // Minus Product Quantity
                        const minusButton = document.createElement('button')
                            minusButton.classList.add('amountButton')
                            minusButton.textContent = "-";
                            minusButton.addEventListener('click', () => {
                                const quantityElement = productQuantityCell.querySelector('span');
                                let quantity = parseInt(quantityElement.textContent);
                                if (quantity > 1) {
                                    quantity--;
                                    quantityElement.textContent = quantity;
                                    product.stock++;
                                    updateStock(product.id)
                                    updateTotal()
                                }else {
                                    cartProductDisplay.removeChild(cartRow)
                                    updateTotal()
                                }
                            });
                        productQuantityCell.appendChild(minusButton);

                        // Quantity Display
                        const quantityDisplay = document.createElement('span')
                            quantityDisplay.textContent = "1"; // Initial quantity
                            quantityDisplay.classList.add('quantityDisplay')
                        productQuantityCell.appendChild(quantityDisplay);

                        const plusButton = document.createElement('button')
                            plusButton.classList.add('amountButton')
                            plusButton.textContent = "+";
                            plusButton.addEventListener('click', () => {
                                const quantityElement = cartRow.querySelector('span')
                                let quantity = parseInt(quantityElement.textContent)
                                if (product.stock > 0) {
                                    quantity++;
                                    quantityElement.textContent = quantity;
                                    product.stock--;
                                    updateStock(product.id);
                                    updateTotal()
                                }else{
                                    alert("No more stock")
                                }
                            });
                        productQuantityCell.appendChild(plusButton);


                    cartRow.appendChild(productQuantityCell);

                    const productPriceCell = document.createElement('td')
                        productPriceCell.textContent = "$" + product.price
                    cartRow.appendChild(productPriceCell)

                cartProductDisplay.appendChild(cartRow);
            }

        // Decrease stock when item is added to cart
        product.stock--;
        updateStock(product.id)
        updateTotal() // After adding items
    }

    /*
        Temporary Stock management
    */
const stockMangCont = document.createElement('table')
            const TitleRow = document.createElement('tr')

            stockMangCont.appendChild(TitleRow)
        products.forEach((product) => {
            
        })
    
document.body.appendChild(stockMangCont)

// Update stock in objects array
function updateStock(productId) {
    const product = products.find(p => p.id === productId);
    const stockElement = document.querySelector(`#contentDisplay [data-id="${productId}"] .info[data-type="stock"]`);
    if (stockElement) {
        stockElement.textContent = "Stock: " + product.stock;
    }
}

function updateTotal() {
    const cartRows = document.querySelectorAll('.cartProductDisplay tr[data-id]');
    let total = 0;

    // Step 1: Ensure Correct Selection
    console.log("Number of cart rows:", cartRows.length);

    cartRows.forEach(row => {
        // Step 2: Check Quantity and Price Selection
        const price = parseFloat(row.querySelector('td:nth-child(3)').textContent.replace('$',''));
        const quantity = parseInt(row.querySelector('.quantity').textContent);
        console.log("Price:", price, "Quantity:", quantity);

        // Verify the correctness of the price and quantity values

        // Step 3: Verify Calculation
        total += price * quantity;
    });

    console.log("Total before tax:", total);

    // Step 4: Test Tax and Total Calculations
    const taxAmount = total * 0.13;
    const totalAmount = total + taxAmount;
    console.log("Tax amount:", taxAmount, "Total amount:", totalAmount);

    // Update the tax and total elements in the DOM
    const taxCell = document.querySelector('.cart .taxRow td:last-child');
    taxCell.textContent = "$" + taxAmount.toFixed(2);

    const totalCell = document.querySelector('.cart .totalRow td:last-child');
    totalCell.textContent = "$" + totalAmount.toFixed(2);


}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }