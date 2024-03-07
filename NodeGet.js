class Link {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// creating the nodes
const a = new Link(2)
const b = new Link(20)
const c = new Link(16)
const d = new Link(45)
const e = new Link(12)
const f = new Link(95)
const g = new Link(3)
const h = new Link(55)

// creating the links
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h

// find the node at the target index, if there is any
function nodeGetIterative(head, position) {
    // the base case is in the LIST not in the POSITION
    let count = 0
    while (head !== null) {
        if (count === position) return head.value
        head = head.next
        count++
    }

    return null
}

function nodeGetRecursive(head, position) {
    if (head === null) return null
    if (position === 0) return head.value

    return nodeGetRecursive(head.next, position - 1)
}

console.log(nodeGetIterative(a, 3))
console.log(nodeGetRecursive(a, 3))

console.log(nodeGetIterative(a, 6))
console.log(nodeGetRecursive(a, 6))

console.log(nodeGetIterative(a, 2))
console.log(nodeGetRecursive(a, 2))