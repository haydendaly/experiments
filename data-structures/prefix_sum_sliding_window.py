def find_min_sum(grid, sub_i, sub_j):
    # Create variables for size of grid
    n, m = len(grid), len(grid[0])

    # Transform to prefix grid
    for i in range(1, n):
        grid[0][i] = grid[0][i - 1] + grid[0][i]
    for j in range(1, m):
        grid[j][0] = grid[j - 1][0] + grid[j][0]
    for i in range(1, n):
        for j in range(1, m):
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1] - grid[i - 1][j - 1] + grid[i][j]
    
    # Define variables for minimums
    min_i, min_j, min_val = 0, 0, grid[n - 1][m - 1]

    # Helper function to get sum
    def get_sum(i, j):
        sum_val = min_val + 1
        if i <= n - sub_i and j <= m - sub_j:
            sum_val = grid[i + sub_i - 1][j + sub_j - 1]
            sum_val -= grid[i - 1][j + sub_j - 1] if i > 0 else 0
            sum_val -= grid[i + sub_i - 1][j - 1] if j > 0 else 0
            sum_val += grid[i - 1][j - 1] if i > 0 and j > 0 else 0
        return sum_val

    # Iterate over grid to find min sum
    for i in range(n):
        for j in range(m):    
            temp_val = get_sum(i, j)
            if temp_val < min_val:
                min_i, min_j, min_val = i, j, temp_val

    return (min_i, min_j, min_val)

if __name__ == '__main__':
    grid = [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 1, 1, 1],
        [1, 2, 1, 1, 1],
        [1, 2, 1, 1, 1],
    ]

    print(find_min_sum(grid, 3, 3))