def nth_digit_fibonacci_index(n):
    curr, prev = 1, 1
    i = 2
    while len(str(curr)) < n:
        curr, prev = curr + prev, curr
        i += 1

    return i


if __name__ == "__main__":
    print(nth_digit_fibonacci_index(1000))
