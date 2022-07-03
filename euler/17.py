num_to_word = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    0: ""
}


def num_to_str_len(num):
    char_count = 0
    if num == 1000:
        # no space
        return len("onethousand")
    ones = num % 10
    tens = (num % 100) - ones
    hundreds = num - tens - ones
    if tens < 20:
        char_count += len(num_to_word[tens + ones])
    else:
        char_count += len(num_to_word[tens])
        char_count += len(num_to_word[ones])
    if hundreds:
        char_count += len(num_to_word[hundreds / 100])
        char_count += len("hundred")
        if tens or ones:
            char_count += len("and")
    return char_count


def num_letter_count(limit=5):
    total = 0
    for i in range(1, limit + 1):
        total += num_to_str_len(i)
    return total


if __name__ == "__main__":
    print(num_letter_count(1000))
