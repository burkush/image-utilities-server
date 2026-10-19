import { describe, it, expect } from 'vitest';
import { parseWidth } from './index';

describe('parseWidth', () => {
  it('accepts a valid number', () => {
    expect(parseWidth('800')).toBe(800);
  });

  it('rejects a negative number', () => {
    expect(() => parseWidth('-5')).toThrow();
  });
});
