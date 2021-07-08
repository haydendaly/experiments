def mask(val, bitmask):
    result = 0
    val_bin = bin(val)[2:]
    l = len(val_bin) - 1
    pow_2 = 1
    for i in range(36):
        if bitmask[35-i] == '1' or (bitmask[35-i] == 'X' and l + 1 > i and val_bin[l - i] == '1'):
            # print(pow_2)
            result += pow_2
        pow_2 *= 2
    return result

def find_memory_sum(input_file):
    rows = input_file.split("\n")
    mem = {}
    bitmask = None

    for row in rows:
        if row[0:4] == 'mask':
            bitmask = row.split(" ")[2]
        elif row[0:3] == 'mem':
            strs = row.split("] = ")
            key = strs[0][4:]
            val = int(strs[1])
            mem[key] = mask(val, bitmask)
    
    result = 0
    for _, val in mem.items():
        result += val
    return result

def mask_key(key, bitmask):
    keys = [0]
    key_bin = bin(key)[2:]
    l = len(key_bin) - 1
    pow_2 = 1
    for i in range(36):
        keys_l = len(keys)
        if bitmask[35 - i] == '1' or (bitmask[35 - i] == '0' and l + 1 > i and key_bin[l - i] == '1'):
            for i in range(keys_l):
                keys[i] += pow_2
        elif bitmask[35 - i] == 'X':
            for i in range(keys_l):
                keys.append(keys[i] + pow_2)
        pow_2 *= 2
    return keys

def find_memory_sum_2(input_file):
    rows = input_file.split("\n")
    mem = {}
    bitmask = None

    for row in rows:
        if row[0:4] == 'mask':
            bitmask = row.split(" ")[2]
        elif row[0:3] == 'mem':
            strs = row.split("] = ")
            key = int(strs[0][4:])
            val = int(strs[1])
            keys = mask_key(key, bitmask)
            for gen_key in keys:
                mem[gen_key] = val
    
    result = 0
    for _, val in mem.items():
        result += val
    return result

if __name__ == '__main__':
    input_file = open("inputs/14.txt", "r").read()
    print(find_memory_sum_2(input_file))