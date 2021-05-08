import unittest

def clean_data(input_file):
    return input_file

if __name__ == '__main__':
    input_file = open("inputs/x.txt", "r").read()
    clean_input = clean_data(input_file)

class TestInputs(unittest.TestCase):
    test_input, actual_result = "", 0

    def test_example(self):
        test_result = 0
        self.assertEqual(test_result, self.actual_result)