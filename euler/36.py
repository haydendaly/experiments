from re import L


def is_palindrome(arr):
    i, j = 0, len(arr) - 1
    while i < j:
        if arr[i] != arr[j]:
            return False
        i += 1
        j -= 1
    return True


def is_double_base_palindrome(num, base1=2, base2=10):
    q1, q2 = [], []
    num1, num2 = num, num
    while num1:
        q1.append(num1 % base1)
        num1 //= base1
    while num2:
        q2.append(num2 % base2)
        num2 //= base2

    return is_palindrome(q1) and is_palindrome(q2)


def all_double_base_palindromes(limit=1000000):
    tot = 0
    for i in range(1, limit + 1):
        if is_double_base_palindrome(i):
            tot += i

    return tot


if __name__ == "__main__":
    print(all_double_base_palindromes())
