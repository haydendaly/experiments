def get_change(amount, coins):
    if amount < 0:
        return -1
    count = 0
    while amount > 0:
        for coin_size in coins:
            if coin_size < amount:
                amount -= coin_size
                count += 1
                break
    return count

def get_change_strange_recursive(amount, coins):
    if amount < 0: 
        return amount + 1
    if amount == 0:
        return 0
    localBest = amount + 1
    for coin in coins:
        localBest = min(localBest, get_change_strange(amount - coin, coins) + 1)
    return localBest

def get_change_strange(amount, coins):
    memo = [amount + 1]*(amount + 1)
    memo[0] = 0

    # for 8, [7,4,3] [0, 9, 9, 1, 1, 9, 2, 9, 2]

    for i in range(1, amount+1):
        for coin in coins:
            if coin <= i:
                memo[i] = min(memo[i - coin] + 1, memo[i])
    
    return -1 if memo[amount] > amount else memo[amount]

if __name__ == '__main__':
    coins = [100, 50, 25, 10, 5, 1]
    amount = 148
    print(get_change(amount, coins))

    strange_coins = [7, 4, 3]
    amount = 8

    print(get_change_strange(amount, coins))