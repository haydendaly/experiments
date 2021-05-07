# Brute Force O(n^3)
def find_prod_brute(arr):
    for i in range(len(arr)):
        for j in range(len(arr)):
            for k in range(len(arr)):
                if j != i and i != k and arr[i] + arr[j] + arr[k] == 2020:
                    return arr[i] * arr[j] * arr[k]
    return -1

# Efficient 3Sum O(n^2)
def find_prod(arr):
    all_nums = set(arr)
    for i in range(len(arr)):
        for j in range(len(arr)):
            if j != i and (2020 - arr[i] - arr[j] in all_nums):
                return (2020 - arr[i] - arr[j]) * arr[i] * arr[j]
    return -1

def to_int(str):
    return int(str)

test_input = [1721, 979, 366, 299, 675, 1456]
input_file = open("inputs/1.txt", "r")
actual_input = list(map(to_int, input_file.read().split("\n")))

print(find_prod(actual_input))
