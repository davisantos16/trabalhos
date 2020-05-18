$(document).ready(function() {

    $('.btn-view').click(function(e) {

        e.preventDefault();

        $('.modal-title').empty();
        $('.modal-body').empty();
        $('.modal-footer').empty();


        var url = "cao/modelo/viewCao.php";
        var dados = 'idCaes=';
        dados += $(this).attr('id');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let caes = `
                        
                  
                    <form>
                    <h1>
                <h3 class="text-success">Cadastro do Animal</h3>
            </h1>

            <div class="form-group row">

                <div class="col-4 text-secondary">
                    <label for="">Nome do Dog</label>
                    <input type="text" name="nome" id="" class="form-control" value="` + dados[i].nome + `">
                </div>

                <div class="col-sm-8 text-secondary">
                    <label for="">Procedência (De onde veio o Animal)</label>
                    <input type="text" name="procedencia" id="" class="form-control" value="` + dados[i].procedencia + `">
                </div>

            </div>

            <div class="form-group row">
                <div class="col-6 text-secondary">
                    <label for="">Nascimento</label>
                    <input type="date" name="datNasc" id="" class="form-control" value="` + dados[i].datNasc + `">
                </div>
                <div class="col-6 text-secondary">
                    <label for="">Data de Entrada</label>
                    <input type="date" name="datEntrada" id="" class="form-control" value="` + dados[i].datEntrada + `">
                </div>    
            </div>

            <div class="form-group row">
                <div class="col-3 text-secondary">
                    <label for="">Sexo</label>
                    <input type="text" name="sexo" id="" class="form-control" value="` + dados[i].sexo + `">
                </div>

                <div class="col-3 text-secondary">
                    <label for="">Cor</label>
                    <input type="text" name="cor" id="" class="form-control" value="` + dados[i].cor + `">
                </div>

                <div class="col-3 text-secondary">
                    <label for="">Raça</label>
                    <input type="text" name="raca" id="" class="form-control" value="` + dados[i].raca + `">
                </div>

                <div class="col-3 text-secondary">
                    <label for="">Animal é vacinado</label>
                    <input type="text" name="vacina" id="" class="form-control" placeholder="Sim/Não" value="` + dados[i].vacina + `">
                </div>
            </div>

                    </form>
                
                    `;

                    $('.modal-title').append(dados[i].nome);
                    $('.modal-body').append(caes);
                }

                $('#modalCao').modal('show');

            }
        });

    });
});