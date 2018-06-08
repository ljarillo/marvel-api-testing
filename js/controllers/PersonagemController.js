class PersonagemController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputBusca = $('#busca');

        this._listaPersonagens = new ListaPersonagens();
        /*
        this._listaPersonagens = new ListaPersonagens( model => 
            this._personagemView.update(model));
            */

        this._personagemView = new PersonagemView($('#personagens-view'));
        this._personagemView.update(this._listaPersonagens);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagem-view'));
        this._mensagemView.update(this._mensagem);

        this._paginacao = new Paginacao(1491);
        this._paginacaoView = new PaginacaoView($('#paginacao-view'));
        //this._paginacaoView.update(this._paginacao);

        this._personagemModalView = new PersonagemModalView($('#modal-view'));
        
    }

    adiciona(event){

        //Retira os eventos padrão do subimit
        event.preventDefault();

        this._mensagem.texto = 'Personagem adicionado com sucesso';
        this._mensagem.classe = 'alert-info';
        this._mensagemView.update(this._mensagem, this._mensagem.classe);
        
        this._limpaFormulario();
    }

    apaga(){
        
        this._listaPersonagens.esvazia();
        this._personagemView.update(this._listaPersonagens);

        this._mensagem.texto = 'Tabela limpa com sucesso.';
        this._mensagem.classe = 'alert-info';
        this._mensagemView.update(this._mensagem, this._mensagem.classe);
    }
    buscaPersonagens(event){
        event.preventDefault();
        this.importaPersonagens(this._inputBusca.value);
    }

    importaPersonagens(name){

        let paramName = name ? `name=${name}&`: ``;
        let ts = '1';
        let hashText = (ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY);
        md5(hashText);
        let hash = md5.create();
        hash.update(hashText);
        hash.hex();

        let url = `http://gateway.marvel.com/v1/public/characters?${paramName}limit=20&ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`;
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if( xhr.readyState == 4){
                if(xhr.status == 200){
                    
                    JSON.parse(xhr.responseText).data.results
                        .map(objeto => new Personagem(
                            objeto.id, objeto.name, objeto.description, objeto.thumbnail, objeto.comics, objeto.series, objeto.stories, objeto.events))
                        .forEach(personagem => this._listaPersonagens.adiciona(personagem));
                    this._personagemView.update(this._listaPersonagens);
                    this._mensagem.texto = 'Personagens carregados com sucesso.';
                    this._mensagem.classe = 'alert-success';
                    this._mensagemView.update(this._mensagem, this._mensagem.classe);
                } else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível carregar os personagens da API Marvel';
                    this._mensagem.classe = 'alert-danger';
                    this._mensagemView.update(this._mensagem, this._mensagem.classe);
                }
            }
        }
        xhr.send();
    }

    detalhe(id){

        let personagem = this._buscaPersonagemID(id);
        this._personagemModalView.update(personagem);
        $('#exampleModal').on('shown.bs.modal');
    }

    _criaPersonagem(){

        return new Personagem (
            this._inputID.value,
            this._inputPersonagem.value,
            this._inputDescription.value,
            this._inputThumbnail.value,
            comics,
            [],
            [],
            []
        );
    }

    _limpaFormulario(){

        this._inputID.value = '';
        this._inputThumbnail.value = '';
        this._inputDescription.value = '';
        this._inputPersonagem.value = '';

        this._inputID.focus();

    }

    _buscaPersonagemID(id){
        let personagem = new Personagem();
        this._listaPersonagens.personagens.map(p =>{
            if(id == p.id){
                personagem = p;
            }
        });
        return personagem;
    }
    _buscaPersonagemNome(name){
        let personagem = new Personagem();
        this._listaPersonagens.personagens.map(p =>{
            if(id == p.id){
                personagem = p;
            }
        });
        return personagem;
    }
        
}