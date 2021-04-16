#include<iostream>
#include<vector>

using namespace std;

vector<int> find_anti_prod(vector<int> data) {
    if (data.size() == 0) return {};
    vector<int> left;

    left.push_back(data[0]);
    for (int i = 1; i < data.size(); i++) {
        left.push_back(data[i] * left[i - 1]);
    }

    int right = 1;
    for (int i = data.size() - 1; i > 0; i--) {
        left[i] = left[i - 1] * right;
        right *= data[i];
    }
    left[0] = right;

    return left;
}

int main() {
    vector<int> test = { 1, 2, 3, 4, 5 };
    vector<int> ans = { 120, 60, 40, 30, 24 };
    // { 0, 60, 40, 30, 24 }

    vector<int> result = find_anti_prod(test);
    for (int i : result) {
        cout << i << endl;
    }
}
