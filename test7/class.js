// Kelas Manusia
class Manusia {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
}

// Membuat objek dari kelas Manusia
const orang1 = new Manusia('Budi', 25);
console.log(orang1.sapa()); // Output: Halo, nama saya Budi dan saya berumur 25 tahun.
