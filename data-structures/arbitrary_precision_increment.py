def increment(arr):
    i = len(arr) - 1
    while i >= 0:
        if arr[i] < 9:
            arr[i] += 1
            return arr
        else:
            arr[i] = 0
            i -= 1
    arr.insert(0, 1)
    return arr

if __name__ == '__main__':
    arr1 = [1, 4, 9]
    arr2 = [9, 9, 9]
    print(increment(arr1))
    print(increment(arr2))