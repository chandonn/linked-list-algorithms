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

// creating the links
a.next = b
b.next = c
c.next = d

export function printArray(head) {
    const values = []
    // in this case we need a helper function to take care of traversing the nodes
    iterativeTraversal(head, values)
    // recursiveTraversal(head, values)

    // passed by reference, we mutade the values
    return values
}

function iterativeTraversal(head, values) {
    while(head !== null) {
        values.push(head.value)
        head = head.next
    }
}

function recursiveTraversal(head, values) {
    if (head === null) return
    values.push(head.value)
    recursiveTraversal(head.next, values)
}

console.log(printArray(a))