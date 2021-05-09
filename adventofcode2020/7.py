import unittest

def iterate_bags_1(bags):
    result = 0
    def contain_shiny_gold(key):
        if key == "shinygold":
            return True
        else:
            return any(contain_shiny_gold(c) for c in bags[key])
    for key in bags:
        if contain_shiny_gold(key):
            result += 1
    return result - 1

def iterate_bags_2(bags):
    def count_bags(key):
        return 1 + sum(count*count_bags(c) for c, count in bags[key].items())
    return count_bags("shinygold") - 1

def clean_data(input_file):
    rules = {}
    for row in input_file.split(".\n"):
        bag = row.replace("bags", "").replace("bag", "").replace(".", "").split("contain")
        sub_bags = bag[1].split(",")
        clean_dict = {}
        for rule in sub_bags:
            if not "no other" in rule:
                clean_dict["".join(rule.split(" ")[2:])] = int(rule.split(" ")[1])
        rules[bag[0].replace(" ", "")] = clean_dict
    return rules

if __name__ == '__main__':
    input_file = open("inputs/7.txt", "r").read()
    bags = clean_data(input_file)
    print(iterate_bags_1(bags))
    print(iterate_bags_2(bags))

class TestInputs(unittest.TestCase):
    test_input_1, actual_result_1 = """light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.""", 4
    test_input_2, actual_result_2 = """shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.""", 126

    def test_example_1(self):
        clean_input = clean_data(self.test_input_1)
        test_result = iterate_bags_1(clean_input)
        self.assertEqual(test_result, self.actual_result_1)

    def test_example_2(self):
        clean_input = clean_data(self.test_input_2)
        test_result = iterate_bags_2(clean_input)
        self.assertEqual(test_result, self.actual_result_2)