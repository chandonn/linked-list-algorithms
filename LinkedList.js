class Link {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// Traverse the linked list
// Iterative method
function iterativeTraversal(head) {
    let current = head
    while (current !== null) {
        console.log(current.value)
        current = current.next
    }
}

// Recursive method
function recursiveTraversal(head) {
    if (head === null) return
    console.log(head.value)
    recursiveTraversal(head.next)
}

// creating the nodes
const a = new Link("A")
const b = new Link("B")
const c = new Link("C")
const d = new Link("D")

// creating the links
a.next = b
b.next = c
c.next = d

iterativeTraversal(a)
recursiveTraversal(a)