def lexicographic_permutations(n):
    layer = [""]

    for i in range(n):
        next_layer = []
        for prev in layer:
            for j in range(len(prev) + 1):
                next_layer.append(prev[:j] + str(i) + prev[j:])
        layer = next_layer
    return sorted(layer)[1000000 - 1]


if __name__ == "__main__":
    print(lexicographic_permutations(10))
