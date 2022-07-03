def coin_sums(n):
    coins = [1, 2, 5, 10, 20, 50, 100, 200]
    ways = [1] + [0] * n
    for coin in coins:
        for i in range(coin, n + 1):
            ways[i] += ways[i - coin]
    return ways[n]


if __name__ == "__main__":
    print(coin_sums(200))
