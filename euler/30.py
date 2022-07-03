def fifth_powers(digits):
    total = 0
    for i in range(2, 10 ** (digits + 1)):
        local_total = 0
        j = i
        while j:
            local_total += (j % 10) ** 5
            j //= 10
        if local_total == i:
            print(local_total)
            total += local_total
    return total


if __name__ == "__main__":
    print(fifth_powers(5))
