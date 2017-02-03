/*
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
*/
var num, nums, day;
num=16;
nums=String(num);
//var len = nums.length;
//alert(nums[len-1]);
num=31-num;
if (num < 0){
	alert('Дана не корректна!');
}
else {
	if(num == 1 || num == 21 || num == 31) num = num + ' день';//alert('До конца месяца осталось ' + num + ' день');
	if((num > 1 && num < 5) || (num > 21 && num < 25) ) num = num + ' дня';//alert('До конца месяца осталось ' + num + ' дня');
	if(num > 4 && num < 20 || num > 24 && num < 31 || num == 0) num = num + ' дней';//alert('До конца месяца осталось ' + num + ' дней');
}
document.write("<h2>До конца месяца осталось "  + num + "</h2>");