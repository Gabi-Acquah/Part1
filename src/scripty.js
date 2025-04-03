// const t = ["apple", "Tomatos", "John", "Simon", "James"]
// const [fruit, vegies, ...names] = t
// console.log(fruit)
// console.log(vegies)
// console.log(names)

// const object1 = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//   }
  
//   const object2 = {
//     name: 'Full Stack web application development',
//     level: 'intermediate studies',
//     size: 5,
//   }
  
//   const object3 = {
//     name: {
//       first: 'Dan',
//       last: 'Abramov',
//     },
//     grades: [2, 3, 5, 3],
//     department: 'Stanford University',
//   }
// object1.address = 'Tadi'
// console.log(object1)

// const sum = (a, b) => {
//     console.log(a)
//     console.log(b)
//     return a + b
// }
// const result =  sum(5,7)
// console.log(result)
// const t = [3,5,9]
// const tsquare = t.map(p => p*p)
// console.log(tsquare)

const person = {
    name: "Kofi",
    address: [
        {
            town: "Takoradi",
            street: "AA mensah st"
        },
        {
            town: "Mpohor",
            street: "Cedibest st"
        }
    ]
}
const ad = person.address
console.log(ad.map(value=>value.street))