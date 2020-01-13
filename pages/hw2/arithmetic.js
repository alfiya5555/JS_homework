var x = +prompt('Введите число x');
var y = +prompt('Введите число y');

summ = x + y;
diff = x - y;
mult = x * y;
div  = x / y == Infinity ? 'Делить на ноль запрещено' : x / y;

alert('Сумма чисел '+ x + ' + '+ y + ' = ' + summ +'\nРазность чисел '+ x + ' - '+ y + ' = ' + diff + '\nПроизведение чисел '+ x + ' * '+ y + ' = ' + mult + '\nЧастное чисел '+ x + ' / '+ y + ' = ' + div);