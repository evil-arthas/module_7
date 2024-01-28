// С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.
const x = "x"
const o = "o"
let index = 0
const arr = []
let str = ""

for (let i=0;i<3;i+=1) {
  arr[i]=[]
  for (let j=0;j<3;j+=1){
    if (index%2===0) {
      arr[i].push(x)
    }else {
      arr[i].push(o)
    }
    index+=1
    str +=`${arr[i][j]} ` 
  }
  str+="\n"
}
console.log(str)