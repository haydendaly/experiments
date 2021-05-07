def find_valid_combos(arr):
    valid = 0
    for seq in arr:
        seq = seq.split(" ")
        lower_str, upper_str = seq[0].split("-")
        lower, upper = to_int(lower_str), to_int(upper_str)
        letter = seq[1][0]
        passwd = seq[2]

        occur = 0
        for char in passwd:
            if char == letter:
                occur += 1
        if occur <= upper and occur >= lower:
            valid += 1

    return valid

def find_valid_combos_2(arr):
    valid = 0
    for seq in arr:
        seq = seq.split(" ")
        lower_str, upper_str = seq[0].split("-")
        lower, upper = to_int(lower_str), to_int(upper_str)
        letter = seq[1][0]
        passwd = seq[2]

        if len(passwd) >= upper and ((letter == passwd[lower-1] and letter != passwd[upper-1]) or (letter != passwd[lower-1] and letter == passwd[upper-1])):
            valid += 1

    return valid

def to_int(str):
    return int(str)

input_file = open("inputs/2.txt", "r")
actual_input = input_file.read().split("\n")

print(find_valid_combos_2(actual_input))