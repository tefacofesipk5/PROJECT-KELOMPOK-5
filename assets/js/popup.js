let currentOpen = null;

function openPopup(id) {
  // Jika ada popup lain yang masih terbuka, blokir
  if (currentOpen && currentOpen !== id) {
    alert("Tutup popup yang sedang terbuka dulu sebelum membuka produk lain.");
    return;
  }

  document.getElementById(id).style.display = "flex";
  currentOpen = id;
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
  currentOpen = null;
}