#include <iostream>
#include <vector>

using namespace std;

struct Node {
    int val;
    Node *next;

    Node() : val(0), next(nullptr) {}
    Node(int val) : val(val), next(nullptr) {}
    Node(int val, Node* next) : val(val), next(next) {}
};

Node* arrayToLL(vector<int>& nums) {
    if (nums.empty()) return NULL;
    Node *head, *curr;
    head->next = curr;

    for (int num : nums) {
        cout << num << endl;
        Node* temp;
        Node* curr = new Node(num, temp);
        curr = curr->next;
    }

    return head->next;
}

int main() {
    vector<int> test1{ 1, 2, 3, 4, 5, 6, 7, 8 };
    Node* head = arrayToLL(test1);

    while (head) {
        cout << head->val << endl;
        head = head->next;
    }
}