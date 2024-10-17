document.getElementById("calc").addEventListener("click", calculateKennelPrice);

function calculateKennelPrice() {
    let dogSize = document.getElementById("dogSize").value;
    let numberDays = document.getElementById("numberDays").value;
    let price = parseInt(dogSize) + parseInt(numberDays) * 15;
    let tax = price * 0.047;
    let total = price + tax;

    document.getElementById("price").textContent = `Price: $${price.toFixed(2)}`
    document.getElementById("tax").textContent = `Tax: $${tax.toFixed(2)}`
    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`
}
