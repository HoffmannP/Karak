import typing
from World import World
from Held import Held, Typ as Heldentyp

class Gamephase:
    state: typing.Dict[str, typing.Any] = {}
    events: typing.Dict[str, typing.Tuple[typing.Any, typing.Callable[..., None]]] = {}
    sender: typing.Callable[[str, typing.Any], None]
    receive: typing.AsyncGenerator[typing.Tuple[str, typing.Any], None]
    done = False

    def __init__(self, send: typing.Callable[[str, typing.Any], None], receive: typing.AsyncGenerator[typing.Any, None]):
        self.send = send
        self.receive = receive

    def setState(self, name: str, state: typing.Any):
        self.state[name] = state
        self.publishState(name)

    def publishState(self, name: str):
        self.send('state[\'{name}\']', self.state[name])

    def registerEvent(self, name: str, parameter: typing.Dict[str, typing.Any], func: typing.Callable):
        self.events[name] = (parameter, func)
        self.publishEvents()

    def deleteEvent(self, name: str):
        del self.events[name]
        self.publishEvents()

    def publishEvents(self):
        self.send('events', self.events)

    def end(self):
        self.done = True

    def run(self):
        for message_type, message in self.receive():
            if message_type == 'end':
                self.end()
            if message_type in self.events:
                self.events[message_type][1](**message)
            if self.done:
                return


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
    pass
