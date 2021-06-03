def find_intersection(arr1, arr2):
    set1 = set(arr1)
    set2 = set(arr2)
    return list(set2.intersection(set1))

def find_intersection_iter(arr1, arr2):
    result = set()
    i, j = 0, 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] == arr2[j]:
            result.add(arr1[i])
            i += 1
            j += 1
        elif arr1[i] < arr2[j]:
            i += 1
        else:
            j += 1
    return list(result)

if __name__ == '__main__':
    A = [2, 3, 3, 5, 7, 11]
    B = [3, 3, 7, 15, 31]
    print(find_intersection_iter(A, B))