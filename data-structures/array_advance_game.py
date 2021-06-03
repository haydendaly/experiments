def greedy_advance(arr):
    i, length = 0, len(arr)
    while i < length - 1 and arr[i] != 0:
        i += arr[i]
    return i == length - 1

def arr_advance(arr):
    furthest, last, i = 0, len(arr) - 1, 0
    while i <= furthest and furthest < last:
        furthest = max(furthest, arr[i] + i)
        i += 1
    return furthest >= last

if __name__ == '__main__':
    arr = [3,3,1,0,2,0,1]
    # arr = [1, 1, 1, 2, 0, 1]
    print(arr_advance(arr))