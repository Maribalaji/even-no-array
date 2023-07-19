var arr=[2,3,4,8,12,13,14,15,6,9];
document.write("The Given Number:"+arr);
document.write("<br>");
for(let i=0;i<arr.length;i++){
	if(arr[i]%2==0){
		document.write(arr[i]);
		document.write("<br>");
	}
}