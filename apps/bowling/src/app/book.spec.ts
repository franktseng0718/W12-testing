// game.spec.ts
import { Books } from './book';

describe('testBasics', () => {
  let books: Books;

  beforeEach(() => {
    books = new Books();
  });

  it('should create an instance', () => {
    expect(books).toBeTruthy();
  });

  test('empty', () => {
    //books.buy(1, 1);
    expect(books .total_price).toBe(0); 
  });

  test('buy 1', () => {
    books.buy(1, 1);
    expect(books.total_price).toBe(8);
  });

  test('buy 2', () => {
    books.buy(2, 1);
    expect(books.total_price).toBe(8);
  });

  test('buy 3', () => {
    books.buy(3, 1);
    expect(books.total_price).toBe(8);
  });

  test('buy 4', () => {
    books.buy(4, 1);
    expect(books.total_price).toBe(8);
  });

  test('buy 1*3', () => {
    books.buy(1, 3);
    expect(books.total_price).toBe(24);
  });
});
