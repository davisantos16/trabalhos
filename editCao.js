$(document).ready(function() {

    $('.btn-edit').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()
        $('.modal-title').append('Edição de cadastrado')


        var url = "cao/modelo/viewCao.php"
        var dados = 'idCaes='
        dados += $(this).attr('id')

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: false,
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let caes = `
          

                        <h3 class="text-success">Cadastro do Cliente</h3>
                    <form id="editCao">
          

            <div class="form-group row">
            <div class="col-6 text-secondary">
                <label for="">Nome Cliente</label>
                <input type="text" name="cliente" id="" class="form-control" value="` + dados[i].cliente + `">
            </div>

            <div class="col-6 text-secondary">
                <label for="">E-mail</label>
                <input type="text" name="email" id="" class="form-control" value="` + dados[i].email + `">
            </div>
        </div>

        <div class="form-group row">

            <div class="col-3 text-secondary">
                <label for="">Telefone</label>
                <input type="text" name="fone" id="" class="form-control" value="` + dados[i].fone + `">
            </div>

            <div class="col-sm-3 text-secondary">
                <label for="">Cep</label>
                <input type="text" name="cep" id="" class="form-control" value="` + dados[i].cep + `">
            </div>

            <div class="col-sm-3 textsecondary">
                <label for="">Cidade</label>
                <input type="text" name="cidade" id="" class="form-control" value="` + dados[i].cidade + `">
            </div>

            <div class="col-sm-3 text-secondary">
                <label for="">Estado</label>
                <input type="text" name="estado" id="" class="form-control" value="` + dados[i].estado + `">
            </div>

        </div>

        <div class="form-group row">

                <div class="col-10 text-secondary">
                    <label for="">Lagradoudo/Rua</label>
                    <input type="text" name="rua" id="" class="form-control" value="` + dados[i].rua + `">
                </div>

                <div class="col-2 text-secondary">
                    <label for="">Número</label>
                    <input type="number" name="nmr" id="" class="form-control" value="` + dados[i].nmr + `">
                </div>
        </div>


        <h1>
            <h3 class="text-success">Dados do Animal</h3>
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
            <br>
            <input type="hidden" name="idCaes" value="` + dados[i].idCaes + `">
            <button class="btn btn-outline-warning btn-update"><i class="mdi mdi-content-save"></i> Salvar</button>
            <button class="btn btn-outline-danger"><i class="mdi mdi-content-save"></i>Cancelar</button>


        </form>
 


                    `



                    $('.modal-body').append(caes)
                }

                $('#modalCao').modal('show')
                $('body').append('<script src="cao/controle/updateCao.js"></script>')

            }
        })

    })
})