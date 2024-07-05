var product1 = document.getElementById("product1")
var qty1 = document.getElementById("qty1")
var price1 = document.getElementById("price1")
 
var product2 = document.getElementById("product2")
var qty2 = document.getElementById("qty2")
var price2 = document.getElementById("price2")
 
var carts = document.getElementById("carts")
var total = document.getElementById("total")
var cash = document.getElementById("cash")
var change = document.getElementById("change")
 
function addOrder(){
    carts.textContent=""
    let totalAmount 0;
	
	if (parseFloat(qty1.value) > 0){
	    var order= qty1.value.toString() + ' pc/s x '+ price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)) + '\n'
		//carts.textContent += carts.value.toString() + "\n";
		carts.textContent += order;
		totalAmount += parseFloat(qty1.value)
	}
	if (parseFloat(qty2.value) > 0){
	    var order= qty2.value.toString() + ' pc/s x '+ price2.textContent + '------'+ product2.textContent + '------ Php' + (parseFloat(qty2.value)*parseFloat(price2.textContent)) + '\n'
		//carts.textContent += carts.value.toString() + "\n";
		carts.textContent += order
	}
	total.value = totalAmount.
}	
qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);

function calculateChange() {
	let totalAmount = parseFloat(total.value);
	let cashTendered = parseFloat(cash.value);
	if (!isNan(cashTendered) && cashTendered >= totalAmount) {
		change.value = (cashTendered - totalAmount).toFixed(2);
	} else {
	    change.value = "";
	}
}
document.getElementById('cash').onkeyup = calculateChange;
