var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Hewan(nama) {
    if (this.constructor === Hewan) {
        throw new Error('Kelas ini adalah kelas abstrak dan tidak dapat diinstansiasi.');
    }
    this.nama = nama;
}
Hewan.prototype.makan = function () {
    throw new Error('Metode makan harus diimplementasikan.');
};
// Implementasi Kelas Abstrak pada Kelas HewanTurunan
var HewanTurunan = /** @class */ (function (_super) {
    __extends(HewanTurunan, _super);
    function HewanTurunan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HewanTurunan.prototype.makan = function () {
        console.log("".concat(this.nama, " sedang makan."));
    };
    return HewanTurunan;
}(Hewan));
// Membuat objek dari kelas HewanTurunan
var singa = new HewanTurunan('Singa');
singa.makan(); // Output: Singa sedang makan.
