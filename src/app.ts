interface Persoon {
    voornaam: string;
    achternaam: string;
    adres: string;
}   

abstract class Medewerker implements Persoon {
    voornaam: string;
    achternaam: string;
    adres: string;

    constructor(voornaam: string, achternaam: string, adres: string) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.adres = adres;
    }

    abstract toonInfo(): string;
}

class Vrouw extends Medewerker {

    zwanger: boolean

    constructor(zwanger: boolean,voornaam: string, achternaam: string, adres: string) {
        super(voornaam, achternaam, adres);        
        this.zwanger = zwanger;
        
    }

    toonInfo(): string {
        return this.voornaam + ' ' + this.achternaam + ' ' + this.adres;
    }
    
    isZwanger() {
        if(this.zwanger == true){
            return this.zwanger == true;
        } else {
            return this.zwanger == false;
        }
    }


}

class Man extends Medewerker {


    toonInfo(): string {
        return this.voornaam + ' ' + this.achternaam + ' ' + this.adres;
    }
    
}

var jantje = new Man('Ahmed', 'Jantje', 'Lol 32');
var vrouwtje = new Vrouw(true, 'Achie', 'Ergens 32', 'Lientje');

