const addToCart = document.querySelectorAll(".add-to-cart");
const selectedCard = document.querySelectorAll(".selected-item-quantity");
const productImage = document.querySelectorAll(".product-image");
const productName = document.querySelectorAll(".full-name");
const price = document.querySelectorAll(".price");
const cartContent = document.querySelector("#cart-content");
const order  = [];
const orderQuantity = [0,0,0,0,0,0,0,0,0];
const incrementor = document.querySelectorAll(".incrementor");
const decrementor = document.querySelectorAll(".decrementor");
const amount =  document.querySelectorAll("#amount");
const emptyCart = document.querySelector(".empty-cart");
const orderSummary = document.querySelector(".order-summary")
const orderSummaryProductName = document.querySelector("#product-name");
const productQuantity = document.querySelector("#product-quantity")
const productPrice = document.querySelector("#product-price");
const productAmount = document.querySelector("#product-amount");
let quant = 0;

addToCart.forEach((addtocart, index)=>{
    addtocart.addEventListener("click", function(){
        let eachOrder;
        addtocart.remove();
        if(selectedCard[index]){
            selectedCard[index].classList.remove("quantity");  
            productImage[index].classList.add("selected");
            orderQuantity[index]++
            quant++
            amount[index].textContent = orderQuantity[index];
            eachOrder = {orderName: productName[index].textContent, quantity: orderQuantity[index], price: price[index].textContent};
            order.push(eachOrder);
            cartContent.textContent = quant;
            emptyCart.remove();
            let orderIndex = order.findIndex((item)=> item.orderName === productName[index].textContent);
            orderSummaryProductName.textContent = order[orderIndex].orderName;
            productQuantity.textContent = orderQuantity[index];
            productPrice.textContent = order[orderIndex].price;
            let cost = orderQuantity[index] * parseFloat(order[orderIndex].price.replace("$",""));
            productAmount.textContent = cost;
            console.log(cost);
            
            orderSummary.classList.remove("active");
        }
        
    })
})


incrementor.forEach((incrementor,index)=>{
    incrementor.addEventListener("click", function(){
        orderQuantity[index]++;
        quant++;
        amount[index].textContent = orderQuantity[index];
        const currentOrder = order.findIndex(item => item.orderName === productName[index].textContent);
        
            order[currentOrder].quantity = orderQuantity[index];
        // console.log(order[currentOrder]);
        // console.log(index)
        // console.log(orderQuantity[index]);
        // console.log(currentOrder);
        
        console.log(quant);
        cartContent.textContent = quant;
        productQuantity.textContent = orderQuantity[index];
        let cost = orderQuantity[index] * parseFloat(order[currentOrder].price.replace("$",""));
        productAmount.textContent = cost;
        
        
        // order[index].quantity = orderQuantity[index];
        // console.log(order[index]);
        
    })
})
decrementor.forEach((decrementor,index)=>{
    decrementor.addEventListener("click", function(){
        if(orderQuantity[index] != 0){
            orderQuantity[index]--;
            quant--;
            amount[index].textContent = orderQuantity[index];
            cartContent.textContent = quant;  
            productQuantity.textContent = orderQuantity[index];
            let orderIndex = order.findIndex((item)=> item.orderName === productName[index].textContent);
            let cost = orderQuantity[index] * parseFloat(order[orderIndex].price.replace("$",""));
            productAmount.textContent = cost;
        }else{
            alert('ThAT IS ALL YOU CAN REMOVE'); 
        }
        
    })
})

