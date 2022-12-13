//1. В одновимірному масиві визначити сумму від'ємних елементів
const sumOfNegative = (arr) => arr.reduce((a, c) => (a += c < 0 ? c : 0), 0)
const array1 = [2, -5, -10, 4, -11, 6, -20]

console.log(sumOfNegative(array1))

//2. В одновимірному масиві визначити суму додатніх елементів
const array2 = [12, -5, 2, -6, 7, 0, -1, 15]
let result = 0
for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 0) {
    result += array2[i]
  }
}
console.log(result)
//3. В одновимірному масиві визначити максимальний елемент
const array3 = [12, -5, 2, -6, 7, 0, -1, 15]
let max = array3[0]
for (let i = 1; i < array3.length; i++) {
  if (array3[i] > max) {
    max = array3[i]
  }
}
console.log(max)

//4. В одновимірному масиві визначити мінімальний елемент
const array4 = [12, -5, 2, -6, 7, 0, -1, 15]
let min = array4[0]
for (let i = 1; i < array4.length; i++) {
  if (array4[i] < min) {
    min = array3[i]
  }
}
console.log(min)
//5. В одновимірному масиві визначити номер максимального і мінімального елемента масива
const array5 = [12, -5, 2, -6, 7, 1, -1, 15]
let maxNumber = array5.indexOf(Math.max.apply(null, array4))
let minNumber = array5.indexOf(Math.min.apply(null, array4))
let minAmountElements = array5.length - minNumber.length
console.log(maxNumber)
console.log(minNumber)

//6. Визначити кількість елементів,розташованих після найменшого по модулю елемента
const array6 = [12, -5, 2, -6, 7, 1, -1, 15]
absNumbers = array6.map(Math.abs)
minValue = Math.min.apply(Math, absNumbers)

console.log(minValue)

//7. Визначити суму елементів, розташованих після найбільшого по модулю елемента
const array7 = [12, -5, 2, -6, 7, 1, -1, 15]
absNumbers = array6.map(Math.abs)
maxValue = Math.max.apply(Math, absNumbers)
console.log(maxValue)
//P.S. Два остані завдання не зміг вирішити,постійно в реpультаті undefined
