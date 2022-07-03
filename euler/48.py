def pow_10_digits(n):
    prod = 1
    k = n
    while k:
        prod *= n
        prod %= 10 ** 11
        k -= 1
    return prod


def self_powers(n):
    tot = 0
    for i in range(1, n + 1):
        tot += pow_10_digits(i)

    return tot % 10 ** 10


if __name__ == "__main__":
    print(self_powers(1000))
