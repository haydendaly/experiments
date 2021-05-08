import unittest

def find_seat_id(boarding_pass):
    row_str, col_str = boarding_pass[:-3], boarding_pass[-3:]
    row, col = 0, 0

    for i in range(7):
        if row_str[i] == 'B':
            row += pow(2, 6 - i)
    for i in range(3):
        if col_str[i] == 'R':
            col += pow(2, 2 - i)
    
    return row * 8 + col

def find_user_seat(ids):
    ids.sort()
    size = len(ids)
    for i in range(size):
        if i + 1 < size and ids[i] + 2 == ids[i + 1]:
            return ids[i] + 1

def clean_data(input_file):
    passes = input_file.split("\n")
    return passes

if __name__ == '__main__':
    input_file = open("inputs/5.txt", "r").read()
    actual_input = clean_data(input_file)
    ids = [find_seat_id(boarding_pass) for boarding_pass in actual_input]
    result = find_user_seat(ids)
    print(result)

class TestInputs(unittest.TestCase):
    test_input, actual_result = "FBFBBFFRLR", 357

    def test_example(self):
        test_result = find_seat_id(self.test_input)
        self.assertEqual(test_result, self.actual_result)