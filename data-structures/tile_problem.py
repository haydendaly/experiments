# given length n, how many different ways can you fit tiles of size 1 and 2?
def find_ways(n):
    prev, curr = 0, 1
    for i in range(n):
        temp = curr
        curr = curr + prev
        prev = temp
    return curr
