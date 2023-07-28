class Makanan {
    makan() {
        return ;
    }
    tidur() {
        return ;
    }
};

// Implementasi Antarmuka pada Kelas
class Hewan implements Makanan {
    makan() {
        console.log('Hewan sedang makan.');
    }

    tidur() {
        console.log('Hewan sedang tidur.');
    }
}

// Membuat objek dari kelas Hewan
const kucing = new Hewan();
kucing.makan(); // Output: Hewan sedang makan.
kucing.tidur(); // Output: Hewan sedang tidur.
