import unittest

def find_valid_journeys(jolts):
    jolts.insert(0, 0)
    jolts.append(jolts[-1] + 3)

    dp = [0] * len(jolts)
    dp[0] = 1

    for i in range(len(jolts)):
        curr, j = jolts[i], i - 1
        while j >= 0 and jolts[j] >= curr - 3:
            dp[i] += dp[j]
            j -= 1

    return dp[-1]

def find_differences(jolts):
    diff1 = 0
    diff3 = 0

    for i in range(1, len(jolts)):
        if jolts[i] - jolts[i - 1] == 1:
            diff1 += 1
        elif jolts[i] - jolts[i - 1] == 3:
            diff3 += 1
    return (diff1 + 1) * (diff3 + 1)

def clean_data(input_file):
    return sorted([int(joltage) for joltage in input_file.split("\n")])

if __name__ == '__main__':
    input_file = open("inputs/10.txt", "r").read()
    clean_input = clean_data(input_file)
    print(find_valid_journeys(clean_input))

class TestInputs(unittest.TestCase):
    test_input, actual_result = """28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3""", 220

    test_input_2, actual_result_2 = """16
10
15
5
1
11
7
19
6
12
4""", 8

    def test_example(self):
        clean_input = clean_data(self.test_input)
        test_result = find_differences(clean_input)
        self.assertEqual(test_result, self.actual_result)

    def test_example_2(self):
        clean_input = clean_data(self.test_input_2)
        test_result = find_valid_journeys(clean_input)
        self.assertEqual(test_result, self.actual_result_2)