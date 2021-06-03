def find_missing(x, y):
    return list(set(x) - set(y))[0]

def find_missing_2(x, y):
    sum1, sum2 = 0, 0
    for num in x:
        sum1 += num
    for num in y:
        sum2 += num
    return sum1 - sum2
    
def find_missing_3(x, y):
    xor_sum = 0
    for num in x:
        xor_sum ^= num
    for num in y:
        xor_sum ^= num
    return xor_sum

if __name__ == '__main__':
    arr1 = [4, 5, 7, 9, 10]
    arr2 = [4, 7, 9, 10]
    print(find_missing_3(arr1, arr2))