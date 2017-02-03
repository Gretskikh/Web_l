var test, res;

test = null;

if(typeof(test) == 'number') {
	test++;
	alert(test);	
}
if(typeof(test) == 'string') {
	res = 'В переменной test хранится строка ' + test;
	alert(res);
}
if(test == null){
	res = 'В переменной test хранится пустое значение ' + test;
	alert(res);
}