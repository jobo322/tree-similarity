import { describe, it, expect } from 'vitest';

import { createTree } from '../createTree';

describe('simple trees', () => {
  it('two peaks, same height', () => {
    let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let y = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
    let tree = createTree({ x, y });

    expect(tree.center).toBe(5);
    expect(tree.sum).toBe(2);

    let left = tree.left;
    expect(left.center).toBe(3);
    expect(left.sum).toBe(1);
    expect(left.left).toStrictEqual(null);
    expect(left.right).toStrictEqual(null);

    let right = tree.right;
    expect(right.center).toBe(7);
    expect(right.sum).toBe(1);
    expect(right.left).toStrictEqual(null);
    expect(right.right).toStrictEqual(null);
  });

  it('two peaks, same height (higher)', () => {
    let x = new Array(101);
    let y = new Array(101);
    for (let i = 0; i < 101; i++) {
      x[i] = i;
      y[i] = 0;
    }
    y[20] = 20;
    y[80] = 20;

    let tree = createTree({ x, y });

    expect(tree.center).toBe(50);
    expect(tree.sum).toBe(40);

    let left = tree.left;
    expect(left.center).toBe(20);
    expect(left.sum).toBe(20);
    expect(left.left).toStrictEqual(null);
    expect(left.right).toStrictEqual(null);

    let right = tree.right;
    expect(right.center).toBe(80);
    expect(right.sum).toBe(20);
    expect(right.left).toStrictEqual(null);
    expect(right.right).toStrictEqual(null);
  });
});
