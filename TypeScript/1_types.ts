const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13] //указывает тип массив чисел
const numberArray2p: Array<number> =[1, 1, 2, 3, 5, 8, 13] // второ1 вариант

const words: string[] = ['Hello', 'Typescript']

//Tuple
const contact: [string, number] = ['Kir', 1234567]

//Any позволяет убрать типизацию
let variable: any = 42

variable = 'New String'

// ====
function sayMyName(name: string): void{
    console.log(name)
}
sayMyName('Хайзенберг')

//Never
function throwError(message: string): never{
    throw new Error(message)
}

function infinite(): never{
    while(true){

    }
}

//Type

type Login = string //определяем свой тип через alias

const login: Login = 'admin'

type ID = string | number // задает два типа полю ID

const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined
