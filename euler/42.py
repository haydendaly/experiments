def get_word_value(word):
    word_value = 0
    for char in word:
        word_value += ord(char) - 64
    return word_value


def count_triangle_words(words):
    triangle_set = set()
    upper_limit = 26 * max([len(word) for word in words]) * 5
    curr = 0
    i = 1
    while curr < upper_limit:
        curr = i * (i + 1) // 2
        triangle_set.add(curr)
        i += 1

    count = 0
    for word in words:
        word_value = get_word_value(word)
        if word_value in triangle_set:
            count += 1
    return count


if __name__ == "__main__":
    words = [word[1:-1] for word in open("inputs/42.txt").read().split(",")]
    print(count_triangle_words(words))
