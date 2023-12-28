var productCodeForm = document.getElementById("product-code");
var productQtyForm = document.getElementById("product-qty");
var btnSubmit = document.getElementById("btnSubmit");

productCode = ["001", "002", "003"];
productName = ["A", "B", "C"];
productPrice = [10000, 20000, 30000];

var message = "";
var codeValue = productCodeForm.value;
var qty = productQtyForm.value;
var total = 0;

btnSubmit.addEventListener("click", () => {
  for (var i = 0; i < 3; i++) {
    if (productCode[i] == codeValue) {
      total = productPrice[i] * qty;
      message += `Total Pembayaran Adalah : ${total} \n`;
      alert(message);
    }
  }
});

var uang = prompt("masukkan uang anda");

if (uang > total) {
  var kembalian = total - uang;
  alert(`total kembalian anda adalah ${kembalian}`);
}
