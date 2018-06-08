class View {

    constructor(elemento){
        
        this._elemento = elemento;
    }

    template(){
        throw new Error('O metodo template d eve ser implementado');
    }

    update(model, classe){

        this._elemento.innerHTML = this.template(model);
    }
}