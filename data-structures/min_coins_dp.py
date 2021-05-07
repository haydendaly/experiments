def min_coins(amount, coins):
    if amount < 0: 
        return -1
    count = 0
    while (amount > 0):
        for coin in coins:
            if coin <= amount:
                count += 1
                amount -= coin
                break

    return count

def min_coins_tuple(amount, coins):
    if amount < 0: 
        return -1
    count = 0
    change = []
    while (amount > 0):
        for coin in coins:
            if coin <= amount:
                count += 1
                change.append(coin)
                amount -= coin
                break

    return (count, change)

def min_coins_dp(amount, coins):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return -1 if dp[amount] > amount else dp[amount]


if __name__ == '__main__':
    # start with uniform coins
    # return num of coins and array of which coins as tuple (still greedy)
    # nonuniform coins (dp approach)

    coins = [100, 50, 25, 10, 5, 1]
    print(min_coins(148, coins))

    print(min_coins_tuple(148, coins))

    strange_coins = [5, 2, 1]
    print(min_coins_dp(148, strange_coins))
