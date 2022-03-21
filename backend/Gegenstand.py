from enum import Enum

class Gegenstand:
    name: str

    def __init__(self, name: str) -> None:
        self.name = name

class Waffentyp(Enum):
    Dolche = 1
    Schwert = 2
    Axt = 3

class Waffe(Gegenstand):
    typ: Waffentyp
    stärke: float

    def __init__(self, typ: Waffentyp):
        super().__init__({
            Waffentyp.Dolche: 'Dolch',
            Waffentyp.Schwert: 'Schwert',
            Waffentyp.Axt: 'Axt'}[typ])
        self.stärke = {
            Waffentyp.Dolche: 1,
            Waffentyp.Schwert: 2,
            Waffentyp.Axt: 3}[typ]
        self.typ = typ

class Schlüssel(Gegenstand):
    def __init__(self):
        super().__init__('Schlüssel')


class Zaubertyp(Enum):
    Heilzauber = 1
    Flammenzauber = 2

class Zauber(Gegenstand):
    typ: Zaubertyp

    def __init__(self, typ: Zaubertyp):
        super().__init__({
            Zaubertyp.Heilzauber: 'Heilzauber',
            Zaubertyp.Flammenzauber: 'Flammenzauber'}[typ])
        self.stärke = {
            Zaubertyp.Heilzauber: 1,
            Zaubertyp.Flammenzauber: 2}[typ]
        self.typ = typ

class Schatztruhe(Gegenstand):
    wert: float

    def __init__(self, drachenschatz: bool = False):
        if (drachenschatz):
            super().__init__('Drachenschatz')
            self.wert = 1.5
        else:
            super().__init__('Schatztruhe')
            self.wert = 1
