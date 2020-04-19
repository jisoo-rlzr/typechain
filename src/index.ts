const name = "Jisoo Kim",
      age = 29,
      gender = "female"

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age} and ${gender}.`
}

console.log(sayHi(name, age, gender))

export {}