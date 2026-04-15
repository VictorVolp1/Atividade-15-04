const ref = db.ref("categorias");

$("#salvar").click(function () {
    let nome = $("#nome").val();
    let informacoes = $("#informacoes").val();

    if(nome === "" || informacoes === "") {
        alert('Prencha todos os campos');
        return;
    }

    ref.push({nome, informacoes }); 
    limpar();
});

function limpar(){
    $("#nome").val("");
    $("#informacoes").val("");
    $("#nome").focus();
}