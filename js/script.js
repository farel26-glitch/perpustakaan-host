function validasiTransaksi() {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let kategori = document.getElementById("kategori").value;

    if (nama === "" || jumlah === "" || kategori === "") {
        alert("Semua data harus diisi!");
        return false;
    }
    alert("Transaksi berhasil disimpan");
    return true;
}

function validasiLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Username dan password wajib diisi!");
        return false;
    }
    alert("Login berhasil");
    return true;
}
