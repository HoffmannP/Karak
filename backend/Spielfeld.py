import typing
from enum import Enum
from Gegenstand import Gegenstand
from Monster import Monster

Position = typing.Tuple[int, int]


class Typ(Enum):
    Gang = 1
    Ecke = 2
    TStück = 3
    Kreuzung = 4

class Orientierung(Enum):
    Norden = 1
    Osten = 2
    Süden = 3
    Westen = 4

class Ausstattung(Enum):
    Heilquelle = 1
    Portal = 2
    Raum = 3

class Raumkarte:
    typ: Typ
    ausstattung: typing.Optional[Ausstattung]

    def __init__(self, typ: Typ, ausstattung: typing.Optional[Ausstattung]):
        self.typ = typ
        self.ausstattung = ausstattung

class Raum(typing.TypedDict):
    norden: bool
    osten: bool
    süden: bool
    westen: bool
    inhalt: typing.Optional[typing.Union[Ausstattung, Monster, Gegenstand]]

class Spielfeld:
    feld: typing.Dict[Position, Raum] = {}

    def __getitem__(self, key: Position) -> typing.Union[Raum, None]:
        return self.feld.get(key, None)

    def __setitem__(self, key: Position, raum: Raum):
        self.feld[key] = raum

    def lege_karte(self, pos: Position, raumkarte: Raumkarte, orientierung: Orientierung) -> None:
        raum: Raum = {
            'norden': True,
            'osten': True,
            'süden': True,
            'westen': True,
            'inhalt': raumkarte.ausstattung}

        if raumkarte.typ == Typ.Gang:
            if orientierung in [Orientierung.Norden, Orientierung.Süden]:
                raum['osten'] = False
                raum['westen'] = False
            else:
                raum['norden'] = False
                raum['süden'] = False
        elif raumkarte.typ == Typ.Ecke:
            if orientierung == Orientierung.Norden:
                raum['süden'] = False
                raum['westen'] = False
            elif orientierung == Orientierung.Osten:
                raum['westen'] = False
                raum['norden'] = False
            elif orientierung == Orientierung.Süden:
                raum['norden'] = False
                raum['osten'] = False
            else:
                raum['osten'] = False
                raum['süden'] = False
        elif raumkarte.typ == Typ.TStück:
            if orientierung == Orientierung.Norden:
                raum['westen'] = False
            elif orientierung == Orientierung.Osten:
                raum['norden'] = False
            elif orientierung == Orientierung.Süden:
                raum['osten'] = False
            else:
                raum['süden'] = False
        self.feld[pos] = raum

    def raum_ziehe_inhalt(self, pos: Position, monster: Monster) -> None:
        self.feld[pos]['inhalt'] = monster

    def monster_besiegt(self, pos: Position) -> None:
        self.feld[pos]['inhalt'] = typing.cast(Monster, self.feld[pos]['inhalt']).loot

    def gegenstand_aufgenommen(self, pos: Position) -> None:
        self.feld[pos]['inhalt'] = None

    def gegenstand_abgelegt(self, pos: Position, gegenstand: Gegenstand):
        self.feld[pos]['inhalt'] = gegenstand
