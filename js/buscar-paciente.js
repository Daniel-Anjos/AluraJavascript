var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando Pacientes");
    
    var xhr = new XMLHttpRequest ();

    //Abrindo a requisição
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //Fazendo o envio da requisição
    xhr.send();

    //Aguarda carregar a resposta e trata o JSON recebido
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            /* A função aceita apenas um paciente por vez, 
            por isso devemos iterar o array */
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        };    

    });



})