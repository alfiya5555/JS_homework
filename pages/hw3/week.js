let week = +prompt('Введите день недели :');
let res;

switch(week){
case 1: res = 'Понедельник' ; break 
case 2: res = 'Вторник';      break 
case 3: res = 'Среда';        break
case 4: res = 'Четверг';      break
case 5: res = 'Пятница';      break
case 6: res = 'Суббота';      break
case 7: res = 'Воскресенье';  break
default: res = 'Вы ввели число , которое не находится в диапазоне от 1 до 7'
}

alert(res);