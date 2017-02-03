var now = new Date();
var new_year = new Date(2016,10,1,1,1,1);
var number_days = new_year - now;
alert(parseInt(number_days/(1000*60*60*24)) + ' дней ' + parseInt(number_days/(1000*60*60)) + ' часов до конца месяца ');
//document.write(now.toLocaleString());
//document.write(now.toLocaleDateString());
//document.write(now.toLocaleTimeString());
//document.write(now.getDate());
//document.write(now.getDay());
//document.write(now.getFullYear());
//document.write(now.getMinutes());
//now.setFullYear(1990);
//now.setMonth(9);
//now.setDate(25);

//document.write(now.toLocaleString());


