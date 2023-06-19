// Generics 
const names: Array<string> = ["Maria", "Claudio"]

type User = {
  name: string
  age: number
}

const users: Array<User> = [
  { name: "Maria", age: 25 },
  { name: "Claudio", age: 25 },
]

type UserPage = {
  list: Array<User>
  totalPages: number
  currentPages: number
  itemsPerPage: number
  totalItems: number
}

type CarPage = {
  list: Array<Car>
  totalPages: number
  currentPages: number
  itemsPerPage: number
  totalItems: number
}

// T = tipo expecificado futuramente com Generics
type Page<T> = {
  list: Array<T>
  totalPages: number
  currentPages: number
  itemsPerPage: number
  totalItems: number
}

let users: Page<User> = getUsers({ page: 1 })
let cars: Page<Car> = getCars({ page: 2 })


