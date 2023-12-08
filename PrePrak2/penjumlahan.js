function jumlahkan() {
  var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

  if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
    var hasil = bilangan1 + bilangan2;
    document.getElementById("hasil").innerText = "Hasil: " + hasil;
  } else {
    document.getElementById("hasil").innerText =
      "Masukkan bilangan yang valid.";
  }
}

function reset() {
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
  document.getElementById("hasil").innerText = "";
}
