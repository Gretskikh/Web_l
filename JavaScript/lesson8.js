	
do{
	var sl = prompt("Введите строку, разделяя слова символом | ");
	if (sl.indexOf("|") != -1){
			if (sl.lastIndexOf("|") != (sl.length-1)){
				var res = sl.split("|");
				break;	
				}
			}
}while(1);

	for(var i =0; i < res.length; i++ ){
	document.write(res[i].toUpperCase() + "<br>");	
	}	
		
				
			
/*	
		
var str1 = "qwerty";
document.write(str1 + "<br>");
var str2 = str1.split("");
str2 = str2.reverse();
str1 = str2.join("");
document.write(str1);

	}
			}
			if(sl.lastIndexOf("|") == (sl.length-1)){
				var res = sl.split("|");
				break;	
			}
		}
	
	*/