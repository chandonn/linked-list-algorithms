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

// find the target node 
function nodeFindIterative(head, target) {
    while (head !== null) {
        if (head.value === target) return true
        head = head.next
    }

    return false
}

function nodeFindRecursive(head, target) {
    if (head === null) return false
    if (head.value === target) return true

    return nodeFindRecursive(head.next, target)
}

console.log(nodeFindIterative(a, 55))
console.log(nodeFindRecursive(a, 55))

console.log(nodeFindIterative(a, 12))
console.log(nodeFindRecursive(a, 12))

console.log(nodeFindIterative(a, 38))
console.log(nodeFindRecursive(a, 38))