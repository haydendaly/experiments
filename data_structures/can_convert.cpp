bool canConvert(string str1, string str2) {
    if (str1 == str2) return true;
    if (str1.size() != str2.size()) return false;
    
    unordered_map<char, char> table;
    for (int i = 0; i < str1.size(); i++) {
        char char1 = str1.at(i), char2 = str2.at(i);
        if (table.count(char1) && table[char1] != char2)
            return false;
        table[char1] = char2;
    }
    
    unordered_set<char> vals;
    for (auto const& [key, val] : table) vals.insert(val);
    return vals.size() < 26;
}