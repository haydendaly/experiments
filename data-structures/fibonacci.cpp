#include<iostream>

using namespace std;

int fib(int n) {
    int a = 1;
    int b = 1;
    for (int i = 2; i < n; i++) {
        a = (b += a) - a;
    }
    return b;
}

int main() {
    cout << fib(7) << endl;
}