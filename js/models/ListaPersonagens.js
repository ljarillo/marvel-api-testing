class ListaPersonagens {

    constructor(){

        this._personagens = [];
    }
    
    adiciona(personagens){

        this._personagens.push(personagens);
    }

    get personagens(){

        return [].concat(this._personagens);
    }

    esvazia(){

        this._personagens = [];
    }
}