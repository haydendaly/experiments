class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        curr = self.head
        new_node = Node(data)
        if not curr:
            self.head = new_node
        else:
            while curr.next:
                curr = curr.next
            curr.next = new_node
            curr.next.prev = curr

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head.prev = new_node
        self.head = new_node

    def print_list(self):
        curr = self.head
        result = []
        while curr:
            result.append(curr.data)
            curr = curr.next
        print(result)

    def add_node_after(self, key, data):
        curr = self.head
        while curr and curr.data != key:
            curr = curr.next
        if curr:
            new_node = Node(data)
            if curr.next:
                curr.next.prev = new_node
                new_node.next = curr.next
            curr.next = new_node
            new_node.prev = curr
        else:
            raise ValueError("Key does not exist on DLL")

    def delete_node(self, key):
        curr = self.head
        if curr and curr.data == key:
            self.head = curr.next
        else:
            while curr and curr.data != key:
                curr = curr.next
            if curr:
                if curr.next:
                    curr.next.prev = curr.prev
                curr.prev.next = curr.next
                curr = None
            else:
                raise ValueError("Key does not exist on DLL")

    def reverse(self):
        curr = self.head
        while curr and curr.next:
            next = curr.next
            curr.next = curr.prev
            curr.prev = next
            curr = next
        self.head = curr
        self.head.next = self.head.prev
        self.head.prev = None

    def remove_duplicates(self):
        seen = set()
        curr = self.head
        while curr:
            if curr.data not in seen:
                seen.add(curr.data)
            else:
                if curr.next:
                    curr.next.prev = curr.prev
                curr.prev.next = curr.next
            curr = curr.next

    def pairs_with_sum(self, sum_val):
        pairs = []
        curr = self.head
        while curr:
            sub_curr = curr.next
            while sub_curr:
                if curr.data + sub_curr.data == sum_val:
                    pairs.append((curr.data, sub_curr.data))
                sub_curr = sub_curr.next
            curr  = curr.next
        return pairs


dll_1 = DoublyLinkedList()

dll_1.append(2)
dll_1.append(3)
dll_1.append(4)
dll_1.append(4)
dll_1.append(4)
dll_1.append(6)
dll_1.prepend(1)
dll_1.prepend(0)

dll_1.add_node_after(4, 5)
dll_1.add_node_after(6, 7)

dll_1.remove_duplicates()

dll_1.reverse()

print(dll_1.pairs_with_sum(5))

dll_1.print_list()