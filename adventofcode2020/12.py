import unittest
import numpy as np
import math

def navigate(instructions):
    angle = 90
    x = 0
    y = 0
    for instr in instructions:
        c, v = instr[0], instr[1]
        if c == 'N':
            y += v
        elif c == 'E':
            x += v
        elif c == 'S':
            y -= v
        elif c == 'W':
            x -= v
        elif c == 'R':
            angle = (angle + v) % 360
        elif c == 'L':
            angle = (angle - v) % 360
        elif c == 'F':
            if angle == 0:
                y += v
            elif angle == 90:
                x += v
            elif angle == 180:
                y -= v
            elif angle == 270:
                x -= v
    return abs(x) + abs(y)

def navigate_2(instructions):
    wp_x = 10
    wp_y = 1
    x = 0
    y = 0
    for instr in instructions:
        c, v = instr[0], instr[1]
        if c == 'N':
            wp_y += v
        elif c == 'E':
            wp_x += v
        elif c == 'S':
            wp_y -= v
        elif c == 'W':
            wp_x -= v
        elif c == 'F':
            x += (v * wp_x)
            y += (v * wp_y)
        elif c == 'L' or c == 'R':
            if c == 'L':
                v = 360 - v
            wp_x_t = wp_x
            wp_y_t = wp_y
            if v == 90:
                wp_x_t = wp_y
                wp_y_t = wp_x * -1
            elif v == 180:
                wp_x_t = wp_x * -1
                wp_y_t = wp_y * -1
            elif v == 270:
                wp_x_t = wp_y * -1
                wp_y_t = wp_x
            wp_x = wp_x_t
            wp_y = wp_y_t
    return abs(x) + abs(y)

def clean_data(input_file):
    return [(instr[0], int(instr[1:])) for instr in input_file.split("\n")]

if __name__ == '__main__':
    input_file = open("inputs/12.txt", "r").read()
    clean_input = clean_data(input_file)
    print(navigate_2(clean_input))

class TestInputs(unittest.TestCase):
    test_input, actual_result = """F10
N3
F7
R90
F11""", 25

    def test_example(self):
        clean_input = clean_data(self.test_input)
        test_result = navigate(clean_input)
        self.assertEqual(test_result, self.actual_result)

    def test_example_2(self):
        clean_input = clean_data(self.test_input)
        test_result = navigate_2(clean_input)
        self.assertEqual(test_result, 286)