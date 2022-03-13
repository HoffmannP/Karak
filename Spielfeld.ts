import { Gegenstand } from "./Gegenstand"
import { Monster } from "./Monster"

export enum Typ {
    Gang,
    Ecke,
    TStück,
    Kreuzung
}

export enum Richtung {
    Norden,
    Osten,
    Süden,
    Westen
}

export enum Ausstattung {
    Heilquelle,
    Portal
}

export class Spielfeld {
    norden: (null | false | Spielfeld)
    osten: (null | false | Spielfeld)
    süden: (null | false | Spielfeld)
    westen: (null | false | Spielfeld)
    inhalt: (false | Ausstattung | Monster | Gegenstand )

    constructor (typ: Typ, richtung: Richtung, inhalt: (false | Ausstattung | Monster | Gegenstand )) {
        switch (typ) {
            case Typ.Gang: {
                if ([Richtung.Norden, Richtung.Süden].includes(richtung)) {
                    this.norden = null
                    this.osten = false
                    this.süden = null
                    this.westen = false
                } else {
                    this.norden = false
                    this.osten = null
                    this.süden = false
                    this.westen = null
                }
                break
            }
            case Typ.Ecke: {
                switch (richtung) {
                    case Richtung.Norden: {
                        this.norden = null
                        this.osten = null
                        this.süden = false
                        this.westen = false
                        break
                    }
                    case Richtung.Osten: {
                        this.norden = false
                        this.osten = null
                        this.süden = null
                        this.westen = false
                        break
                    }
                    case Richtung.Süden: {
                        this.norden = false
                        this.osten = false
                        this.süden = null
                        this.westen = null
                        break
                    }
                    case Richtung.Westen: {
                        this.norden = null
                        this.osten = false
                        this.süden = false
                        this.westen = null
                        break
                    }
                }
                break
            }
            case Typ.TStück: {
                switch (richtung) {
                    case Richtung.Norden: {
                        this.norden = false
                        this.osten = null
                        this.süden = null
                        this.westen = null
                        break
                    }
                    case Richtung.Osten: {
                        this.norden = null
                        this.osten = false
                        this.süden = null
                        this.westen = null
                        break
                    }
                    case Richtung.Süden: {
                        this.norden = null
                        this.osten = null
                        this.süden = false
                        this.westen = null
                        break
                    }
                    case Richtung.Westen: {
                        this.norden = null
                        this.osten = null
                        this.süden = null
                        this.westen = false
                        break
                    }
                }
                break
            }
            case Typ.Kreuzung: {
                this.norden = null
                this.osten = null
                this.süden = null
                this.westen = null
                break
            }
        }
        this.inhalt = inhalt
    }

    connect(richtung: Richtung, nachbar: Spielfeld) {
        switch(richtung) {
            case Richtung.Norden: {
                this.norden = nachbar
                break
            }
            case Richtung.Osten: {
                this.osten = nachbar
                break
            }
            case Richtung.Süden: {
                this.süden = nachbar
                break
            }
            case Richtung.Westen: {
                this.westen = nachbar
                break
            }
        }
    }

    monster_besiegt() {
        this.inhalt = Monster.loot
    }

    gegenstand_aufgenommen() {
        this.inhalt = false
    }

    gegenstand_abgelegt(gegenstand: Gegenstand) {
        this.inhalt = gegenstand
    }
}