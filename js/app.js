function validaCadastro(){
	let nome = document.getElementById("nome").value
	let nascimento = document.getElementById("nascimento").value
	let sexo = document.getElementById("sexo").value
	let rua = document.getElementById("rua").value
	let numero = document.getElementById("numero").value
	let bairro = document.getElementById("bairro").value
	let cep = document.getElementById("cep").value
	let email = document.getElementById("email").value
	let login = document.getElementById("login").value
	let senha = document.getElementById("senha").value
	let verificaSenha = validaSenha(senha)
	//Validação caso o navegador não suporte o required e se a senha é forte
	if(nome === "" || nascimento === "" || sexo === "" || rua === "" || numero === "" || 
		bairro === "" || cep === "" || email === "" || login === "" || !verificaSenha){
		mostrarModal("cadastroFalha")
		return false
	}
	return true
}

function validaSenha(senha){
	let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
	return regex.test(senha)
}

function mostrarModal(tipo){
	if(tipo == "produtoSucesso"){
		document.getElementById("h5Modal").innerHTML = "Produto adicionado ao carrinho!"
		document.getElementById("h5Modal").className = "modal-title text-success"
		document.getElementById("textoModal").innerHTML = "O produto foi adicionado ao carrinho com sucesso. Compre mais!"
		document.getElementById("btnModal").innerHTML = "Voltar"
		document.getElementById("btnModal").className = "btn btn-success"
		$("#modalMensagem").modal("show")
	} else if(tipo == "cadastroFalha"){
		document.getElementById("h5Modal").innerHTML = "Não foi possível realizar o cadastro"
		document.getElementById("h5Modal").className = "modal-title text-danger"
		document.getElementById("textoModal").innerHTML = "Por favor, preencha todos os campos e escolha uma senha forte para efetuar o seu cadastro."
		document.getElementById("btnModal").innerHTML = "Voltar"
		document.getElementById("btnModal").className = "btn btn-danger"
		$("#modalMensagem").modal("show")
	} else if(tipo == "compraSucesso"){
		document.getElementById("h5Modal").innerHTML = "Compra realizada com sucesso!"
		document.getElementById("h5Modal").className = "modal-title text-success"
		document.getElementById("textoModal").innerHTML = "Parabéns! Você comprou todos os produtos que estavam no carrinho!"
		document.getElementById("btnModal").innerHTML = "Voltar"
		document.getElementById("btnModal").className = "btn btn-success"
		$("#modalMensagem").modal("show")
	}
}

