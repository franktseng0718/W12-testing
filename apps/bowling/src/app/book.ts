
//book.ts
export class Books {
  private price: number = 0;
  //private max: number = 0;
  private books:number[] = new Array(5).fill(0);
  buy(k: number, n: number) {
    
    this.books[k]+=n;
    
    //this.price += 8 * n;
  }
  get total_price() {
    let discount = 1;
    let count:number[] = new Array();
    this.books.sort();
    let start = 0;
    for (let i = 0; i < 5; i++) {
      for(let j = start; j < this.books[i]; j++){
        count.push(5-i);
      }
      start = this.books[i];
    }
    
    for(let i=0;i<count.length;i++) {
      if (i != count.length && count[i] == 5 && count[i+1] == 3){
        this.price += 2 * 8 * 4 * 0.8;
        i++;
      } 
      else if (count[i] == 5) this.price += 8*5*0.75;
      else if (count[i] == 4) this.price += 8*4*0.8;
      else if (count[i] == 3) this.price += 8*3*0.9;
      else if (count[i] == 2) this.price += 8*2*0.95;
      else if (count[i] == 1) this.price += 8;
    }
    return this.price;
  }
}