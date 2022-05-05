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

describe('testSimpleDiscounts', () => {
  let books: Books;

  beforeEach(() => {
    books = new Books();
  });
  test('buy 0, 1', () => {
    books.buy(0, 1);
    books.buy(1, 1);
    expect(books.total_price).toBe(8*2*0.95);
  });

  test('buy 0, 2, 4', () => {
    books.buy(0, 1);
    books.buy(2, 1);
    books.buy(4, 1);
    expect(books.total_price).toBe(8*3*0.9);
  });

  test('buy 0, 1, 2, 4', () => {
    books.buy(0, 1);
    books.buy(1, 1);
    books.buy(2, 1);
    books.buy(4, 1);
    expect(books.total_price).toBe(8*4*0.8);
  });

  test('buy 0, 1, 2, 3, 4', () => {
    books.buy(0, 1);
    books.buy(1, 1);
    books.buy(2, 1);
    books.buy(3, 1);
    books.buy(4, 1);
    expect(books.total_price).toBe(8*5*0.75);
  });
});

describe('testSeveralDiscounts', () => {
  let books: Books;

  beforeEach(() => {
    books = new Books();
  });
  test('buy 0, 0, 1', () => {
    books.buy(0, 1);
    books.buy(0, 1);
    books.buy(1, 1);
    expect(books.total_price).toBe(8*2*0.95+8);
  });

  test('buy 0, 0, 1, 1', () => {
    books.buy(0, 2);
    books.buy(1, 2);
    expect(books.total_price).toBe(8*2*0.95*2);
  });

  test('buy 0, 0, 1, 2, 2, 3', () => {
    books.buy(0, 2);
    books.buy(1, 1);
    books.buy(2, 2);
    books.buy(3, 1);
    expect(books.total_price).toBe(8*4*0.8+8*2*0.95);
  });

  test('buy 0, 1, 1, 2, 3, 4', () => {
    books.buy(0, 1);
    books.buy(1, 2);
    books.buy(2, 1);
    books.buy(3, 1);
    books.buy(4, 1);
    expect(books.total_price).toBe(8*5*0.75+8);
  });
});


