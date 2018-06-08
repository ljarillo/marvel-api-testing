class PersonagemView extends View {

    constructor(elemento){

        super(elemento);
    }

    template(model){
       
       return `
        <table class="table table-sm table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>THUMBNAIL</th>
                    <th>NAME</th>
                    <th>INFO</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.personagens.map(p => `
                    <tr>
                        <td><img width="100px" src="${p.thumbnail}" alt="${p.name}" class="img-thumbnail"></td>
                        <td>${p.name}</td>
                        <td>
                            <button onclick="personagemController.detalhe(${p.id})" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                +
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
                
            <tfoot>
                <td colspan="5">Total pesquisado <strong>${model.personagens.length}</strong></td>
            </tfoot>
        </table>
        `;
    }
}

//*<td>${model.personagens.reduce((total, p) => total + p.id, 0.0)}</td>

