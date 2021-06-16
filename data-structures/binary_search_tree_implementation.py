class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, value):
        return self.insert_helper(self.root, value)

    def insert_helper(self, current, value):
        if current.data < value:
            if current.right:
                self.insert_helper(current.right, value)
            else:
                current.right = Node(value)
        else:
            if current.left:
                self.insert_helper(current.left, value)
            else:
                current.left = Node(value)

    def search(self, target):
        return self.search_helper(self.root, target)

    def search_helper(self, current, target):
        if current:
            if current.data == target:
                return True
            elif current.data < target:
                return self.search_helper(current.right, target)
            else:
                return self.search_helper(current.left, target)

    def is_bst_satisfied(self):
        result = self.in_order_traversal()
        return result == sorted(result)

    def in_order_traversal(self):
        result = []
        def helper(current):
            if current:
                helper(current.left)
                result.append(current.data)
                helper(current.right)
        helper(self.root)
        return result
    

if __name__ == "__main__":
    bst = BST(10)
    bst.insert(3)
    bst.insert(1)
    bst.insert(25)
    bst.insert(9)
    bst.insert(13)

    print(bst.search(9))
    print(bst.search(14))
    print(bst.is_bst_satisfied())

