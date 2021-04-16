#include <iostream>
#include <vector>
#include<unordered_set>

vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
    unordered_set<int> hashset;
    for (int i : nums1) hashset.insert(i);
    vector<int> result;
    for (int i : nums2) {
        if (hashset.count(i)) {
            hashset.erase(i);
            result.push_back(i);
        }
    }
    return result;
}