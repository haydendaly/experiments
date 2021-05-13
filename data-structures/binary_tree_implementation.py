class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class Queue(object):
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        if not self.is_empty():
            return self.items[-1].data

    def __len__(self):
        return len(self.items)

class Stack(object):
    def __init__(self):
        self.items = []

    def __len__(self):
        return self.size()
     
    def size(self):
        return len(self.items)

    def push(self, item):
        self.items.append(item)

    def pop(self):  
        if not self.is_empty():
            return self.items.pop()

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def __str__(self):
        s = ""
        for i in range(len(self.items)):
            s += str(self.items[i].value) + "-"
        return s

class BinaryTree(object):
    def __init__(self, data):
        self.root = Node(data)

    def preorder_traverseal(self):
        result = []
        def _preorder_recurse(root):
            if root:
                result.append(root.data)
                _preorder_recurse(root.left)
                _preorder_recurse(root.right)
        _preorder_recurse(self.root)
        return result

    def inorder_traverseal(self):
        result = []
        def _inorder_recurse(root):
            if root:
                _inorder_recurse(root.left)
                result.append(root.data)
                _inorder_recurse(root.right)
        _inorder_recurse(self.root)
        return result

    def postorder_traverseal(self):
        result = []
        def _postorder_recurse(root):
            if root:
                _postorder_recurse(root.left)
                _postorder_recurse(root.right)
                result.append(root.data)
        _postorder_recurse(self.root)
        return result

    def levelorder_traverseal(self):
        if self.root is None:
            return
        queue = Queue()
        queue.enqueue(self.root)

        result = []
        while len(queue) > 0:
            result.append(queue.peek())
            node = queue.dequeue()

            if node.left:
                queue.enqueue(node.left)
            if node.right:
                queue.enqueue(node.right)

        return result

    def reverse_levelorder_traverseal(self):
        if self.root is None:
            return
        queue = Queue()
        stack = Stack()
        result = []
        queue.enqueue(self.root)

        while len(queue) > 0:
            node = queue.dequeue()
            stack.push(node)

            if node.right:
                queue.enqueue(node.right)
            if node.left:
                queue.enqueue(node.left)

        while len(stack) > 0:
            node = stack.pop()
            result.append(node.data)

        return result

    def height(self):
        def _height_recurse(root):
            if root:
                return 1 + max(_height_recurse(root.left), _height_recurse(root.right))
            else:
                return 0
        return _height_recurse(self.root)

    def __len__(self):
        return len(self.preorder_traverseal())


tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)
tree.root.right.left = Node(6)
tree.root.right.right = Node(7)

print(tree.preorder_traverseal())
print(tree.inorder_traverseal())
print(tree.postorder_traverseal())
print(tree.levelorder_traverseal())
print(tree.reverse_levelorder_traverseal())
print(tree.height())
print(len(tree))

    