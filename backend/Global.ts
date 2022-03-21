import { Monster, Typ as Monstertyp } from "./Monster"
import { Ausstattung, Raumkarte, Typ as Raumtyp } from "./Spielfeld"

export class Global {
    raumpool: Raumkarte[]
    monsterpool: Monster[]

    static shufflePool<Type>(tmppool: Type[]): Type[] {
        const pool: Type[] = []
        while (tmppool.length) {
            pool.push(
                tmppool.splice(
                    Math.floor(Math.random() * (tmppool.length - 1)),
                    1
                )[0]
            )
        }
        return pool
    }

    constructor() {
        this.monsterpool = Global.shufflePool<Monster>([
            new Monster(Monstertyp.Drache),
            ...Array(2).fill(new Monster(Monstertyp.Seelenräuber)),
            ...Array(3).fill(new Monster(Monstertyp.SkelettKönig)),
            ...Array(5).fill(new Monster(Monstertyp.SkelettKrieger)),
            ...Array(12).fill(new Monster(Monstertyp.SkelettWärter)),
            ...Array(4).fill(new Monster(Monstertyp.Riesenspinne)),
            ...Array(8).fill(new Monster(Monstertyp.Mumie)),
            ...Array(8).fill(new Monster(Monstertyp.Ratte)),
        ])

        this.raumpool = Global.shufflePool<Raumkarte>([
            ...Array(4).fill(new Raumkarte(Raumtyp.Ecke, false)),
            ...Array(4).fill(new Raumkarte(Raumtyp.Gang, false)),
            ...Array(5).fill(new Raumkarte(Raumtyp.TStück, false)),
            ...Array(7).fill(new Raumkarte(Raumtyp.Kreuzung, false)),
            ...Array(9).fill(new Raumkarte(Raumtyp.Ecke, Ausstattung.Raum)),
            ...Array(17).fill(new Raumkarte(Raumtyp.Gang, Ausstattung.Raum)),
            ...Array(13).fill(new Raumkarte(Raumtyp.TStück, Ausstattung.Raum)),
            ...Array(14).fill(new Raumkarte(Raumtyp.Kreuzung, Ausstattung.Raum)),
            ...Array(2).fill(new Raumkarte(Raumtyp.Ecke, Ausstattung.Heilquelle)),
            ...Array(4).fill(new Raumkarte(Raumtyp.Gang, Ausstattung.Portal))
        ])
    }
}