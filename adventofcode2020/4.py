import unittest
import re

def count_valid_passports(arr):
    valid_subset = { "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" }
    valid = 0
    
    for passport_set in arr:
        if valid_subset.issubset(passport_set):
            valid += 1

    return valid

def clean_data(seq):
    seq = seq.replace("\n", " ")
    arr = seq.split(" ")
    keys = [pair.split(":")[0] for pair in arr]
    return set(keys)

def count_valid_passports_2(arr):
    valid_subset = { "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" }
    valid_ecl = { "amb", "blu", "brn", "gry", "grn", "hzl", "oth" }
    valid = 0
    hex_regex = re.compile("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
    
    for passport in arr:
        if valid_subset.issubset(set(passport.keys())):
            try:
                byr = int(passport['byr'])
                iyr = int(passport['iyr'])
                eyr = int(passport['eyr'])
                hgt = (int(passport['hgt'][:-2]), passport['hgt'][-2:])

                valid_years = (byr >= 1920 and byr <= 2002 and 
                                iyr >= 2010 and iyr <= 2020 and 
                                eyr >= 2020 and eyr <= 2030)
                valid_hgt = (hgt[0] >= 150 and hgt[0] <= 193) if hgt[1] == 'cm' else (hgt[0] >= 59 and hgt[0] <= 76)
                valid_col = re.search(hex_regex, passport['hcl']) and passport['ecl'] in valid_ecl
                valid_pid = len(passport['pid']) == 9

                if valid_years and valid_hgt and valid_col and valid_pid:
                    valid += 1
            except BaseException as e:
                pass

    return valid

def clean_data_2(input_file):
    def clean_row(seq):
        seq = seq.replace("\n", " ")
        arr = seq.split(" ")
        keys = dict([(pair.split(":")[0], pair.split(":")[1]) for pair in arr])
        return keys
    return list(map(clean_row, input_file.split("\n\n")))

if __name__ == '__main__':
    input_file = open("inputs/4.txt", "r").read()
    actual_input = clean_data_2(input_file)

    print(count_valid_passports_2(actual_input))

class TestInputs(unittest.TestCase):
    def test_example(self):
        actual_input = clean_data_2(test_input)
        result = count_valid_passports_2(actual_input)
        self.assertEqual(result, 2)

test_input = """ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in"""