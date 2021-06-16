def look_and_say(n):
    def las_subroutine(old):
        result = []
        i = 0
        while i < len(old):
            count = 1
            while i + 1 < len(old) and old[i] == old[i + 1]:
                i += 1
                count += 1
            result.append(str(count) + old[i])
            i += 1
        return ''.join(result)
    curr = '1'
    for _ in range(n):
        curr = las_subroutine(curr)
    return curr

def spreadsheet_encode_column(col_str):
    num = 0
    count = len(col_str) - 1
    for s in col_str:
        num += 26**count * (ord(s) - ord('A') + 1)
        count -= 1
    return num

def is_palindrome(str):
    l = len(str)
    for i in range(l // 2 + 1):
        if str[i] != str[l - i - 1]:
            return False
    return True

def is_palindrome_2(str):
    return str == str[::-1]

def is_anagram(s1, s2):
    chars = dict()
    if len(s1) != len(s2):
        return False
    for i in s1:
        if i in chars:
            chars[i] += 1
        else:
            chars[i] = 1
    for i in s2:
        if i in chars:
            chars[i] -= 1
        else:
            chars[i] = 1
    for i in chars:
        if chars[i] != 0:
            return False
    return True

def is_palindrome_permutation(str):
    str = str.replace(" ", "")
    str = str.lower()
    d = dict()
    for i in str:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1
    odd_count = 0
    for k, v in d.items():
        if v % 2 != 0 and odd_count == 0:
            odd_count += 1
        elif v % 2 != 0 and odd_count != 0:
            return False
    return True

def is_permutation(str1, str2):
    d = dict()
    for char in str1:
        if char in d:
            d[char] += 1
        else:
            d[char] = 1
    for char in str2:
        if char not in d:
            return False
        else:
            d[char] -= 1
    for k, v in d.items():
        if v != 0:
            return False
    return True

def is_unique_str(str):
    s = set()
    for char in str:
        if char in s:
            return False
        else:
            s.add(char)
    return True

def string_to_int(str):
    result = 0
    is_neg = str[0] == '-'
    if is_neg:
        str = str[1:]
    for s in str:
        result *= 10
        result += ord(s) - 48
    return -1 * result if is_neg else result

if __name__ == '__main__':
    print(spreadsheet_encode_column("ZZ"))
    print(is_palindrome("racercar"))
    print(is_palindrome_2("racercar"))
    print(is_anagram("hello", "ohlel"))
    print(is_palindrome_permutation("tact coa"))
    print(is_permutation("google", "ooggle"))
    print(is_unique_str("abcdefg"))
    print(string_to_int("-128"))