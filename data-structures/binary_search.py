def binary_search_iterative(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return True
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return False

def binary_search_recursive(data, target, low, high):
    if low > high:
        return False
    else:
        mid = (low + high) // 2
        if data[mid] == target:
            return True
        elif data[mid] < target:
            return binary_search_recursive(data, target, mid + 1, high)
        else:
            return binary_search_recursive(data, target, low, mid - 1)

def find_closest(data, target):
    min_diff = float('inf')
    low = 0
    high = len(data) - 1
    closest = None
    while low <= high:
        mid = (low + high) // 2
        diff = abs(data[mid] - target)
        if diff < min_diff:
            min_diff = diff
            closest = data[mid]
        if mid > 0:
            left = abs(data[mid - 1] - target)
        if mid + 1 < len(data):
            right = abs(data[mid + 1] - target)
        if data[mid] < target:
            low = mid + 1
        elif data[mid] > target: 
            high = mid - 1
            if high < 0:
                return data[mid]
        else:
            return data[mid]
    return closest

def find_fixed_point(data):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == mid:
            return mid
        elif data[mid] < mid:
            low = mid + 1
        else:
            high = mid - 1
    return -1
    
def find_bitonic_peak(data):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        left = data[mid - 1] if mid > 0 else float('inf')
        right = data[mid + 1] if mid < len(data) - 2 else -float('inf')
        if left < data[mid] and data[mid] > right:
            return data[mid]
        elif left > right:
            high = mid - 1
        else:
            low = mid + 1
    return -1

def find_first_duplicate(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target and (mid == 0 or data[mid - 1] != target):
            return mid
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

def integer_square_root(n):
    low = 0
    high = n
    while low <= high:
        mid = (low + high) // 2
        guess = mid * mid
        if guess == n:
            return mid
        elif guess <= n:
            low = mid + 1
        else:
            high = mid - 1
    return low - 1

def find_start_of_cyclically_shifted_array(data):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] > data[low]:
            low = mid + 1
        else:
            high = mid - 1
    return high

if __name__ == '__main__':
    # Binary Search
    data = [2,4,5,7,8,9,12,14,17,19,22,25,27,28,33,37]
    target = 37
    # print(binary_search_iterative(data, target))
    # print(binary_search_recursive(data, target, 0, len(data) - 1))

    # Find Closest Number in Array
    data1 = [1, 2, 4, 5, 6, 6, 8, 9]
    data2 = [2, 5, 6, 7, 8, 8, 9]
    # print(find_closest(data1, 11))
    # print(find_closest(data2, 4))

    # Find Fixed Point (arr[i] == i)
    data1 = [-10, -5, 0, 3, 7]
    data2 = [0, 2, 5, 8, 17]
    # print(find_fixed_point(data1))
    # print(find_fixed_point(data2))

    # Find Bitonic Peak
    data1 = [1, 2, 3, 4, 5, 4, 3, 2, 1]
    data2 = [1, 6, 5, 4, 3, 2, 1]
    # print(find_bitonic_peak(data1))
    # print(find_bitonic_peak(data2))

    # Find First Duplicate
    data = [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401]
    target = 108
    # print(find_first_duplicate(data, target))

    # Integer Square Root
    # print(integer_square_root(300))
    # print(integer_square_root(12))

    # Find Cyclically Shifted Array Start
    data = [4, 5, 6, 7, 1, 2, 3]
    print(find_start_of_cyclically_shifted_array(data))