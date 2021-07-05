import unittest

def find_closest_after(depart_time, buses):
    closest_bus = None
    closest_t = float('inf')
    for bus in buses:
        t = 0
        while t < depart_time:
            t += bus
        if t - depart_time < closest_t:
            closest_t = t - depart_time
            closest_bus = bus
    return closest_bus * closest_t

def clean_data(input_file):
    contents = input_file.split('\n')
    depart_time = int(contents[0])
    buses = contents[1].split(',')
    valid_buses = []
    for bus in buses:
        if bus != 'x':
            valid_buses.append(int(bus))
    return (depart_time, valid_buses)

if __name__ == '__main__':
    input_file = open("inputs/13.txt", "r").read()
    depart_time, buses = clean_data(input_file)
    print(find_closest_after(depart_time, buses))

class TestInputs(unittest.TestCase):
    test_input, actual_result = "", 0

    def test_example(self):
        test_result = 0
        self.assertEqual(test_result, self.actual_result)
