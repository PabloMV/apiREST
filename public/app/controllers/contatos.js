app.controller('contatosController', function($scope, $http, API_URL) {
    
    // Seleciona a lista de contatos
    $http.get(API_URL + "contatos")
            .success(function(response) {
                $scope.contatos = response;
            })
            .error(function(err){
                $scope.contatos = err;
            });
    
    // Exibe o formulário em um modal
    $scope.toggle = function(modalstate, id) {
        console.log('Function toggle, modalstate: '+modalstate+', id: '+id);
        $scope.modalstate = modalstate;

        switch (modalstate) {
            case 'add':
                $scope.form_title = "Adicionar novo contato";
                break;
            case 'edit':
                $scope.form_title = "Detalhes do contato";
                $scope.id = id;
                $http.get(API_URL + 'contatos/' + id)
                        .success(function(response) {
                            console.log(response);
                            $scope.contato = response;
                        });
                break;
            default:
                break;
        }
        console.log(id);
        $('#myModal').modal('show');
    }


    // Salva novo registro / Edita registro existente
    $scope.save = function(modalstate, id) {
        var url = API_URL + "contatos";
        
        // acrescenta na URL o id do contato se o formulário estiver no modo de edição
        if (modalstate === 'edit'){
            url += "/" + id;
        }
        
        $http({
            method: 'POST',
            url: url,
            data: $.param($scope.contato),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response) {
            console.log(response);
            location.reload();
        }).error(function(response) {
            console.log(response);
            alert('Erro. Verifique os logs no console.');
        });
    }


    // Excluir registro
    $scope.confirmDelete = function(id) {
        var isConfirmDelete = confirm('Deseja realmente excluir este registro?');
        if (isConfirmDelete) {
            $http({
                method: 'DELETE',
                url: API_URL + 'contatos/' + id
            }).
                    success(function(data) {
                        console.log(data);
                        location.reload();
                    }).
                    error(function(data) {
                        console.log(data);
                        alert('Erro ao excluir.');
                    });
        } else {
            return false;
        }
    }
});