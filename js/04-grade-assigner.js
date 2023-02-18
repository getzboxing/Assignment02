let score = parseInt(prompt('Enter a test score (1-100) from your exam: '))

switch (score >= 1 && score <= 100) {
  case score >= 90 && score <= 100:
    alert(` your score is ${score} for a grade of 'A' `)
    document.writeln(` your score is ${score} for a grade of 'A' `)
    break
  case score >= 80 && score < 90:
    alert(` your score is ${score} for a grade of 'B' `)
    document.writeln(` your score is ${score} for a grade of 'B' `)
    break
  case score >= 70 && score < 80:
    alert(` your score is ${score} for a grade of 'C' `)
    document.writeln(` your score is ${score} for a grade of 'C' `)
    break
  case score >= 60 && score < 70:
    alert(` your score is ${score} for a grade of 'D' `)
    document.writeln(` your score is ${score} for a grade of 'D' `)
    break
  case score < 60:
    alert(` your score is ${score} for a grade of Failure `)
    document.writeln(` your score is ${score} for a grade of 'F' `)
    break
}
