// Como tipar elementos do DOM
// O TypeScript já traz por padrão tipos customizados necessários

const myElement: HTMLElement = document.getElementById("elementId")

// Div (Type assertion)
const myElement2: HTMLDivElement = document.getElementById("asd") as HTMLDataElement

HTMLLIElement // Para itens de umas lista
HTMLParagraphElement // Para um paragrafo etc