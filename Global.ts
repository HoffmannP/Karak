import { Monster, Typ as Monstertyp } from "./Monster"
import { Ausstattung, Typ as Raumtyp } from "./Spielfeld"

export class Global {
    monsterpool: Monster[]
    raumpool: Raumtyp[]

    constructor() {
        const tmpMonsterpool: Monster[] = [
            new Monster(Monstertyp.Drache),
            ...Array(2).fill(new Monster(Monstertyp.Seelenräuber)),
            ...Array(3).fill(new Monster(Monstertyp.SkelettKönig)),
            ...Array(5).fill(new Monster(Monstertyp.SkelettKrieger)),
            ...Array(12).fill(new Monster(Monstertyp.SkelettWärter)),
            ...Array(4).fill(new Monster(Monstertyp.Riesenspinne)),
            ...Array(8).fill(new Monster(Monstertyp.Mumie)),
            ...Array(8).fill(new Monster(Monstertyp.Ratte)),
        ]
        while (tmpMonsterpool.length) {
            this.monsterpool.push(
                tmpMonsterpool.splice(
                    Math.floor(Math.random() * (tmpMonsterpool.length - 1)),
                    1
                )[0]
            )
        }

        const tmpRaumpool: Raumtyp[] = [
            ...Array(?).fill(new Raumkarte(Raumtyp.Ecke, false)),
            ...Array(?).fill(new Raumkarte(Raumtyp.Gang, false)),
            ...Array(?).fill(new Raumkarte(Raumtyp.TStück, false)),
            ...Array(?).fill(new Raumkarte(Raumtyp.Kreuzung, false)),
            ...Array(?).fill(new Raumkarte(Raumtyp.Ecke, Ausstattung.Raum)),
            ...Array(?).fill(new Raumkarte(Raumtyp.Gang, Ausstattung.Raum)),
            ...Array(?).fill(new Raumkarte(Raumtyp.TStück, Ausstattung.Raum)),
            ...Array(?).fill(new Raumkarte(Raumtyp.Kreuzung, Ausstattung.Raum)),
            new Raumkarte(?, Ausstattung.Heilquelle),
            new Raumkarte(?, Ausstattung.Heilquelle),
            ...Array(4).fill(new Raumkarte(?, Ausstattung.Portal))
        ]
    }
}