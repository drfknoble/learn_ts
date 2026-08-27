// Constructors & properties
// class Counter {
//   constructor(public value: number) {}
// }
// console.log(new Counter(3).value);
// Output: 3

// Methods
// class CounterWithMethod {
//   constructor(public value: number) {}
//   increment(): void {
//     this.value += 1;
//   }
// }
// const counter = new CounterWithMethod(3);
// counter.increment();
// console.log(counter.value);
// Output: 4

// Inheritance
// class BaseCounter {
//   constructor(public value: number) {}
//   increment(): void {
//     this.value += 1;
//   }
// }
// class SteppedCounter extends BaseCounter {
//   increment(): void {
//     this.value += 2;
//   }
// }
// const stepped = new SteppedCounter(0);
// stepped.increment();
// console.log(stepped.value);
// Output: 2

// Access modifiers
// class Account {
//   private balance = 0;
//   deposit(amount: number): void {
//     this.balance += amount;
//   }
// }
// const account = new Account();
// account.deposit(50);
// console.log(account);
// Output: Account { balance: 50 }
