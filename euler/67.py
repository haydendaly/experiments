s = """3
7 4
2 4 6
8 5 9 3"""


def str_to_tree(s):
    rows = s.split("\n")
    tree = [[] for _ in rows]
    for i, row in enumerate(s.split("\n")):
        for num in row.split(" "):
            tree[i].append(int(num))
    return tree


# same as 18
def minimum_path_sum(s):
    tree = str_to_tree(s)
    dp = [[0] * i for i in range(1, len(tree) + 1)]

    for i, row in enumerate(tree):
        for j, num in enumerate(row):
            prev = 0
            if i != 0:
                if j != 0:
                    prev = max(prev, dp[i - 1][j - 1])
                if j != len(row) - 1:
                    prev = max(prev, dp[i - 1][j])
            dp[i][j] = num + prev

    return max(dp[-1])


if __name__ == "__main__":
    print(minimum_path_sum(s))
