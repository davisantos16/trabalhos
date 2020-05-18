$(document).ready(function() {

    $('.btn-edit').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()
        $('.modal-title').append('Edição de cadastrado')


        var url = "cao/modelo/viewAgenda.php"
        var dados = 'idCliente='
        dados += $(this).attr('id')

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: false,
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let agenda = `
          

                        <h3 class="text-success">Cadastro de Agendamento</h3>
                        <form class="mt-3" id="editAgenda">


                        <div class="form-group row">
                            <div class="col-12">
                                <label for="">Cliente</label>
                                <input type="text" name="cliente" id="" class="form-control" value="` + dados[i].cliente + `">
                            </div>
            
                        </div>
            
                        <div class="form-group row">
            
            
                            <div class="col-12">
                                <label for="">Nome Animal</label>
                                <input type="text" name="nomeAnimal" id="" class="form-control" value="` + dados[i].nomeAnimal + `">
                            </div>
                            
                        </div>
            
                        <div class="form-group">
            
                            <div class="form-group row">
            
                            <div class="col-4">
                                <label for="">Data</label>
                                <input type="date" name="dia" id="" class="form-control" value="` + dados[i].dia + `">
                            </div>
            
                            <div class="col-sm-4">
                                <label for="">Hora Inicio</label>
                                <input type="time" name="inicio" id="" class="form-control" value="` + dados[i].inicio + `">
                            </div>
            
                            <div class="col-sm-4">
                                <label for="">Hora Terminio</label>
                                <input type="time" name="termino" id="" class="form-control" value="` + dados[i].termino + `">
                            </div>
            
                        </div>
            
                        <div class="form-group row">
            
                            <div class="col-sm-6">
                                <label for="">Serviço</label>
                                <input type="text" name="servico" id="" class="form-control" value="` + dados[i].servico + `">
                            </div>
            
                            <div class="col-6">
                                <label for="">Valor</label>
                                <input type="text" name="valor" id="" class="form-control" value="` + dados[i].valor + `">
                            </div>
            
                        </div>
            <br>
            <div class="modal-footer">
            <input type="hidden" name="idCliente" value="` + dados[i].idCliente + `">
            <button class="btn btn-outline-warning btn-update"><i class="mdi mdi-content-save"></i> Salvar</button>
            <button class="btn btn-outline-danger"><i class="mdi mdi-content-save"></i>Cancelar</button>
            
            
          </div>

        </form>
 


                    `



                    $('.modal-body').append(agenda)
                }

                $('#modalAgenda').modal('show')
                $('body').append('<script src="cao/controle/updateAgenda.js"></script>')

            }
        })

    })
})