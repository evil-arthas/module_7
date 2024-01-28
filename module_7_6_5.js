// Есть объект obj. В одном из ключей объекта — массив. 
// Добавьте в новый массив arrValues значения всех ключей объекта. 
// Если значение — массив, добавьте каждый элемент в массив arrValues.

// Выведите получившийся массив в консоль.
const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there'
}
const arrValues = []
for (key in obj){
  if (typeof obj[key]==="object"){
    for (let i=0; i<obj[key].length;i+=1){
      arrValues.push(obj[key][i])
    }
  } else {
    arrValues.push(obj[key])
  }
}
console.log(arrValues)