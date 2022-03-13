import { Waffe, Zauber } from "./Gegenstand"

abstract class Held {
    name: string
    waffen: Waffe[] = [null, null]
    schluessel: boolean = false
    zauber: Zauber[] = [null, null, null]

    constructor (name: string) {
        this.name = name
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
