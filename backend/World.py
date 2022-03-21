import typing
import random
from Monster import Monster, Typ as Monstertyp
from Spielfeld import Ausstattung, Raumkarte, Typ as Raumtyp
from Held import Held, Typ as Heldentyp

class World:
    raumpool: typing.List[Raumkarte]
    monsterpool: typing.List[Monster]
    players: typing.Dict[str, Held]

    def __init__(self):
        self.monsterpool = [
            Monster(Monstertyp.Drache),
            *[Monster(Monstertyp.Seelenräuber) for _ in range(2)],
            *[Monster(Monstertyp.SkelettKönig) for _ in range(2)],
            *[Monster(Monstertyp.SkelettKrieger) for _ in range(5)],
            *[Monster(Monstertyp.SkelettWärter) for _ in range(12)],
            *[Monster(Monstertyp.Riesenspinne) for _ in range(4)],
            *[Monster(Monstertyp.Mumie) for _ in range(8)],
            *[Monster(Monstertyp.Ratte) for _ in range(8)]]
        random.shuffle(self.monsterpool)

        self.raumpool = [
            *[Raumkarte(Raumtyp.Ecke, False) for _ in range(4)],
            *[Raumkarte(Raumtyp.Gang, False) for _ in range(4)],
            *[Raumkarte(Raumtyp.TStück, False) for _ in range(5)],
            *[Raumkarte(Raumtyp.Kreuzung, False) for _ in range(7)],
            *[Raumkarte(Raumtyp.Ecke, Ausstattung.Raum) for _ in range(9)],
            *[Raumkarte(Raumtyp.Gang, Ausstattung.Raum) for _ in range(17)],
            *[Raumkarte(Raumtyp.TStück, Ausstattung.Raum) for _ in range(13)],
            *[Raumkarte(Raumtyp.Kreuzung, Ausstattung.Raum) for _ in range(14)],
            *[Raumkarte(Raumtyp.Ecke, Ausstattung.Heilquelle) for _ in range(2)],
            *[Raumkarte(Raumtyp.Gang, Ausstattung.Portal) for _ in range(4)]]
        random.shuffle(self.monsterpool)

    def add_player(self, name: str, held: Held):
        self.players[name] = held
