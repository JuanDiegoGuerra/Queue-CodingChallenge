// Start with your code from LinkedList challenge.

class Queue {
  constructor() {
    this.numbers = {};
    this.head = 0;
    this.tail = 0;
  }
  add(number) {
    // your code here
    this.numbers[this.tail] = number;
    this.tail++;
  }
  
  remove() {
    // your code here
    if (this.tail - this.head !== 0) {
    const item = this.numbers[this.head];
    delete this.numbers[this.head];
    this.head++;
    return item;
    } else {
    return -1; }
  }
  
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
