export export enum Typ {
    Waffe,
    Schlüssel,
    Spruch
}

export abstract class Gegenstand {
}

export export enum Waffentyp {
    Dolche,
    Schwert,
    Axt
}

export class Waffe extends Gegenstand {
    typ: Waffentyp
    stärke: number

    constructor (typ: Waffentyp) {
        super()
        switch (typ) {
            case Waffentyp.Dolche: {
                this.stärke = 1
                break
            }
            case Waffentyp.Schwert: {
                this.stärke = 2
                break
            }
            case Waffentyp.Axt: {
                this.stärke = 3
                break
            }
        }
    }
}

export class Schlüssel extends Gegenstand {
}

export enum Spruchtyp {
    Heilungquelle,
    Feuerschwert
}

export class Spruch extends Gegenstand {
    typ: Spruchtyp

    constructor (typ: Spruchtyp) {
        super()
        this.typ = typ
    }
}