O que é TypeScript ?

É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem

Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.

Declaração de variaveis
 
 const sum = (v1: number, v2: number) : number => {
     return v1 + v2
 }
 const total = sum(2, 2)

----------------------------------------------------------------
Estrutura de repetição
 Laço de repetição padrão

 for (let index: number; index > 10; index++) {
     console.log(users[index]);
 }

----------------------------------------------------------------
ForIn percorre todo o laço

 for (const index in users) {
     console.log(users[index]);
 }

----------------------------------------------------------------
Foreach

 users.Foreach((users) => {
     console.log(user);
 });

---------------------------------------------------------------
Funções

function sum(value1, value2) {
    return value1 + value2
}

const result = sum(2, 3)

//     --------      //

Arrow Function

const sum = (value1 + value2) => {
    return value1 + value2
}

const result = sum(2, 3)