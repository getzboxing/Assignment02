// "es", "de", "en", and "fr"

let lang = prompt('enter language; "es", "de", "en", and "fr": ')

switch (lang) {
  case 'es':
    document.write(
      '<h2 lang="es">Hello World in Spanish: Buenos Dias el mundo!</h2>'
    )
    break
  case 'de':
    document.write('<h2 lang="de">Hello World in German: Hallo welt!</h2>')
    break
  case 'fr':
    document.write('<h2>Hello World in French: Bonjour le monde!</h2>')
    break
  default:
    document.write('<h2>Hello World in English: Hello World!')
}
