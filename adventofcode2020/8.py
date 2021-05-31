import unittest

def run_opcode(input):
    size = len(input)
    seen = set()
    i = 0
    acc = 0
    while i < size and i >= 0:
        if i in seen:
            return acc
        seen.add(i)
        if input[i][0] == 'nop':
            i += 1
        elif input[i][0] == 'acc':
            acc += input[i][1]
            i += 1
        elif input[i][0] == 'jmp':
            i += input[i][1]
    return acc

# Refactored to be not brute force with https://github.com/viliampucik/adventofcode/blob/master/2020/08.py
def run_corrupted_opcode(input):
    visited = {}

    def run(accumulator=0, i=0):
        while i not in visited and i < len(input):
            visited[i] = accumulator
            op, num = input[i]
            if op == "acc":
                accumulator += num
            elif op == "jmp":
                i += num - 1
            i += 1
        return accumulator, i

    accumulator, _ = run()
    
    for j in set(visited.keys()):
        op, num = input[j]
        if (op == "nop" and (i := j + num) not in visited) or \
            (op == "jmp" and (i := j + 1) not in visited):
            accumulator, i = run(visited[j], i)
            if i >= len(input):
                break

    return accumulator

def clean_data(input_file):
    opcodes = []
    for line in input_file.split("\n"):
        opcode = line.split(" ")
        num = int(opcode[1][1:])
        if opcode[1][0] == '-':
            num *= -1
        opcodes.append((opcode[0], num))
    return opcodes

if __name__ == '__main__':
    input_file = open("inputs/8.txt", "r").read()
    clean_input = clean_data(input_file)
    print(run_corrupted_opcode(clean_input))

class TestInputs(unittest.TestCase):
    test_input, actual_result = """nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6""", 5
    actual_corrupted_result = 8

    def test_example(self):
        actual_input = clean_data(self.test_input)
        test_result = run_opcode(actual_input)
        self.assertEqual(test_result, self.actual_result)

    def test_corrupted_example(self):
        actual_input = clean_data(self.test_input)
        test_result = run_corrupted_opcode(actual_input)
        self.assertEqual(test_result, self.actual_corrupted_result)
