class Mensagem {
    
    constructor(texto='', classe =''){
        
        this._texto = texto;
        this._classe = classe;
    }

    get texto(){

        return this._texto;
    }

    set texto(texto){

        this._texto = texto;
    }

    get classe(){

        return this._classe;
    }

    set classe(classe){

        this._classe = classe;
    }
}