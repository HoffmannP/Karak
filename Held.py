import typing
from Gegenstand import Schatztruhe, Waffe, Zauber
from Spielfeld import Position

class Held:
    pos: Position
    name: str
    waffen: typing.Tuple[typing.Optional[Waffe], typing.Optional[Waffe]] = (None, None)
    schluessel: bool = False
    zauber: typing.Tuple[typing.Optional[Zauber], typing.Optional[Zauber], typing.Optional[Zauber]] = (None, None, None)
    schritte: int
    herzen: int
    verflucht: bool
    schatztruhen: typing.List[Schatztruhe] = []

    def __init__(self, name: str):
        self.pos = (0, 0)
        self.name = name
        self.herzen = 5
        self.verflucht = False

class Argentus(Held):
    def __init__(self):
        super().__init__('Argentus')

class Horan(Held):
    def __init__(self):
        super().__init__('Horan')

class LordXanros(Held):
    def __init__(self):
        super().__init__('Lord Xanros')

class Aderdyn(Held):
    def __init__(self):
        super().__init__('Aderdyn')

class Taia(Held):
    def __init__(self):
        super().__init__('Taia')

class Victorius(Held):
    def __init__(self):
        super().__init__('Victorius')
