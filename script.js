function hitungTotal() {
  let harga = parseFloat(document.getElementById("harga").value);
  let jumlah = parseInt(document.getElementById("jumlah").value);
  let hasil = document.getElementById("hasil");

  if (isNaN(harga) || isNaN(jumlah)) {
    hasil.innerHTML = "Masukkan harga dan jumlah dengan benar!";
    return;
  }

  let total = harga * jumlah;
  let diskon = 0;

  if (total > 100000) {
    diskon = total * 0.1;
  }

  let totalBayar = total - diskon;

  hasil.innerHTML = `
    Total Belanja: Rp ${total.toLocaleString()} <br>
    Diskon: Rp ${diskon.toLocaleString()} <br>
    <strong>Total Bayar: Rp ${totalBayar.toLocaleString()}</strong>
  `;
}
