function calc() {
    price = document.getElementById("i1").value;
    tax = document.getElementById("i2").value / 100;
    taxCost = (tax * price) * tax;
    workingPrice = price * tax;
    workingPrice = price - workingPrice;
    workingPrice = workingPrice + taxCost;

    workingPrice = workingPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

    document.getElementById("output").innerHTML = "Real maximum price: " + workingPrice;

}

function calcTest(price, tax) {
    tax = tax / 100;
    taxCost = (tax * price) * tax;
    workingPrice = price * tax;
    workingPrice = price - workingPrice;
    workingPrice = workingPrice + taxCost;

    console.log("Calculated price: $" + workingPrice);

}
