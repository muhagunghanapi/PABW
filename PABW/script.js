// Ambil elemen modal
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");

// Tutup modal
closeModal.onclick = () => modal.classList.add("hidden");
window.onclick = (e) => { if (e.target === modal) modal.classList.add("hidden"); };

// Klik kategori
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    let content = "";

    if (category === "perawatan") {
      content = `
        <h3>Jasa Perawatan Mesin</h3>
        <p>Berikut beberapa mitra terbaik kami:</p>
        <ul>
          <li>CV. Pilar Teknik Perkasa</li>
          <li>CV. Mekar Mandiri</li>
          <li>CV. Sinar Teknindo</li>
        </ul>`;
    } else if (category === "kalibrasi") {
      content = `
        <h3>Jasa Kalibrasi Alat</h3>
        <p>Penyedia jasa terpercaya:</p>
        <ul>
          <li>CV. Kreatif Citra Indonesia</li>
          <li>PT. Akurasi Prima</li>
          <li>CV. Kalibrasi Nusantara</li>
        </ul>`;
    } else if (category === "limbah") {
      content = `
        <h3>Jasa Pengelolaan Limbah</h3>
        <p>Partner andalan kami:</p>
        <ul>
          <li>CV. Sinergi Mitra Utama</li>
          <li>PT. GreenCycle</li>
          <li>CV. Eco Mandiri</li>
        </ul>`;
    }

    modalBody.innerHTML = content;
    modal.classList.remove("hidden");
  });
});

// Klik penyedia
document.querySelectorAll(".penyedia-card").forEach(card => {
  card.addEventListener("click", () => {
    const mitra = card.dataset.mitra;
    let content = "";

    if (mitra === "pilar") {
      content = `
        <h3>CV. Pilar Teknik Perkasa</h3>
        <p>Melayani perawatan dan perbaikan mesin industri garmen. Dikenal dengan ketepatan waktu dan hasil presisi tinggi.</p>
        <p><strong>Kontak:</strong> (0266) 123-456 | pilar@industrialpro.co.id</p>`;
    } else if (mitra === "kreatif") {
      content = `
        <h3>CV. Kreatif Citra Indonesia</h3>
        <p>Spesialis dalam kalibrasi alat industri dan maintenance sistem kontrol otomatis.</p>
        <p><strong>Kontak:</strong> (0266) 987-654 | kreatif@industrialpro.co.id</p>`;
    } else if (mitra === "sinergi") {
      content = `
        <h3>CV. Sinergi Mitra Utama</h3>
        <p>Penyedia solusi limbah industri berkelanjutan dengan sertifikasi lingkungan ISO 14001.</p>
        <p><strong>Kontak:</strong> (0266) 555-777 | sinergi@industrialpro.co.id</p>`;
    }

    modalBody.innerHTML = content;
    modal.classList.remove("hidden");
  });
});

// Klik Login / Signup
document.getElementById("btn-login").addEventListener("click", () => {
  modalBody.innerHTML = `
    <h3>Login Akun</h3>
    <form class="form-auth">
      <label>Email:</label>
      <input type="email" required>
      <label>Password:</label>
      <input type="password" required>
      <button type="submit">Masuk</button>
    </form>`;
  modal.classList.remove("hidden");
});

document.getElementById("btn-signup").addEventListener("click", () => {
  modalBody.innerHTML = `
    <h3>Daftar Akun Baru</h3>
    <form class="form-auth">
      <label>Nama:</label>
      <input type="text" required>
      <label>Email:</label>
      <input type="email" required>
      <label>Password:</label>
      <input type="password" required>
      <button type="submit">Daftar</button>
    </form>`;
  modal.classList.remove("hidden");
});
