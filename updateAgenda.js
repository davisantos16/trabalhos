$(document).ready(function() {

    $('.btn-update').click(function(e) {

        e.preventDefault()

        var dados = $('#editAgenda').serialize()
        var url = "cao/modelo/updateAgenda.php"

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {

                if (dados.return == true) {

                    $('#modalAgenda').modal('hide')

                    Swal.fire({
                        title: 'DOG!',
                        text: 'Alteração efetuado com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })

                    function atualizar() {
                        $('#conteudo').load('dogwhalker.html')
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
                $('#modalAgenda').modal('hide')
            }
        })

    })
})