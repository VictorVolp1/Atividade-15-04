const ref = db.ref("fornecedores");

$("#salvar").click(function () {
    let nome = $("#nome").val();
    let cnpj = $("#cnpj").val();
    let email = $("#email").val();
    let estado = "";

    if ($("#sp").is(":checked")) {
        estado = "SP";
    } else if ($("#rj").is(":checked")) {
        estado = "RJ";
    } else if ($("#mg").is(":checked")) {
        estado = "MG";
    }

    if (nome === "" || cnpj === "" || email === "" || estado === "") {
        alert('Preencha todos os campos');
        return;
    }

    ref.push({nome, cnpj, email, estado }); 
    limpar();
});

function limpar(){
    $("#nome").val("");
    $("#cnpj").val("");
    $("#email").val("");
    $("input[name='estado']").prop("checked", false);
    $("#nome").focus();
}