function setUrl(){
	const name=document.getElementById("name");
	const year=document.getElementById("year");
	let url="https://localhost:8080/?";
	if(name.value===""){
		url=url+"year="+year.value;
	}else if(year.value===""){
		url=url+"name="+name.value
	}else{
		url=url+"name="+name.value+"&year="+year.value
	}
	document.getElementById("url").innerHTML=url;
}
