$(document).ready(function() {

    $('.btn-add').click(function(e) {

        e.preventDefault()

        var dados = $('#addDog').serialize()
        var url = "cao/modelo/addCao.php"

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {

                if (dados.return == true) {
                    Swal.fire({
                        title: 'DOG!',
                        text: 'Cadastro efetuado com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })
                } else {
                    Swal.fire({
                        title: 'DOG!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tente novamente...'
                    })
                }
                $('#addDog input').val("")
            }
        })

    })
})