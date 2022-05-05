
//book.ts
export class Books {
  private price: number = 0;
  private books = new Map();
  buy(k: number, n: number) {
    let amount;
    if(this.books.has(k)) {
      amount = this.books.get(k) + n;
    } else {
      amount = 0 + n;
    }
    this.books.set(k, amount);
    this.price += 8 * n;
  }
  get total_price() {
    let discount = 1;
    if(this.books.size == 2) discount = 0.95;
    if(this.books.size == 3) discount = 0.90;
    if(this.books.size == 4) discount = 0.80; 
    if(this.books.size == 5) discount = 0.75;
    return this.price*discount;
  }
}