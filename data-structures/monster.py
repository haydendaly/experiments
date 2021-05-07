def numsRollsToTarget(d, f, target):
    faces = [i for i in range(1, f + 1)]
    cache = {}
    def dfs(left, k):
        result = 0
        if (left, k) in cache:
            return cache[(left, k)]
        if left > f*(d - k):
            cache[(left, k)] = 0
            return 0
        if k == d:
            return 1 if left == 0 else 0
        else:
            for face in faces:
                k += 1
                if left - face >= 0:
                    result += dfs(left - face, k)
                k -= 1
            cache[(left, k)] = result
            return result
    return dfs(target, 0) / ((f + 1)**d)

if __name__ == '__main__':
    print(numsRollsToTarget(3, 1, 2))