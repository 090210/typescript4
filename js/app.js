var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Medewerker = /** @class */ (function () {
    function Medewerker(voornaam, achternaam, adres) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.adres = adres;
    }
    return Medewerker;
}());
var Vrouw = /** @class */ (function (_super) {
    __extends(Vrouw, _super);
    function Vrouw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vrouw.prototype.toonInfo = function () {
        return this.voornaam + ' ' + this.achternaam + ' ' + this.adres;
    };
    Vrouw.prototype.isZwanger = function () {
        if (this.zwanger == true) {
            return this.zwanger == true;
        }
        else {
            return this.zwanger == false;
        }
    };
    return Vrouw;
}(Medewerker));
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Man.prototype.toonInfo = function () {
        return this.voornaam + ' ' + this.achternaam + ' ' + this.adres;
    };
    return Man;
}(Medewerker));
var jantje = new Man('Ahmed', 'Jantje', 'Lol 32');
var vrouwtje = new Vrouw('Lientje', 'Achie', 'Ergens 32', true);
