var x, y, z;
var result;
x = 10.45;
y = '50.5';
z = 21.57;
y = parseFloat(y);
result = x + y + z;
document.write('<p>Результат сложения чисел: '+ x + ' + ' + y + ' + ' + z + ' = ' + '<span style="color:red">' + result + '</span></p>');