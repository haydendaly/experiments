from functools import lru_cache
from collections import defaultdict
from math import sqrt


@lru_cache(None)
def is_prime(num):
    prime_flag = 0
    if (num <= 1):
        return False
    for i in range(2, int(sqrt(num)) + 1):
        if (num % i == 0):
            prime_flag = 1
            break
    return prime_flag == 0


@lru_cache(None)
def fact(num):
    return num * fact(num - 1) if num > 1 else 1


def circular_primes(limit):
    rotations = defaultdict(int)
    count = 0

    for num in range(2, limit):
        if is_prime(num):
            num_str = str(num)
            key = str(sorted(num_str))
            rotations[key] += 1
            if rotations[key] == fact(len(num_str) - 1):
                count += 1

    return count


if __name__ == "__main__":
    print(circular_primes(100))
    # print(circular_primes(1_000_000))
