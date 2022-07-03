from functools import lru_cache


@lru_cache(None)
def fact(n):
    if n == 0:
        return 1
    return n * fact(n - 1)


def digit_factiorals():
    total = 0
    for n in range(3, 100000):
        if n == sum(fact(int(d)) for d in str(n)):
            total += n
    return total


if __name__ == "__main__":
    print(digit_factiorals())
