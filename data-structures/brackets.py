import unittest

# O(n)
def is_balanced(parens):
    valid = { "}" : "{", "]" : "[", ")" : "(" }
    stack = []
    for char in parens:
        if char in valid.values():
            stack.append(char)
        elif len(stack) == 0 or stack.pop() != valid[char]:
            return False
    return len(stack) == 0

class TestBrackets(unittest.TestCase):
    def test_single(self):
        result = is_balanced("{}")
        self.assertTrue(result)
    def test_double(self):
        result = is_balanced("{}{}")
        self.assertTrue(result)
    def test_nested(self):
        result = is_balanced("(({[]}))")
        self.assertTrue(result)
    def test_unbalanced_single(self):
        result = is_balanced("(()")
        self.assertFalse(result)
    def test_unbalanced_nested(self):
        result = is_balanced("{{{)}]")
        self.assertFalse(result)
    def test_unbalanced_double(self):
        result = is_balanced("[][]]]")
        self.assertFalse(result)
