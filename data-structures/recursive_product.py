def prod_recurse(num1, num2):
    if num2 <= 0:
        return 0
    else:
        return num1 + prod_recurse(num1, num2 - 1)

def prod(num1, num2):
    if bool(num1 < 0) ^ bool(num2 < 0):
        return 0 - prod_recurse(abs(num1), abs(num2))
    else:
        return prod_recurse(abs(num1), abs(num2))

if __name__ == '__main__':
    # Write integer multiplication without *
    print(prod(13, -13))