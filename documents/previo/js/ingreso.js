document.querySelector('#ingreso').addEventListener('click', function() { 
		confirmacion_Ingreso()
	});

function confirmacion_Ingreso(){
	var usuario=document.getElementById('usuario').value;
	var contra=document.getElementById('contra').value;
	if ((usuario=="admin")&&(contra=="1234")) {
		window.location="index.html";
	}else{
		alert("usuario o contraseña incorrectas");
	}
};

function actualizar_Tabla(){
	
};