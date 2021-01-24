
/*
** Cristiano Bonifácio - Introdução ao JavaScript - Manipulando Elementos na Página - 22/01/2021
*/

/*recupera o id e injeta um texto
function clicar(){
	document.getElementById("agradecimento").innerHTML = "Obrigado por clicar.";
}
*/

/*
function redirecionar(){
	//window.open("https://www.google.com.br/");
	//window.location.herf = "https://www.google.com.br/";
}
*/

/*
function trocar(){
	alert("mousemouve");
}
*/
function trocar(){
	document.getElementById("mousemouve").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){
	document.getElementById("mousemouve").innerHTML = "Passe o mouse aqui";

}

function load(){
	alert("Página carregada");
}

function funcaoChange(cristiano){
	console.log(cristiano.value);
}