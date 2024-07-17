function handle(product,isIncrease){

    const productInput = document.getElementById(product);

    const productCount = parseInt(productInput.value);

    let newProductCount = productCount;

    if(isIncrease == true){
        newProductCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }
    productInput.value = newProductCount; 

    let productTotal;

    if(product == "laptop"){
        productTotal = newProductCount * 245000;
    }
    if(product == "phone"){
        productTotal = newProductCount * 176999;
    }


    document.getElementById(product+'-total').innerText = productTotal;

    handleCheckout();

}




function handleCheckout(){

    const laptopCount = getItems("laptop");

    const phoneCount = getItems("phone");

    const totalPrice = parseInt(laptopCount) * 245000 + parseInt(phoneCount) * 176999;

    document.getElementById("sub_total").innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);

    document.getElementById("tax_amount").innerText = tax;

    const grandTotal = (totalPrice * tax);

     document.getElementById("grand_total").innerText = grandTotal;

}


function getItems(product){
    const productInput = document.getElementById(product);

    const productCount = parseInt(productInput.value);

    return productCount;
}


function Checkout(){
    alert("Thanks for purchasing with us!")
    location.reload();
}