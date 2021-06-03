def buy_and_sell_stock_once(prices):
    min_prior, max_profit = prices[0], 0
    for i in range(1, len(prices)):
        if min_prior > prices[i]:
            min_prior = prices[i]
        if max_profit < prices[i] - min_prior:
            max_profit = prices[i] - min_prior
    return max_profit

if __name__ == '__main__':
    prices = [310, 315, 275, 295, 260, 270, 290, 230, 255]
    print(buy_and_sell_stock_once(prices))