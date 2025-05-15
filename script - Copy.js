let keranjang = [];

function addToCart(namaProduk, harga) {
  // Cari apakah produk sudah ada di keranjang
  const index = keranjang.findIndex(item => item.nama === namaProduk);

  if (index !== -1) {
    // Jika ada, tambahkan jumlah
    keranjang[index].jumlah += 1;
  } else {
    // Jika belum ada, tambahkan produk baru
    keranjang.push({ nama: namaProduk, harga: harga, jumlah: 1 });
  }

  updateKeranjang();
}

function removeFromCart(namaProduk) {
  // Hapus satu produk dari keranjang
  keranjang = keranjang.filter(item => item.nama !== namaProduk);
  updateKeranjang();
}

function updateKeranjang() {
  const keranjangDiv = document.getElementById("keranjang");

  if (!keranjangDiv) return; // Jika div tidak ditemukan, hentikan

  if (keranjang.length === 0) {
    keranjangDiv.innerHTML = "<p>Keranjang kosong</p>";
  } else {
    let keranjangHTML = "<ul>";
    let total = 0;

    keranjang.forEach(item => {
      const subtotal = item.harga * item.jumlah;
      total += subtotal;

      keranjangHTML += `
        <li>
          ${item.nama} (x${item.jumlah}) - Rp${subtotal.toLocaleString()}
          <button onclick="removeFromCart('${item.nama}')">Hapus</button>
        </li>`;
    });

    keranjangHTML += "</ul>";
    keranjangHTML += `<p><strong>Total: Rp${total.toLocaleString()}</strong></p>`;
    keranjangDiv.innerHTML = keranjangHTML;
  }
}


