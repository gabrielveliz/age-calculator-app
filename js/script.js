let resultado1 = document.getElementById('res1');
let resultado2 = document.getElementById('res2');
let resultado3 = document.getElementById('res3');
let invalido = document.getElementById('validar');
resultado1.innerHTML = "--";
resultado2.innerHTML = "--";
resultado3.innerHTML = "--";
invalido.innerHTML = "This field is required";

function calcular(){

	let valor1 = document.getElementById("campo1").value;
	let valor2 = document.getElementById("campo2").value;
	let valor3 = document.getElementById("campo3").value;

	const fecha = new Date();
	let añoActual = fecha.getFullYear();
	let mes = fecha.getMonth() +1 ;
	let dia = fecha.getDate()  ;

	
	if (valor1.length==0 || valor2.length==0 || valor3.length==0) {
		invalido.innerHTML = "This field is required";
		if (valor1.length==0) {
			
			requ(1);
		}

		if (valor2.length==0) {
			requ(2);
		}

		if (valor3.length==0) {
			requ(3);
		}

		if (valor1.length==0 || valor2.length==0 || valor3.length==0) {
			document.getElementById("ingresoadv").style.paddingBottom="0px";
		}
	}
	else{
		valor1 = parseInt(valor1);
		valor2 = parseInt(valor2);
		valor3 = parseInt(valor3);
		restablecer();
		
		let f1 = new Date(valor3,valor2,valor1);
		let f2 = new Date(añoActual,mes,dia);
		

		if ( (valor1>0 && valor1 <=cantidaddias(valor2,valor3)) && (valor2>0 && valor2<=12) && valor3>0 && f1<f2 ) 
		{ 
			

			let resaño = añoActual - valor3;
			let resmes = mes - valor2;
			let resdias = dia - valor1;


			if (mes < valor2){
				resaño = resaño -1;
				resmes = resmes +12;
			}
			if(dia<valor1){
				resmes = resmes - 1;
				resdias = resdias + cantidaddias(valor2,valor3);
				

			}
			if (resmes<0) {
					resaño = resaño -1;
					resmes = resmes + 12;
				}


			resultado1.innerHTML = resaño+" ";
			resultado2.innerHTML = resmes+" ";
			resultado3.innerHTML = resdias+" ";
		}

		else{
			nocumple();
		}
	}
		
}

function nocumple(){
			invalido.innerHTML = "Must be a valid date";
			document.getElementById("textrojo1").style.display="block";

			document.getElementById("texto1").style.color="hsl(0, 100%, 67%)";
			document.getElementById("campo1").style.border="1px solid hsl(0, 100%, 67%)";

			document.getElementById("texto2").style.color="hsl(0, 100%, 67%)";
			document.getElementById("campo2").style.border="1px solid hsl(0, 100%, 67%)";

			document.getElementById("texto3").style.color="hsl(0, 100%, 67%)";
			document.getElementById("campo3").style.border="1px solid hsl(0, 100%, 67%)";
}

function restablecer(){
				document.getElementById("texto1").style.color="hsl(0, 1%, 44%)";
				document.getElementById("textrojo1").style.display="none";
				document.getElementById("campo1").style.border="1px solid hsl(0, 0%, 86%)";

				document.getElementById("texto2").style.color="hsl(0, 1%, 44%)";
				document.getElementById("textrojo2").style.display="none";
				document.getElementById("campo2").style.border="1px solid hsl(0, 0%, 86%)";

				document.getElementById("texto3").style.color="hsl(0, 1%, 44%)";
				document.getElementById("textrojo3").style.display="none";
				document.getElementById("campo3").style.border="1px solid hsl(0, 0%, 86%)";
				
}

function requ(n) {
			let v1 = "texto"+n;
			let v2 = "textrojo"+n;
			let v3 = "campo"+n;


			document.getElementById(v1).style.color="hsl(0, 100%, 67%)";
			document.getElementById(v2).style.display="block";
			document.getElementById(v3).style.border="1px solid hsl(0, 100%, 67%)";
}

function cantidaddias(mes,ano){

	if (mes==1) {
		return 31
	}
	if (mes==2) {
		if (ano % 4 == 0) {
			return 29
		}else
		return 28
	}
	if (mes==3) {
		return 31
	}
	if (mes==4) {
		return 30
	}
	if (mes==5) {
		return 31
	}
	if (mes==6) {
		return 30
	}
	if (mes==7) {
		return 31
	}
	if (mes==8) {
		return 31
	}
	if (mes==9) {
		return 30
	}
	if (mes==10) {
		return 31
	}
	if (mes==11) {
		return 30
	}
	if (mes==12) {
		return 31
	}

}
