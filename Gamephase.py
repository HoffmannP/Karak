import typing

class Gamephase:
    state: typing.Dict[str, typing.Any] = {}
    events: typing.Dict[str, typing.Tuple[typing.Any, typing.Callable[..., None]]] = {}
    sender: typing.Callable[[str, typing.Any], None]
    receive: typing.Iterable[typing.Tuple[str, typing.Any]]
    done = False

    def __init__(self, send: typing.Callable[[str, typing.Any], None], receive: typing.Iterable[typing.Tuple[str, typing.Any]]):
        self.send = send
        self.receive = receive

    def setState(self, name: str, state: typing.Any) -> None:
        self.state[name] = state
        self.publishState(name)

    def publishState(self, name: str) -> None:
        self.send('state[\'{name}\']', self.state[name])

    def registerEvent(self, name: str, parameter: typing.Dict[str, typing.Any], func: typing.Callable) -> None:
        self.events[name] = (parameter, func)
        self.publishEvents()

    def deleteEvent(self, name: str) -> None:
        del self.events[name]
        self.publishEvents()

    def publishEvents(self) -> None:
        self.send('events', self.events)

    def end(self) -> None:
        self.done = True

    def run(self) -> None:
        for message_type, message in self.receive:
            if message_type == 'end':
                self.end()
            if message_type in self.events:
                self.events[message_type][1](**message)
            if self.done:
                break
