// game.spec.ts
import { Books } from './book';

describe('Buy', () => {
  let buy: Books;

  beforeEach(() => {
    buy = new Books();
  });

  it('should create an instance', () => {
    expect(buy).toBeTruthy();
  });

  test('buy one', () => {
    buy(1);
    expect(buy.price).toBe(100);
  });

});
