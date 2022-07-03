def champernownes_constant():
    indexes = [1, 10, 100, 1000, 10000, 100000, 1000000]
    i = 0
    j = 0
    prod = 1

    # digit, s, next
    curr = [(0, "1", 2)]

    while i < len(indexes):
        digit, s, next = curr.pop()
        if digit + 1 > len(s):
            curr.append((0, str(next), next + 1))
        else:
            j += 1
            if j == indexes[i]:
                prod *= int(s[digit])
                i += 1
            curr.append((digit + 1, s, next))

    return prod


if __name__ == "__main__":
    print(champernownes_constant())
