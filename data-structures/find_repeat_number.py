import unittest

def find_repeat(data):
    for i in range(len(data)):
        if data[abs(data[i]) - 1] < 0:
            return abs(data[i])
        else:
            data[data[i] - 1] = -data[data[i] - 1]
    return -1

# def find_repeat_sum(data):
#     n = len(data)
#     total_sum = 0
#     for i in range(n):
#         total_sum += data[i]
#     total_size_sum = n*(n-1)/2
#     return abs(total_sum - total_size_sum)

if __name__ == "__main__":
    data = [7, 8, 3, 2, 5, 6, 1, 8]
    res = find_repeat(data)
    print(res)

    # unittest.main(verbosity=2)

class Test(unittest.TestCase):
    def test_just_the_repeated_number(self):
        actual = find_repeat([1, 1])
        expected = 1
        self.assertEqual(actual, expected)

    def test_short_list(self):
        actual = find_repeat([1, 2, 3, 2])
        expected = 2
        self.assertEqual(actual, expected)

    def test_medium_list(self):
        actual = find_repeat([1, 2, 5, 5, 5, 5])
        expected = 5
        self.assertEqual(actual, expected)

    def test_long_list(self):
        actual = find_repeat([4, 1, 4, 8, 3, 2, 7, 6, 5])
        expected = 4
        self.assertEqual(actual, expected)