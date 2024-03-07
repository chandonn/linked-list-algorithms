import { printArray } from "./PrintArray.js"

/**
 * Given the head of two separate linked lists, join them together by linking one from the first and the next from the second, repeats the cycle
 */
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
const e = new Link("1")
const f = new Link("2")
const g = new Link("3")
const h = new Link("4")

// creating the links
a.next = b
b.next = c
c.next = d

// separate
e.next = f
f.next = g
g.next = h

function zipperListsIterative(head1, head2) {
    let zip = 0
    // if one list finishes stop the zipping and keep the rest of the other list
    while (head1 !== null && head2 !== null) {
        const next1 = head1.next
        const next2 = head2.next

        // this will guide us moving from list 1 to list 2 vice versa
        if (zip % 2 === 0) {
            head1.next = head2
            head1 = next1
        } else {
            head2.next = head1
            head2 = next2
        }

        zip = zip + 1
    }
}

function zipperListsRecursive(head1, head2) {
    if (head1 === null && head2 === null) return null
    if (head1 === null) return head2
    if (head2 === null) return head1

    const next1 = head1.next
    const next2 = head2.next

    head1.next = head2
    head2.next = zipperListsRecursive(next1, next2)

    return head1
}

// before
console.log("LIST 1 ", printArray(a))
console.log("LIST 2 ", printArray(e))

// zipperListsIterative(a, e)
zipperListsRecursive(a, e)

// after, the head is the first head 
console.log("ZIPPER ", printArray(a))