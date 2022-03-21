import { Gegenstand, Schatztruhe, Schlüssel, Waffe, Waffentyp, Zauber, Zaubertyp } from "./Gegenstand"

export enum Typ {
    Drache,
    Seelenräuber,
    SkelettKönig,
    SkelettKrieger,
    SkelettWärter,
    Riesenspinne,
    Mumie,
    Ratte
}
export class Monster {
    name: string
    stärke: number
    loot: Gegenstand

    constructor(typ: Typ) {
        switch (typ) {
            case Typ.Ratte: {
                this.name = 'Ratte'
                this.stärke = 5
                this.loot = new Waffe(Waffentyp.Dolche)
            }
            case Typ.Mumie: {
                this.name = 'Mumie'
                this.stärke = 15
                this.loot = new Zauber(Zaubertyp.Flammenzauber)
            }
            case Typ.Riesenspinne: {
                this.name = 'Riesenspinne'
                this.stärke = 15
                this.loot = new Zauber(Zaubertyp.Heilzauber)
            }
            case Typ.SkelettWärter: {
                this.name = 'Skelett-Wärter'
                this.stärke = 8
                this.loot = new Schlüssel()
            }
            case Typ.SkelettKrieger: {
                this.name = 'Skelett-Krieger'
                this.stärke = 9
                this.loot = new Waffe(Waffentyp.Schwert)
            }
            case Typ.SkelettKönig: {
                this.name = 'Skelett-König'
                this.stärke = 10
                this.loot = new Waffe(Waffentyp.Axt)
            }
            case Typ.Seelenräuber: {
                this.name = 'Seelenräuber'
                this.stärke = 12
                this.loot = new Schatztruhe()
            }
            case Typ.Drache: {
                this.name = 'Drache'
                this.stärke = 15
                this.loot = new Schatztruhe(true)
            }
        }
    }
}