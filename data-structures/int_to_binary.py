import unittest

def int_to_binary(num):
    result = ""
    while num != 0:
        remainder = num % 2
        num = num // 2
        result += str(remainder)
    while len(result) > 0 and result[-1] == '0':
        result.pop()
    return result[::-1]

class TestExamples(unittest.TestCase):
    def test_127(self):
        result = int_to_binary(127)
        self.assertEqual(result, "1111111")
    def test_6(self):
        result = int_to_binary(6)
        self.assertEqual(result, "110")
