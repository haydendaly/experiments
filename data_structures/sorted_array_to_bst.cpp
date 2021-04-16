#include <iostream>
#include <vector>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int _val) : val(_val), left(nullptr), right(nullptr) {}
};

TreeNode *build(int start, int end, vector<int>& arr) {
    if (start >= end) return NULL;
    int mid = (start + end) / 2;
    TreeNode* root = new TreeNode(mid);
    root->left = build(start, mid, arr);
    root->right = build(mid + 1, end, arr);
    return root;
}

void preorder(TreeNode *root) {
    if (root) {
        cout << root->val << ", ";
        preorder(root->left);
        preorder(root->right);
    }
}

void inorder(TreeNode *root) {
    if (root) {
        inorder(root->left);
        cout << root->val << ", ";
        inorder(root->right);
    }
}

void postorder(TreeNode *root) {
    if (root) {
        postorder(root->left);
        postorder(root->right);
        cout << root->val << ", ";
    }
}

void levelorderHelper(vector<vector<int>> &levels, TreeNode* root, int depth) {
    if (root) {
        if (levels.size() == depth) {
            vector<int> new_level;
            new_level.push_back(root->val);
            levels.push_back(new_level);
        } else {
            levels[depth].push_back(root->val);
        }
        levelorderHelper(levels, root->left, depth + 1);
        levelorderHelper(levels, root->right, depth + 1);
    }
}

void levelorder(TreeNode *root) {
    vector<vector<int>> levels;
    levelorderHelper(levels, root, 0);
    for (int i = 0; i < levels.size(); i++) {
        cout << "Level: " << i << endl;
        for (int j : levels[i]) {
            cout << j << ", ";
        }
        cout << endl;
    }
}

TreeNode *sortedArrayToBST(vector<int>& arr) {
    return build(0, arr.size() + 1, arr);
}

int main () {
    vector<int> arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    TreeNode *root = sortedArrayToBST(arr);

    cout << "Pre Order:" << endl;
    preorder(root);
    cout << endl << "In Order:" << endl;
    inorder(root);
    cout << endl << "Post Order:" << endl;
    postorder(root);
    cout << endl << "Level Order:" << endl;
    levelorder(root);
}