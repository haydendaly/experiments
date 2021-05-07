import time
import random

def find_sum(y, x, curr_sum, matrix, cell_m, cell_n):
    sum_cell = curr_sum
    if curr_sum == 0:
        for i in range(cell_m):
            for j in range(cell_n):
                sum_cell += matrix[y + i][x + j]
    else:
        for i in range(cell_m):
            sum_cell -= matrix[y + i][x - 1]
            sum_cell += matrix[y + i][x + cell_n - 1]
            
    curr_sum = sum_cell

    return (curr_sum, sum_cell)

def find_smallest_sum(matrix, m, n, cell_m, cell_n):
    min_sum = 10000000
    min_sum_y = 0
    min_sum_x = 0
    curr_sum = 0

    # O(m*n*cell_m*cell_n)

    for i in range(m):
        curr_sum = 0
        for j in range(n):
            if i <= m - cell_m and j <= n - cell_n:
                curr_sum, temp = find_sum(i, j, curr_sum, matrix, cell_m, cell_n)
                if temp < min_sum:
                    min_sum = temp
                    min_sum_y = i
                    min_sum_x = j

    return (min_sum, min_sum_y, min_sum_x)
            

if __name__ == '__main__':
    data = [
        [1, 2, 3, 4, 5],
        [1, 3, 3, 0, 4],
        [4, 0, 1, 1, 3],
        [1, 0, 2, 2, 5],
        [3, 2, 0, 4, 1],
        [3, 2, 0, 9, 1],
    ]
    data2 = [[random.randint(0, 100) for x in range(1000)] for y in range(1000)]

    # 0.06674408912658691
    times = []
    for i in range(5):
        start = time.time()
        ans = find_smallest_sum(data2, 1000, 1000, 5, 5)
        end = time.time()
        times.append(end - start)
    print(times)

