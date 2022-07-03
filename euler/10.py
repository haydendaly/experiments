def get_primes(limit):
    a = [True] * limit                          # Initialize the primality list
    a[0] = a[1] = False

    for (i, isprime) in enumerate(a):
        if isprime:
            yield i
            for n in range(i*i, limit, i):     # Mark factors non-prime
                a[n] = False


def sum_primes(limit=10):
    total = 0
    for prime in get_primes(limit):
        total += prime
    return total


if __name__ == "__main__":
    print(sum_primes(2_000_000))
