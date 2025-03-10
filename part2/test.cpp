#include <iostream>
#include <queue>
#include <cmath>
using namespace std;

class BTreeNode {
    int *keys;      // Array of keys
    int t;          // Minimum degree (maximum keys = 2t-1)
    BTreeNode **C;  // Array of child pointers
    int n;          // Current number of keys
    bool leaf;      // True if the node is a leaf

public:
    BTreeNode(int _t, bool _leaf) {
        t = _t;
        leaf = _leaf;
        keys = new int[2 * t - 1]; // Maximum keys = 2t-1
        C = new BTreeNode *[2 * t]; // Maximum children = 2t
        n = 0; // Initially no keys
    }

    void insertNonFull(int k) {
        int i = n - 1;

        if (leaf) {
            while (i >= 0 && keys[i] > k) {
                keys[i + 1] = keys[i];
                i--;
            }
            keys[i + 1] = k;
            n++;
        } else {
            while (i >= 0 && keys[i] > k)
                i--;

            if (C[i + 1]->n == 2 * t - 1) {
                splitChild(i + 1, C[i + 1]);

                if (keys[i + 1] < k)
                    i++;
            }
            C[i + 1]->insertNonFull(k);
        }
    }

    void splitChild(int i, BTreeNode *y) {
        BTreeNode *z = new BTreeNode(y->t, y->leaf);
        z->n = t - 1;

        for (int j = 0; j < t - 1; j++)
            z->keys[j] = y->keys[j + t];

        if (!y->leaf) {
            for (int j = 0; j < t; j++)
                z->C[j] = y->C[j + t];
        }

        y->n = t - 1;

        for (int j = n; j >= i + 1; j--)
            C[j + 1] = C[j];

        C[i + 1] = z;

        for (int j = n - 1; j >= i; j--)
            keys[j + 1] = keys[j];

        keys[i] = y->keys[t - 1];
        n++;
    }

    BTreeNode *search(int k) {
        int i = 0;
        while (i < n && k > keys[i])
            i++;

        if (i < n && keys[i] == k)
            return this;

        if (leaf)
            return NULL;

        return C[i]->search(k);
    }

    void levelOrderTraversal() {
        queue<BTreeNode *> q;
        q.push(this);

        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                BTreeNode *node = q.front();
                q.pop();
                cout << "[";
                for (int j = 0; j < node->n; j++) {
                    cout << node->keys[j];
                    if (j < node->n - 1)
                        cout << ",";
                }
                cout << "] ";
                if (!node->leaf) {
                    for (int j = 0; j <= node->n; j++) {
                        if (node->C[j])
                            q.push(node->C[j]);
                    }
                }
            }
            cout << endl;
        }
    }

    friend class BTree;
};

class BTree {
    BTreeNode *root;
    int t;

public:
    BTree(int m) {
        root = NULL;
        t = (m+1/2);
    }

    void insert(int k) {
        if (root == NULL) {
            root = new BTreeNode(t, true);
            root->keys[0] = k;
            root->n = 1;
        } else {
            if (root->n == 2 * t - 1) {
                BTreeNode *s = new BTreeNode(t, false);
                s->C[0] = root;
                s->splitChild(0, root);

                int i = 0;
                if (s->keys[0] < k)
                    i++;
                s->C[i]->insertNonFull(k);

                root = s;
            } else {
                root->insertNonFull(k);
            }
        }
    }

    void levelOrderTraversal() {
        if (root != NULL)
            root->levelOrderTraversal();
    }

    bool search(int k) {
        return (root == NULL) ? false : (root->search(k) != NULL);
    }
};

int main() {
    int T;
    cin >> T;
    while (T--) {
        int m, N, Q;
        cin >> m >> N;
        BTree t(m);  // The constructor will now use t=2
        for (int i = 0; i < N; i++) {
            int key;
            cin >> key;
            t.insert(key);
        }
        t.levelOrderTraversal();

        cin >> Q;
        for (int i = 0; i < Q; i++) {
            int key;
            cin >> key;
            if (t.search(key))
                cout << key << " Found" << endl;
            else
                cout << key << " Not Found" << endl;
        }
    }
    return 0;
}