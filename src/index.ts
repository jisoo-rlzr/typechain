interface Human {
  name: string
  gender: string
  age: number
}

const jisoo = {
  name: "Jisoo",
  gender: "Female",
  age: 101
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} and ${person.gender}.`
}

console.log(sayHi(jisoo))

export {}