from heapq import heappop, heappush, heapify


def triangle(n):
    return n * (n + 1) // 2


def pentagonal(n):
    return n * ((3 * n) - 1) // 2


def hexagonal(n):
    return n * ((2 * n) - 1)


def find_seq_intersection():
    h = [(40755, 285, 0), (40755, 165, 1), (40755, 143, 2)]
    heapify(h)
    seqs = [(triangle, set()), (pentagonal, set()), (hexagonal, set())]

    curr = -1
    while not all([curr in seq for _, seq in seqs]):
        curr, seq_i, i = heappop(h)
        next_num = seqs[i][0](seq_i + 1)
        seqs[i][1].add(next_num)
        heappush(h, (next_num, seq_i + 1, i))

    return curr


if __name__ == "__main__":
    print(find_seq_intersection())
