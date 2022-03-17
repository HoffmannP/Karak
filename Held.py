import typing
from enum import Enum
from Gegenstand import Schatztruhe, Waffe, Zauber
from Spielfeld import Position

class Typ(Enum):
    Argentus = 1
    Horan = 2
    LordXanros = 3
    Aderdyn = 4
    Taia = 5
    Victorius = 6

class Held:
    pos: Position
    name: str
    typ: Typ
    waffen: typing.Tuple[typing.Optional[Waffe], typing.Optional[Waffe]] = (None, None)
    schluessel: bool = False
    zauber: typing.Tuple[typing.Optional[Zauber], typing.Optional[Zauber], typing.Optional[Zauber]] = (None, None, None)
    schritte: int
    herzen: int
    verflucht: bool
    schatztruhen: typing.List[Schatztruhe] = []

    def __init__(self, name: str, typ: Typ):
        self.pos = (0, 0)
        self.name = name
        self.typ = typ
        self.herzen = 5
        self.verflucht = False

    @staticmethod
    def new(typ: Typ):
        return {
            Typ.Argentus: Argentus,
            Typ.Horan: Horan,
            Typ.LordXanros: LordXanros,
            Typ.Aderdyn: Aderdyn,
            Typ.Taia: Taia,
            Typ.Victorius: Victorius}[typ]()

class Argentus(Held):
    def __init__(self):
        super().__init__('Argentus', Typ.Argentus)

class Horan(Held):
    def __init__(self):
        super().__init__('Horan', Typ.Horan)

class LordXanros(Held):
    def __init__(self):
        super().__init__('Lord Xanros', Typ.LordXanros)

class Aderdyn(Held):
    def __init__(self):
        super().__init__('Aderdyn', Typ.Aderdyn)

class Taia(Held):
    def __init__(self):
        super().__init__('Taia', Typ.Taia)

class Victorius(Held):
    def __init__(self):
        super().__init__('Victorius', Typ.Victorius)
