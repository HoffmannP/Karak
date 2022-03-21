import typing
from Gamephase import Gamephase
from World import World
from Held import Held, Typ as Heldentyp

class Init(Gamephase):
    world: World
    free_herotypes: typing.Set[Heldentyp] = {
        Heldentyp.Argentus,
        Heldentyp.Horan,
        Heldentyp.LordXanros,
        Heldentyp.Aderdyn,
        Heldentyp.Taia,
        Heldentyp.Victorius}

    def __init__(self, messager, world: World):
        super(messager.send, messager.receive)
        self.world = world
        self.setState('herotypes', self.free_herotypes)
        self.registerEvent('selectHero', { 'name': str, 'hero': 'herotypes' }, self.selectHero)
        self.registerEvent('startGame', {}, self.startGame)

    def selectHero(self, name: str, hero: Heldentyp):
        self.world.add_player(name, Held.new(hero))
        self.free_herotypes.remove(hero)
        self.setState('herotypes', self.free_herotypes)

    def startGame(self):
        if self.world.players < 2:
            return
        self.end()


class Main(Gamephase):
    world: World

    def __init__(self, messager, world: World):
        super(messager.send, messager.receive)
        self.world = world
        self.setState('gamestate', 'running')
