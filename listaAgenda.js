$('tboby').empty()

var url = "cao/modelo/listaAgenda.php"

$.ajax({
    type: 'POST',
    dataType: 'json',
    url: url,
    async: true,
    success: function(dados) {
        for (var i = 0; i < dados.length; i++) {
            let agenda = `

            
                  <tr>
                    <th scope="row">` + dados[i].idCliente + `</th>
                    <td>` + dados[i].cliente + `</td>
                    <td>` + dados[i].servico + `</td>
                    <td>` + dados[i].nomeAnimal + `</td>
                    <td>` + dados[i].dia + `</td>
                    <td>` + dados[i].inicio + `</td>
                    <td>` + dados[i].termino + `</td>
                    <td>` + dados[i].valor + `</td>
                  
              
<td>
                <button id="` + dados[i].idCliente + `" class="btn btn-outline-primary btn-sm btn-view"><i class="mdi mdi-eye mdi-18px"></i></button>
                <button id="` + dados[i].idCliente + `" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                <button id="` + dados[i].idCliente + `" class="btn btn-outline-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                </td>
               
                </tr>

           
                
                `

            $('tbody').append(agenda)
        }

        $('body').append('<script src="cao/controle/viewAgenda.js"></script>')
        $('body').append('<script src="cao/controle/editAgenda.js"></script>')
        $('body').append('<script src="cao/controle/deleteAgenda.js"></script>')

    }

})
