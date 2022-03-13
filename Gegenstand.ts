export abstract class Gegenstand {
    name: string

    constructor (name: string) {
        this.name = name
    }
}

export enum Waffentyp {
    Dolche,
    Schwert,
    Axt
}

export class Waffe extends Gegenstand {
    typ: Waffentyp
    stärke: number

    constructor (typ: Waffentyp) {
        switch (typ) {
            case Waffentyp.Dolche: {
                super('Dolche')
                this.stärke = 1
                break
            }
            case Waffentyp.Schwert: {
                super('Schwer')
                this.stärke = 2
                break
            }
            case Waffentyp.Axt: {
                super('Axt')
                this.stärke = 3
                break
            }
            default: {
                super('Unbekannt')
            }
        }
        this.typ = typ
    }
}

export class Schlüssel extends Gegenstand {
    constructor () {
        super('Schlüssel')
    }
}

export enum Zaubertyp {
    Heilzauber,
    Flammenzauber
}

export class Zauber extends Gegenstand {
    typ: Zaubertyp

    constructor (typ: Zaubertyp) {
        switch (typ) {
            case Zaubertyp.Flammenzauber: {
                super('Flammenzauber')
                break
            }
            case Zaubertyp.Heilzauber: {
                super('Heilzauber')
                break
            }
            default:
                super('Unbekannt')
                break
        }
        this.typ = typ
    }
}

export class Schatztruhe extends Gegenstand {
    wert: number

    constructor (drachenschatz: boolean = false) {
        if (drachenschatz) {
            super('Drachenschatz')
            this.wert = 1.5
        } else {
            super('Schatztruhe')
            this.wert = 1
        }
    }
}