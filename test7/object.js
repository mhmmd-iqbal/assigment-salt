var Makanan = /** @class */ (function () {
    function Makanan() {
    }
    Makanan.prototype.makan = function () {
        return;
    };
    Makanan.prototype.tidur = function () {
        return;
    };
    return Makanan;
}());
;
// Implementasi Antarmuka pada Kelas
var Hewan = /** @class */ (function () {
    function Hewan() {
    }
    Hewan.prototype.makan = function () {
        console.log('Hewan sedang makan.');
    };
    Hewan.prototype.tidur = function () {
        console.log('Hewan sedang tidur.');
    };
    return Hewan;
}());
// Membuat objek dari kelas Hewan
var kucing = new Hewan();
kucing.makan(); // Output: Hewan sedang makan.
kucing.tidur(); // Output: Hewan sedang tidur.
