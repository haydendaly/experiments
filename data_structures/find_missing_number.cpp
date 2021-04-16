#include <iostream>
#include <vector>

using namespace std;

int findMissing (vector<int> arr) {
    int total = (arr.size() + 1) * (arr.size() + 2) / 2, sum = 0;
    for (int i : arr) sum += i;
    return total - sum;
}

int main () {
    vector<int> test1{ 1, 2, 3, 4, 5, 6, 7, 8, 10 };
    cout << findMissing(test1) << endl;
}