$('tboby').empty()

var url = "cao/modelo/listaCao.php"

$.ajax({
    type: 'POST',
    dataType: 'json',
    url: url,
    async: true,
    success: function(dados) {
        for (var i = 0; i < dados.length; i++) {
            let caes = `
                <tr>
                <td class="text-center text-white" width="5%">` + dados[i].idCaes + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].cliente + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].email + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].fone + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].cep + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].cidade + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].estado + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].rua + `</td>
                <td class="text-center text-white" width="5%">` + dados[i].nmr + `</td>
                    <td class="text-center" width="15%">
                        <button id="` + dados[i].idCaes + `" class="btn btn-outline-primary btn-sm btn-view"><i class="mdi mdi-dog mdi-18px"></i></button>
                        <button id="` + dados[i].idCaes + `" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[i].idCaes + `" class="btn btn-outline-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `

            $('tbody').append(caes)
        }
        $('body').append('<script>$(".btn-new").click(function(){ $("#conteudo").load("cao/visao/addCao.html")})</script>')
        $('body').append('<script src="cao/controle/viewCao.js"></script>')
        $('body').append('<script src="cao/controle/editCao.js"></script>')
        $('body').append('<script src="cao/controle/deleteCao.js"></script>')

    }

})

         
//<td class="text-center text-white" width="5%">` + dados[i].idCaes + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].nome + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].procedencia + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].datNasc + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].datEntrada + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].sexo + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].cor + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].raca + `</td>
//<td class="text-center text-white" width="5%">` + dados[i].vacina + `</td>