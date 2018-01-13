<?php

namespace App\Http\Controllers;

use App\Contato;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class Contatos extends Controller
{

    /**
     * Exibir uma listagem dos registros
     *
     * @return Response
     */
    public function index($id = null) {
        if ($id == null) {
            return Contato::orderBy('id', 'asc')->get();
        } else {
            return $this->show($id);
        }
    }


    /**
     * Salva um registro recém-criado.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request) {

        $post = new Contato;

        $post->nome = $request->input('nome');
        $post->email = $request->input('email');
        $post->telefone = $request->input('telefone');
        $post->posicao = $request->input('posicao');
        $post->save();

        return 'Contato criado com sucesso com o id ' . $post->id;
    }


    /**
     * Exibir um registo expecífico.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        return Contato::find($id);
    }


    /**
     * Editar um registro específico.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id) {

        $contato = Contato::find($id);

        $contato->nome = $request->input('nome');
        $contato->email = $request->input('email');
        $contato->telefone = $request->input('telefone');
        $contato->posicao = $request->input('posicao');
        $contato->save();

        return "Usuário #" . $contato->id . " editado com sucesso.";
    }


    /**
     * Remover um registro específico.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy(Request $request, $id) {

        $contato = Contato::find($id);
        $contato->delete();

        return "Contato #" . $id. " excluído com sucesso.";
    }

}