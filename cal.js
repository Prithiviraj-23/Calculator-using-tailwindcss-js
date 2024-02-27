function dis(val){
	
	console.log(val);
	if(val==''){
		document.getElementById('input').value=val

	}
	else{
		document.getElementById('input').value+=val
	}

}
function solve(){

	try{
	var  x =document.getElementById('input').value
	var y=eval(x)
	console.log(x)
	console.log(y)
	document.getElementById('input').value=y

	}catch{
		document.getElementById('input').value="ERR"
		// alert('error')
	}	
}

function fun(event){
	event.preventDefault(); 

	event.stopPropagation();
	if (event.key == '0' || event.key == '1' 
	|| event.key == '2' || event.key == '3' 
	|| event.key == '4' || event.key == '5' 
	|| event.key == '6' || event.key == '7' 
	|| event.key == '8' || event.key == '9' 
	|| event.key == '+' || event.key == '-' 
	|| event.key == '*' || event.key == '/') 
	{
	document.getElementById("input").value += event.key;
	}
	else if(event.key=="Enter"){
		console.log("Enter")
		solve()
	}
}