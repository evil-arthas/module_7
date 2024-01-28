let word = prompt("Введите слово")
// проверки типа данных нет
console.log(typeof word)
  word = word.toLowerCase()
  let wordReverse =""
  for (let i=word.length-1; i>=0; i-=1) {
    wordReverse += word[i]
  }
  if(word==wordReverse) {
    console.log(`Слово ${word} является палиндромом`)
  }
  else {
    console.log(`Слово ${word} не является палиндромом`)
}