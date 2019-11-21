function promptPositiveNumber () {
  let num = 0
  do {
    num = prompt('Please, enter positive number: ')
    if (num === null || num === '') break
    num = parseInt(num)
    let num2 = 0

    while (num2 < num) {
      console.log(num2)
      num2++
    }
  }
  while (num <= 0 || isNaN(num))
}