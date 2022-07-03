def sum_of_digits(pow=15):
    total = 0
    num = 2 ** pow
    while num:
        total += num % 10
        num //= 10
    return total


if __name__ == "__main__":
    print(sum_of_digits(1000))
