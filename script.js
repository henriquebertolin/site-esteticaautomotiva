function atualizar () {
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var dia = data.getDay()
    if (dia == 0) {
        msg.innerHTML = "No momento estamos fechados, abriremos amanhã as 8:00."
    }

    else if (dia == 6 && hora > 17) {
        msg.innerHTML = "No momento estamos fechados, abriremos Segunda-Feira as 8:00."
    }

    else if (dia == 1 || dia == 2 || dia == 3 || dia == 4 && hora >17) {
        msg.innerHTML = "No momento estamos fechados, abriremos amanhã as 8:00."
    }
    else if (dia == 5 && hora > 17) {
        msg.innerHTML = "No momento estamos fechados, abriremos amanhã as 9:00."
    }
}


$("#btn_acao_esconder").click(function () {
    $(".framemapa").hide ();
});

$("#btn_acao_mostrar").click(function () {
    $(".framemapa").show();
});