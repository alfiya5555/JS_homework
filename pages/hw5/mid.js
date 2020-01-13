var x = +prompt('Введите первое число x');
if (isNaN(x) == false) {
    var y = +prompt('Введите второе число y');
    if (isNaN(y) == false) {
        var z = +prompt('Введите третье число z');
        if (isNaN(z) == false) {

            if ((x > y && x < z) || (x > z && x < y)) {
                var res = x
                alert('Среднее число X = ' + res);
            }
            else {
                if ((y > x && y < z) || (y > z && y < x)) {
             
                    var res = y
                    alert('Среднее число Y = ' + res);
                }
                else {
                    var res = z
                    alert('Среднее число Z = ' + res);
                }
            }
        }
        else {
            alert('Вы не ввели третье число Z !');
        }
    }
    else {
        alert('Вы не ввели второе число Y !');
    }
}
else {
    alert("Вы не ввели первое число X!");

}
