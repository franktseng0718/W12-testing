
//book.ts
export class Books {
  private price: number = 0;
  buy(k: number, n: number) {
    this.price += 8 * n;
  }
  get total_price() {
    return this.price;
  }
}