def naming_scores(names):
    total = 0
    names.sort()
    for i, name in enumerate(names):
        score = 0
        for char in name:
            score += ord(char) - 64
        total += score * (i + 1)
    return total


if __name__ == "__main__":
    names = [name[1:-1] for name in open("inputs/22.txt").read().split(",")]
    print(naming_scores(names))
