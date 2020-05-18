$(document).ready(function() {

    $('.btn-view').click(function(e) {

        e.preventDefault();

        $('.modal-title').empty();
        $('.modal-body').empty();
        $('.modal-footer').empty();


        var url = "cao/modelo/viewAgenda.php";
        var dados = 'idCliente=';
        dados += $(this).attr('id');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let agenda = `
                        
                  
                    <form>
                    <h1>
                <h3 class="text-success">Cadastro de Agendamento</h3>
            </h1>

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
            
                            <div class="col-6">
                                <label for="">Serviço</label>
                                <input type="text" name="servico" id="" class="form-control" value="` + dados[i].servico + `">
                            </div>
            
                            <div class="col-6">
                                <label for="">Valor</label>
                                <input type="text" name="valor" id="" class="form-control" value="` + dados[i].valor + `">
                            </div>
            
                        </div>

                    </form>
                
                    `;

                    $('.modal-title').append(dados[i].cliente);
                    $('.modal-body').append(agenda);
                }

                $('#modalAgenda').modal('show');

            }
        });

    });
});