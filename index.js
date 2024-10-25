class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value){
        const newNode = new Node(value);
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
    }
    dequeue(){
        let temp = this.first;
        this.first= temp.next;
        temp.next  = null;
        this.length--;
    }
}
const queue1 = new Queue(0);
queue1.enqueue(1);
queue1.enqueue(2);
queue1.dequeue();   
console.log(queue1);