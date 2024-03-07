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
const d = new Link(78)

// creating the links
a.next = b
b.next = c
c.next = d

// Sum every element of the linked list
function nodeSumIterative(head) {
    let sum = 0
    while (head !== null) {
        sum += head.value
        head = head.next
    }

    return sum
}

function nodeSumRecursive(head) {
    // base case and consistent return value
    if (head === null) return 0
    return head.value + nodeSumRecursive(head.next)
}

console.log(nodeSumIterative(a))
console.log(nodeSumRecursive(a))