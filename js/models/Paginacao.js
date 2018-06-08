class Paginacao{
    
    constructor(total = ''){
        this._total = total;
    }

    get total(){
        return this._total;
    }
    divisao(pag){
        //pag
        let totalDePag = Math.floor(this._total / 10);
        let x = [];

        if(pag <= totalDePag){

            for(let i = 1; i <= 10; i++){
                let ii = i + (pag * 10);
                if(this._total >= ii){
                    x.push(ii);
                }
            }
        } else {
            console.log('falho');
        }

        return x;
    }
}