def two_sum(arr, target):
    seen = {}
    for num in arr:
        if target - num in seen and (target - num != num or seen[num] > 1):
            return True
        else:
            if num in seen:
                seen[num] += 1
            else:
                seen[num] = 1
    return False

def two_sum_sort(arr, target):
    arr.sort()
    i, j = 0, len(arr) - 1
    while i < j:
        if arr[i] + arr[j] == target:
            return True
        elif arr[i] + arr[j] < target:
            i += 1
        else:
            j -= 1
    return False

if __name__ == '__main__':
    arr = [-2, 1, 2, 4, 7, 11]
    print(two_sum(arr, 13))
    print(two_sum_sort(arr, 13))