import unittest

def sum_unique_questions(groups):
    result = 0
    for group in groups:
        result += len(group)
    return result

def sum_collective_questions(groups):
    result = 0
    for group in groups:
        result += len(set.intersection(*group))
    return result

def clean_data_1(input_file):
    return [set(group) - { "\n", " " } for group in input_file.split("\n\n")]

def clean_data_2(input_file):
    return [[set(person) for person in group.split("\n")] for group in input_file.split("\n\n")]

if __name__ == '__main__':
    input_file = open("inputs/6.txt", "r").read()
    clean_input = clean_data_2(input_file)
    print(sum_collective_questions(clean_input))

class TestInputs(unittest.TestCase):
    test_input, actual_result_1 = """abc

a
b
c

ab
ac

a
a
a
a

b""", 11
    actual_result_2 = 6

    def test_example_1(self):
        clean_input = clean_data_1(self.test_input)
        test_result = sum_unique_questions(clean_input)
        self.assertEqual(test_result, self.actual_result_1)
    
    def test_example_2(self):
        clean_input = clean_data_2(self.test_input)
        test_result = sum_collective_questions(clean_input)
        self.assertEqual(test_result, self.actual_result_2)