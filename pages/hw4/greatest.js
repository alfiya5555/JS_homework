var x = +prompt('Введите первое число x');
if (isNaN(x) == false) {
    var y = +prompt('Введите второе число y');
    if (isNaN(y) == false) {
        var z = +prompt('Введите третье число z');
        if (isNaN(z) == false) {

            if (x > y && x > z) {
                var res = x
                alert('Наибольшее число X = ' + res)
            }
            else {
                if (y > x && y > z) {
                    var res = y
                    alert('Наибольшее число y = ' + res)
                }
                else {
                    var res = z
                    alert('Наибольшее число Z = ' + res)
                }
            }
        }
        else {
            alert('Вы не ввели третье число Z !')
        }
    }
    else {
        alert('Вы не ввели второе число Y !');
    }
}
else {
    alert("Вы не ввели первое число X!");
}
