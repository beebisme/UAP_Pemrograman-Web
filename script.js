var productCodeForm = document.getElementById("product-code");
var productQtyForm = document.getElementById("product-qty");
var btnSubmit = document.getElementById("btnSubmit");

productCode = ["001", "002", "003"];
productName = ["A", "B", "C"];
productPrice = [10000, 20000, 30000];

var message = "";
var total;

btnSubmit.addEventListener("click", () => {
  var codeValue = productCodeForm.value;
  var qty = productQtyForm.value;
  for (var i = 0; i < 3; i++) {
    if (productCode[i] == codeValue) {
      total = productPrice[i] * qty;
      message += `Total Pembayaran Adalah : ${total} \n`;
      alert(message);
      var uang = prompt("masukkan uang anda");
      uang = parseInt(uang);

      if (uang > total) {
        var kembalian = uang - total;
        alert(`total kembalian anda adalah ${kembalian}`);
      }
    }
  }
});
