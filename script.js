// Criando variáveis para seleção de elementos
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookieImg = document.querySelector('#cookieImg')
const btnScreen2 = document.querySelector('.screen2 button')

// Criando array de frases 
const phrases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "O medo é apenas uma ilusão.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
  "Lembre-se sempre: o sucesso nunca é permanente e o fracasso nunca é final.",
  "O verdadeiro segredo para a felicidade está em ter um coração leve.",
  "A sorte favorece a mente bem preparada.",
  "Seja a mudança que você deseja ver no mundo."
]

// Adicionando os dois eventos necessários à aplicação

// 1. Evento de clique na imagem do biscoito
cookieImg.addEventListener('click', cookieClick)

// 2. Evento de clique no botão "Abrir outro biscoito"
btnScreen2.addEventListener('click', resetClick)

// Funções 

// Criando a função que irá gerar a frase randômica
function cookieClick() {
  // Criando variável que irá gerar número aleatório entre 0 e comprimento do array
  const randomNumber = Math.floor(Math.random() * phrases.length)

  // Selecionar frase aleatória do array usando o número gerado por randomPhrase
  const randomPhrase = phrases [randomNumber]

  // Criando método para exibir a frase na screen2
  screen2.querySelector('p').innerText = randomPhrase

  // Alternar entre screen1 e screen2 
  toggleScreen()
}

// Criando a função que irá retornar à primeira tela
function resetClick() {
  toggleScreen()
}

// Criando a função para alteração de telas
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}