class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    
class LinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        curr = self.head
        while curr:
            print(curr.data)
            curr = curr.next

    def append(self, data):
        last = self.head
        if not last:
            self.head = Node(data)
        else:
            while last.next:
                last = last.next
            last.next = Node(data)

    def prepend(self, data):
        next = self.head
        self.head = Node(data)
        self.head.next = next

    def insert_after_node(self, prev_node, data):
        if prev_node:
            next = prev_node.next
            prev_node.next = Node(data)
            prev_node.next.next = next

    def delete_by_value(self, value):
        if self.head == value:
            self.head = self.head.next
        else:
            curr = self.head
            while curr.next and curr.next.data != value:
                curr = curr.next
            if curr.next:
                temp = curr.next
                curr.next = curr.next.next
                temp = None

    def delete_by_index(self, index):
        curr, prev, count = self.head, None, 0
        while curr and count != index:
            prev = curr
            curr = curr.next
            count += 1
        if curr:
            prev.next = curr.next
            curr = None

    def length(self):
        size = 0
        curr = self.head
        while curr:
            size += 1
            curr = curr.next
        return size

    def length_recursive(self, node):
        if node:
            return 1 + self.length_recursive(node.next)
        return 0

    def reverse(self):
        prev = None
        curr = self.head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        self.head = prev

    def reverse_recursive(self):
        def _reverse(curr, prev):
            if not curr:
                return prev
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            return _reverse(curr, prev)
        self.head = _reverse(curr=self.head, prev=None)

    def merge_sorted(self, other):
        ll_1 = self.head
        ll_2 = other.head
        curr = None

        if not ll_1:
            return ll_2
        elif not ll_2:
            return ll_1

        if ll_1 and ll_2:
            if ll_1.data <= ll_2.data:
                curr = ll_1
                ll_1 = curr.next
            else:
                curr = ll_2
                ll_2 = curr.next
            new_head = curr
        while ll_1 and ll_2:
            if ll_1.data <= ll_2.data:
                curr.next = ll_1
                curr = ll_1
                ll_1 = curr.next
            else:
                curr.next = ll_2
                curr = ll_2
                ll_2 = curr.next
        if not ll_1:
            curr.next = ll_2
        if not ll_2:
            curr.next = ll_1
        self.head = new_head
        return self.head

    def remove_duplicates(self):
        curr = self.head
        prev = None
        seen = set()

        while curr:
            if curr.data in seen:
                prev.next = curr.next
                curr = None
            else:
                seen.add(curr.data)
                prev = curr
            curr = prev.next

    def nth_from_last(self, n):
        curr = self.head
        nth = None
        count = 0
        while curr:
            if count >= n:
                if nth:
                    nth = nth.next
                else:
                    nth = self.head
            curr = curr.next
            count += 1
        return nth

    def count_occurences(self, value):
        count = 0
        curr = self.head
        while curr:
            if curr.data == value:
                count += 1
            curr = curr.next
        return count

    def count_occurences_recursive(self, value, curr):
        if not curr:
            return 0
        return (1 if curr.data == value else 0) + self.count_occurences_recursive(value, curr.next)

    def rotate(self, pivot):
        curr = pivot
        curr_prev = self.head
        while curr_prev.next != pivot:
            curr_prev = curr_prev.next
        curr_prev.next = None
        while curr.next:
            curr = curr.next
        curr.next = self.head
        self.head = pivot

    def is_palindrome(self):
        curr = self.head
        stack = []
        while curr:
            stack.append(curr)
            curr = curr.next
        curr = self.head
        while curr:
            if curr.data != stack.pop():
                return False
            curr = curr.next
        return True

    def tail_to_head(self):
        curr = self.head
        while curr.next and curr.next.next:
            curr = curr.next
        curr.next.next = self.head
        self.head = curr.next
        curr.next = None

    def sum_linked_lists(self, other):
        curr_1, curr_2 = self.head, other.head
        sum = 0
        while curr_1 and curr_2:
            sum *= 10
            sum += curr_1.data + curr_2.data
            curr_1, curr_2 = curr_1.next, curr_2.next
        return sum
        

llist1 = LinkedList()
llist1.append(5)
llist1.append(6)
llist1.append(3)

llist2 = LinkedList()
llist2.append(8)
llist2.append(4)
llist2.append(2)

print(365 + 248)
llist1.sum_linked_lists(llist2)
