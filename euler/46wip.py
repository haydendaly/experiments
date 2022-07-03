from functools import lru_cache
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


def goldbachs_other_conjecture(limit):
    primes = []
    for i in range(limit):
        primes.append(i) if is_prime(i) else None
    for i in range(len(primes)):
        for j in range(len(primes)):
            if primes[i] + primes[j] == limit:
                return primes[i], primes[j]
