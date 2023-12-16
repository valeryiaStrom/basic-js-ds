const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */


class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = insertNode(this.head, data);

    function insertNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;

      if (data < node.data) {
        node.left = insertNode(node.left, data)
      } else {
        node.right = insertNode(node.right, data);
      }

      return node;
    }
  }


  has(data) {
    return searchNode(this.head, data);

    function searchNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNodeData(this.head, data);

    function findNodeData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      if (data < node.data) {
        return findNodeData(node.left, data);
      } else {
        return findNodeData(node.right, data);
      }
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
