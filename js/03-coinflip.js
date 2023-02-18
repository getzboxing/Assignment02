let choice = parseInt(
  prompt('Enter prediction of coin flip: "1" for Heads, "0" for Tails!')
)

let coinFlip = Math.round(Math.random())

if (choice == true) {
  if (coinFlip == true) {
    document.write('The coin flip was heads and you chose heads... you win!')
  } else if (coinFlip == false)
    document.write('The coin flip was tails and you chose heads... you lose!')
} else if (choice == false) {
  if (coinFlip == false) {
    document.write('The coin flip was tails and you chose tails... you win!')
  } else if (coinFlip == true) {
    document.write('The coin flip was heads and you chose tails... you lose!')
  }
}
