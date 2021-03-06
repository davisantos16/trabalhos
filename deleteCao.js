$(document).ready(function() {

    $('.btn-delete').click(function(e) {

        e.preventDefault()

        var dados = 'idCaes='
        dados += $(this).attr('id')

        Swal.fire({
            title: 'DOG',
            text: "Você tem certeza que deseja excluir o registro?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'Desistir da exclusão',
            cancelButtonColor: 'Confirmar a exclusão'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    data: dados,
                    url: 'cao/modelo/deleteCao.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'DOG!',
                            text: 'Cadastro excluido com sucesso!',
                            type: 'success',
                            confirmButtonText: 'Feito!'
                        })

                        $('#conteudo').load('cao/visao/listaCao.html');

                    }

                })

            } else {
                Swal.fire({
                    title: 'DOG!',
                    text: 'Operação cancelada com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                })
            }
        })
    })
})