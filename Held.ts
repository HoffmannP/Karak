import { Schatztruhe, Waffe, Zauber } from "./Gegenstand"

abstract class Held {
    name: string
    waffen: [(null | Waffe), (null | Waffe)] = [null, null]
    schluessel: boolean = false
    zauber: [(null | Zauber), (null | Zauber), (null | Zauber)] = [null, null, null]
    schritte: number
    herzen: number
    verflucht: boolean
    schatztruhen: Schatztruhe[] = []

    constructor (name: string) {
        this.name = name
        this.herzen = 5
        this.verflucht = false

    }
}

export class Argentus extends Held {
    constructor() {
        super('Argentus')
    }
}

export class Horan extends Held {
    constructor() {
        super('Horan')
    }
}

export class LordXanros extends Held {
    constructor() {
        super('Lord Xanros')
    }
}

export class Aderdyn extends Held {
    constructor() {
        super('Aderdyn')
    }
}

export class Taia extends Held {
    constructor() {
        super('Taia')
    }
}

export class Victorius extends Held {
    constructor() {
        super('Victorius')
    }
}
