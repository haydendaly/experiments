def traverse_map(arr):
    width = len(arr[0])
    collisions = 0
    pos = 0

    for row in arr:
        if row[pos] == '#':
            collisions += 1
        pos = (pos + 3) % width

    return collisions

def traverse_map_2(arr):
    width = len(arr[0])
    col1, col2, col3, col4, col5 = 0, 0, 0, 0, 0
    pos1, pos2, pos3, pos4, pos5 = 0, 0, 0, 0, 0

    for i in range(len(arr)):
        if arr[i][pos1] == '#':
            col1 += 1
        pos1 = (pos1 + 1) % width

        if arr[i][pos2] == '#':
            col2 += 1
        pos2 = (pos2 + 3) % width

        if arr[i][pos3] == '#':
            col3 += 1
        pos3 = (pos3 + 5) % width

        if arr[i][pos4] == '#':
            col4 += 1
        pos4 = (pos4 + 7) % width

        if i % 2 == 0:
            if arr[i][pos5] == '#':
                col5 += 1
            pos5 = (pos5 + 1) % width

    return col1 * col2 * col3 * col4 * col5

input_file = open("inputs/3.txt", "r")

actual_input = input_file.read().split("\n")

print(traverse_map_2(actual_input))