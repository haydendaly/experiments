def find_parity_old(num):
  num_bits = 0
  while num:
    num_bits += num & 1
    num >>= 1
  return num_bits % 2

def find_parity(num):
    result = 0
    while num:
        result ^= 1
        num &= num - 1
    return result

print(find_parity(11))