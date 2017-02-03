document.write("<table border='1px'>");
for(var i = 1; i < 10; i++){
	if(i == 1){
		color_tr = "#c3c3c3";
	}
	else {
		color_tr = "#ffffff";
	}
	document.write("<tr style='heigh:30px;background-color:" + color_tr + "'>");
		for(var j = 1; j < 10 ; j++){
			
			if(j == 1 || i == 1){
			color_td = "#c3c3c3";
			}
			else {
			color_td = "#ffffff";
			}
			document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
			
	}
	document.write("<tr>");
}
document.write("</table>");