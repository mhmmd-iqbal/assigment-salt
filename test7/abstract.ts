function Hewan(nama) {
    if (this.constructor === Hewan) {
        throw new Error('Kelas ini adalah kelas abstrak dan tidak dapat diinstansiasi.');
    }

    this.nama = nama;
}

Hewan.prototype.makan = function() {
    throw new Error('Metode makan harus diimplementasikan.');
};

// Implementasi Kelas Abstrak pada Kelas HewanTurunan
class HewanTurunan extends Hewan {
    makan() {
        console.log(`${this.nama} sedang makan.`);
    }
}

// Membuat objek dari kelas HewanTurunan
const singa = new HewanTurunan('Singa');
singa.makan(); // Output: Singa sedang makan.
