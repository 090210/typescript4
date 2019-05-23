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

    constructor(voornaam: string, achternaam: string, adres: string, zwanger: boolean) {
        super(voornaam, achternaam, adres);        
        this.zwanger = zwanger;
        
    }

    toonInfo(): string {
        return this.voornaam + ' ' + this.achternaam + ' ' + this.adres + ' ' + this.zwanger;
    }
    
    isZwanger(): string {
        if(this.zwanger == true){
            return 'zwanger';
        } else {
            return 'niet zwanger';
        }
    }

}

class Man extends Medewerker {


    toonInfo(): string {
        return this.voornaam + ' ' + this.achternaam + ' ' + this.adres;
    }
    
}

var jantje = new Man('Ahmed', 'Jantje', 'Lol 32');
var vrouwtje = new Vrouw('Lientje', 'Achie', 'Ergens 32', true);

alert(vrouwtje.isZwanger());
