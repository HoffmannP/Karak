import { Gegenstand } from "./Gegenstand"
import { Monster } from "./Monster"

export enum Typ {
    Gang,
    Ecke,
    TStück,
    Kreuzung
}

export enum Orientierung {
    Norden,
    Osten,
    Süden,
    Westen
}

export enum Ausstattung {
    Heilquelle,
    Portal,
    Raum
}

export class Raumkarte {
    typ: Typ
    ausstattung: (false | Ausstattung)

    constructor(typ: Typ, ausstattung: (false | Ausstattung)) {
        this.typ = typ
        this.ausstattung = ausstattung
    }
}

type Raum = {
    norden: boolean,
    osten: boolean,
    süden: boolean,
    westen: boolean,
    inhalt: (false | Ausstattung | Monster | Gegenstand )
}
export class Spielfeld {
    feld: { [position: string]: Raum } = {}


    public setFeld(x: number, y: number, raum:  Raum) {
        this.feld[`${x}|${y}`] = raum
    }

    public getFeld(x: number, y: number): Raum {
        return this.feld[`${x}|${y}`]
    }

    lege_karte(x: number, y: number, raumkarte: Raumkarte, orientierung: Orientierung) {
        const raum = {
            norden: true,
            osten: true,
            süden: true,
            westen: true,
            inhalt: raumkarte.ausstattung
        }
        switch (raumkarte.typ) {
            case Typ.Gang: {
                if ([Orientierung.Norden, Orientierung.Süden].includes(orientierung)) {
                    raum.osten = false
                    raum.westen = false
                } else {
                    raum.norden = false
                    raum.süden = false
                }
                break
            }
            case Typ.Ecke: {
                switch (orientierung) {
                    case Orientierung.Norden: {
                        raum.süden = false
                        raum.westen = false
                        break
                    }
                    case Orientierung.Osten: {
                        raum.westen = false
                        raum.norden = false
                        break
                    }
                    case Orientierung.Süden: {
                        raum.norden = false
                        raum.osten = false
                        break
                    }
                    case Orientierung.Westen: {
                        raum.osten = false
                        raum.süden = false
                        break
                    }
                }
                break
            }
            case Typ.TStück: {
                switch (orientierung) {
                    case Orientierung.Norden: {
                        raum.westen = false
                        break
                    }
                    case Orientierung.Osten: {
                        raum.norden = false
                        break
                    }
                    case Orientierung.Süden: {
                        raum.osten = false
                        break
                    }
                    case Orientierung.Westen: {
                        raum.süden = false
                        break
                    }
                }
                break
            }
        }
        this.setFeld(x, y, raum)
    }

    raum_ziehe_inhalt(x: number, y: number, monster: Monster) {
        this.getFeld(x, y).inhalt = monster
    }
    monster_besiegt(x: number, y: number) {
        this.getFeld(x, y).inhalt = (this.getFeld(x, y).inhalt as Monster).loot
    }

    gegenstand_aufgenommen(x: number, y: number) {
        this.getFeld(x, y).inhalt = false
    }

    gegenstand_abgelegt(x: number, y: number, gegenstand: Gegenstand) {
        this.getFeld(x, y).inhalt = gegenstand
    }
}