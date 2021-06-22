import unittest
import numpy as np
from scipy.ndimage import convolve

# Part 1

def iterate_state(prev_seats):
    seats = prev_seats.copy()
    to_empty = []
    to_fill = []
    row_len = len(seats)
    col_len = len(seats[0]) 

    def st(i, j):
        if i < 0:
            return 0
        elif j < 0:
            return 0
        elif i == row_len:
            return 0
        elif j == col_len:
            return 0
        elif seats[i][j] == '#':
            return 1
        else:
            return 0

    for i in range(row_len):
        for j in range(col_len):
            if seats[i][j] != '.':
                occupied_surrounding = st(i-1,j-1) + st(i-1,j) + st(i-1, j+1) + st(i,j-1) + st(i, j+1) + st(i+1,j-1) + st(i+1,j) + st(i+1,j+1)
                if occupied_surrounding == 0 and seats[i][j] == 'L':
                    to_fill.append((i, j))
                elif occupied_surrounding >= 4 and seats[i][j] == '#':
                    to_empty.append((i, j))

    for pair in to_empty:
        old = seats[pair[0]]
        seats[pair[0]] = old[:pair[1]] + 'L' + old[pair[1] + 1:]
    for pair in to_fill:
        old = seats[pair[0]]
        seats[pair[0]] = old[:pair[1]] + '#' + old[pair[1] + 1:]

    return seats

def get_occupied(seats):
    occupied = 0
    for row in seats:
        for col in row:
            if col == '#':
                occupied += 1
    return occupied

def find_arrangement(seats):
    prev, curr = [], seats
    while prev != curr:
        prev = curr
        curr = iterate_state(curr)
    
    return get_occupied(curr)

# Part 2 (https://github.com/metinsuloglu/AdventofCode20/blob/main/day11.py)

def find_arrangement_2(input_str):
    grid_converter = str.maketrans('.L#','012')

    grid = np.array([[int(x) for x in list(r.translate(grid_converter))]
                     for r in input_str.split("\n")])
    def closest_seat_coord(coord, offset):
        curr_loc = (coord[0] + offset[0], coord[1] + offset[1])
        while 0 <= curr_loc[0] < len(grid) and 0 <= curr_loc[1] < len(grid[curr_loc[0]]) and grid[curr_loc] == 0:
            curr_loc = (curr_loc[0] + offset[0], curr_loc[1] + offset[1])
        return curr_loc

    directions = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    neighbours = np.array([[[closest_seat_coord((x, y), d) for d in directions]
                            for y, c in enumerate(r)] for x, r in enumerate(grid)])
    neighbours = np.rollaxis(neighbours + 1, -1)
    padded_seats = np.zeros((grid.shape[0] + 2, grid.shape[1] + 2))

    while True:
        prev_seats = np.copy(grid)
        padded_seats[1:-1, 1:-1] = grid
        neighbour_vals = np.take(padded_seats,
                                np.ravel_multi_index(neighbours,
                                                    padded_seats.shape)
                                )
        res = np.sum(neighbour_vals == 2, axis=2)
        grid[(grid == 1) & (res == 0)] = 2
        grid[(grid == 2) & (res >= 5)] = 1
        if (prev_seats == grid).all(): break

    return np.count_nonzero(grid == 2)

# General

def clean_data(input_file):
    return input_file.split("\n")

def pretty_print(formatted_data):
    for row in formatted_data:
        print("".join(row))

if __name__ == '__main__':
    input_file = open("inputs/11.txt", "r").read()
    clean_input = clean_data(input_file)
    print(find_arrangement(clean_input))
    print(find_arrangement_2(input_file))

class TestInputs(unittest.TestCase):
    test_input, actual_result = "", 0

    def test_example(self):
        test_result = 0
        self.assertEqual(test_result, self.actual_result)