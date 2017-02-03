/*
var array = [1,10,5,20];
var array2 = ['Hallo','world'];
var array4 = new Array(10,23,34,45);
var array5 = new Array(5);
document.write(array2);
*/

//var ar = [5,9,3,4,15,685,78,15,79,34,74,853,498,41,5,2,56,64,6,8,96,79,56,49,5,6,6,9,6,6,6,7,6,5,68,65,6,89,56];
/*
ar.sort(function(a,b)
{	if(a<b){
	return -1;
}
	if(a>b){
	return 1;
	}
	return 0;
	}
);

//ar.splice(0,3);
ar.unshift(500);
ar.unshift(250);
ar.unshift(50);
document.write(ar);
*/
var arr = new Array(10);
for(var index=0; index<arr.length; index++)
{
	arr[index]=new Array(10);
}

for(var j=0; j<arr.length; j++)
	{
	for	(var n=0; n<arr[j].length; n++)
	{
	arr[j][n]=n*j;		
	}
	
	}
	
	document.write(arr[5][7]);
	
/*	for(var j=0; j<arr.length; j++)
	{
		for	(var n=0; n<arr[j].length; n++)
		{
			document.write(arr[j][n]);
		}
		document.write("<br>");
	}
*/