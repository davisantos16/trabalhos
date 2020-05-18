$(document).ready(function() {

    $('.btn-update').click(function(e) {

        e.preventDefault()

        var dados = $('#editCao').serialize()
        var url = "cao/modelo/updateCao.php"

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {

                if (dados.return == true) {

                    $('#modalCao').modal('hide')

                    Swal.fire({
                        title: 'DOG!',
                        text: 'Alteração efetuado com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })

                    function atualizar() {
                        $('#conteudo').load('cao/visao/listaCao.html')
                    }
                    setTimeout(atualizar, 2000)

                } else {
                    Swal.fire({
                        title: 'DOG!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tente novamente...'
                    })
                }
                $('#modalCao').modal('hide')
            }
        })

    })
})