class Piece:
    pass

class Corner(Piece):
    # defined from the perspective of the top right piece on a front facing cube
    def __init__(self, front, top, right):
        self.data = collections.deque([front, top, right])

class Cube:
    def __init__(self):
        self.cube = []