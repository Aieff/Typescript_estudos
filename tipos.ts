const nome: string = "Felipe"

// Tipos Basicos e complexos
// Basicos [String, Number, Boolena, Array, Enum, Tuple, Unknown, Any, Void]

const value: Array<string> = ["Gabriel", "Bruno", "Fernando"]

// Functions (O mesmo vale para Arrow functions)
function nomeFuncao(parametro: tipo, parametro2: tipo): tipo {
    // Definição da função
}

// Exemplo
const sum = (value: number, value2: number) : number => {
    return value + value2
}

// Enum são valores são atribuídos a exatamente um elemento de um conjunto finito de identificadores escolhidos pelo programador

enum PaymentMethods {
    CreditCard, // = 1
    DebitCard, // = 2
    Transfer, // = 3
}

// Tuple Lista de tamanho Definidos (Onde os elementos da mesma possam variar entre tipos)

const getuserNameAndAge = (user: object): [string, name] => {
    // Definição da função
}

// Unkown e ANY (Quando não sabemos o tipo especifico de uma variavel ou aceitamos qualquer tipo)

const nome1: unknown = 25
const age: unknown = "Gabriel"

// Any remove o type checking
// Tome muito cuidado com Any

const value1: any = metodoDeUmaBibliotecaSemTS()

// Void (Usada para definir valores de saida de uma funcao que nao retorna nada)

const setUserAge = (age: number): void => {
    // Definição da função
}