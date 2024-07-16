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
    else{
         productTotal = newProductCount * 176999;
    }

    document.getElementById(product+'-total').innerText = productTotal;

}