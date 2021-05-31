import unittest

def find_invalid(nums, length):
    for i in range(len(nums)):
        if i >= length:
            temp = False
            seen = set(nums[i - length:i])
            for j in range(i - length, i):
                if nums[i] - nums[j] in seen:
                    temp = True
                    break
            if not temp:
                return nums[i]
    return -1

def find_contiguous_sum(nums, target):
    prefix_sum = nums.copy()
    for i in range(1, len(prefix_sum)):
        prefix_sum[i] += prefix_sum[i - 1]    
        if prefix_sum[i] > target:
            j = i - 1
            while prefix_sum[i] - prefix_sum[j] <= target and j > 0:
                if prefix_sum[i] - prefix_sum[j] == target:
                    return j + 1, i
                j -= 1
    return -1, -1

def find_weakness(subseq):
    return min(subseq) + max(subseq)

def clean_data(input_file):
    return [int(num) for num in input_file.split("\n")]

if __name__ == '__main__':
    input_file = open("inputs/9.txt", "r").read()
    clean_input = clean_data(input_file)
    invalid = find_invalid(clean_input, 25)
    j, i = find_contiguous_sum(clean_input, invalid)
    print(find_weakness(clean_input[j:i]))

class TestInputs(unittest.TestCase):
    test_input_1, test_input_2, actual_result = """35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576""", 5, 127
    actual_result_2 = 62

    def test_example_1(self):
        clean_input = clean_data(self.test_input_1)
        test_result = find_invalid(clean_input, self.test_input_2)
        self.assertEqual(test_result, self.actual_result)

    def test_example_1(self):
        clean_input = clean_data(self.test_input_1)
        j, i = find_contiguous_sum(clean_input, self.actual_result)
        test_result = find_weakness(clean_input[j:i])
        self.assertEqual(test_result, self.actual_result_2)