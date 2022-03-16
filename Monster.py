from enum import Enum
from Gegenstand import Gegenstand, Schatztruhe, Schlüssel, Waffe, Waffentyp, Zauber, Zaubertyp

class Typ(Enum):
    Drache = 1
    Seelenräuber = 2
    SkelettKönig = 3
    SkelettKrieger = 4
    SkelettWärter = 5
    Riesenspinne = 6
    Mumie = 7
    Ratte = 8

class Monster:
    name: str
    stärke: int
    loot: Gegenstand

    def __init__(self, typ: Typ) -> None:
        if typ == Typ.Ratte:
            self.name = 'Ratte'
            self.stärke = 5
            self.loot = Waffe(Waffentyp.Dolche)
        elif type == Typ.Mumie:
            self.name = 'Mumie'
            self.stärke = 15
            self.loot = Zauber(Zaubertyp.Flammenzauber)
        elif type == Typ.Riesenspinne:
            self.name = 'Riesenspinne'
            self.stärke = 15
            self.loot = Zauber(Zaubertyp.Heilzauber)
        elif type == Typ.SkelettWärter:
            self.name = 'Skelett-Wärter'
            self.stärke = 8
            self.loot = Schlüssel()
        elif type == Typ.SkelettKrieger:
            self.name = 'Skelett-Krieger'
            self.stärke = 9
            self.loot = Waffe(Waffentyp.Schwert)
        elif type == Typ.SkelettKönig:
            self.name = 'Skelett-König'
            self.stärke = 10
            self.loot = Waffe(Waffentyp.Axt)
        elif type == Typ.Seelenräuber:
            self.name = 'Seelenräuber'
            self.stärke = 12
            self.loot = Schatztruhe()
        elif type == Typ.Drache:
            self.name = 'Drache'
            self.stärke = 15
            self.loot = Schatztruhe(True)
