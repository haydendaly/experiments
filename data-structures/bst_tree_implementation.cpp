#include <vector>
#include <iostream>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

TreeNode* build(int start, int end, vector<int>& nums) {
    if (start >= end) return NULL;
    int mid = (start + end) / 2;
    TreeNode* temp = new TreeNode(nums[mid]);
    temp->left = build(start, mid, nums);
    temp->right = build(mid + 1, end, nums);
    return temp;
}

TreeNode* sortedArrayToBST(vector<int>& nums) {   
    return build(0, nums.size(), nums);
}

void inorder (TreeNode* root) {
    if (root->left) inorder(root->left);
    cout << root->val << endl;
    if (root->right) inorder(root->right);
}

void preorder (TreeNode* root) {
    cout << root->val << endl;
    if (root->left) preorder(root->left);
    if (root->right) preorder(root->right);
}

void postorder (TreeNode* root) {
    if (root->left) postorder(root->left);
    if (root->right) postorder(root->right);
    cout << root->val << endl;
}

int main () {
    vector<int> test1{ 1, 2, 3, 4, 5, 6, 7, 8 };
    TreeNode* root = sortedArrayToBST(test1);

    cout << "In Order:" << endl;
    inorder(root);
    cout << "Pre Order:" << endl;
    preorder(root);
    cout << "Post Order:" << endl;
    postorder(root);
}