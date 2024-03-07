import { printArray } from "./PrintArray.js"

class Link {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// creating the nodes
const a = new Link("A")
const b = new Link("B")
const c = new Link("C")
const d = new Link("D")
const e = new Link("E")
const f = new Link("F")
const g = new Link("G")
const h = new Link("H")

// creating the links
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h

// reverse the linked list and return the new head. Should return the previous tail as the new head
// we need to start at the end, so the first item is a null reference to next
// the traversal stops when head is null as usually
function reverseListIterative(head) {
    let previous = null
    while (head !== null) {
        const next = head.next
        head.next = previous
        previous = head
        head = next
    }

    return previous.value
}

function reverseListRecursive(head, previous = null) {
    if (head === null) return previous
    const next = head.next
    head.next = previous
    previous = head
    return reverseListIterative(next, previous)
}
// before
console.log(printArray(a))

// console.log("ITERATIVE ", reverseListIterative(a))
console.log("RECURSIVE ", reverseListRecursive(a))
// after
console.log(printArray(h))