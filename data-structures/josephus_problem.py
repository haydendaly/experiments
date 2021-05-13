class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        if not self.head:
            self.head = Node(data)
            self.head.next = self.head
        else:
            curr = self.head
            while curr.next != self.head:
                curr = curr.next
            curr.next = Node(data)
            curr.next.next = self.head

    def print(self):
        curr = self.head
        condition = True
        while condition and curr:
            print(curr.data)
            curr = curr.next
            condition = curr != self.head

    def prepend(self, data):
        if not self.head:
            self.head = Node(data)
            self.head.next = self.head
        else:
            curr = self.head
            while curr.next != self.head:
                curr = curr.next
            new_node = Node(data)
            new_node.next = self.head
            curr.next = new_node
            self.head = new_node

    def remove(self, node):
        curr = self.head
        if curr:
            while curr.next != node:
                curr = curr.next
            remove = curr.next
            curr.next = curr.next.next
            if remove == self.head:
                self.head = curr.next
            remove = None

    def __len__(self):
        count = 0
        curr = self.head
        condition = True
        while condition and curr:
            count += 1
            curr = curr.next
            condition = curr != self.head
        return count

    def split_in_half(self):
        size, count = len(self) // 2, 0
        new_list = CircularLinkedList()
        if size > 1:
            curr = self.head
            while count < size / 2:
                count += 1
                curr = curr.next
            new_head = curr.next
            curr.next = self.head

            new_list.head = new_head
            curr = new_list.head
            while curr.next != self.head:
                curr = curr.next
            curr.next = new_list.head
        return new_list

    def josephus_execute(self, step):
        curr = self.head
        size = len(self)
        count = 0
        while size > 1:
            count = 1
            size -= 1
            while count != step:
                curr = curr.next
                count += 1
            self.remove(curr)
            curr = curr.next
        return curr.data

def is_circular(head):
    slow = head
    fast = head.next
    while slow and fast and fast.next:
        if slow == fast:
            return True
        slow = slow.next
        fast = fast.next.next
    return False

def josephus_simulation(n, k):
    cllist = CircularLinkedList()
    for i in range(1, n + 1):
        cllist.append(i)
    return cllist.josephus_execute(k)

def josephus_iterative(n, k):
    res = 0
    for i in range(1, n + 1):
        res = (res + k) % i
    return res + 1

n, k = 41, 3
print(josephus_simulation(n, k))
print(josephus_iterative(n, k))
