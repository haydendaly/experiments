def find_islands(data):
    count = 0;

    def dfs(x, y):
        if x < len(data) and x >= 0 and y < len(data[0]) and y >= 0 and data[x][y] == 1:
            data[x][y] = 0
            dfs(x - 1, y)
            dfs(x + 1, y)
            dfs(x, y - 1)
            dfs(x, y + 1)

    for i in range(len(data)):
        for j in range(len(data)):
            if data[i][j] == 1:
                count += 1
                dfs(i, j)

    return count

if __name__ == '__main__':
    test1 = [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1]
    ]

    print(find_islands(test1))