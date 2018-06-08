class PersonagemModalView extends View {

    constructor(elemento){

        super(elemento);
    }

    template(model){

        return `
            <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" 
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${model.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <img src="${model.thumbnail}" class="img-fluid" alt="Responsive image">
                            <br />
                            <strong>ID:</strong> ${model.id}
                            <br>
                            <strong>Descrição:</strong> ${model.description}
                            <br>
                            <strong>Comics:</strong>
                            <ul>
                                ${model.comics.items.map(comic => `
                                    <li>${comic.name}</li>
                                `
                                ).join('')}
                            </ul>
                            <br>
                            <strong>Series:</strong>
                            <ul>
                                ${model.series.items.map(serie => `
                                    <li>${serie.name}</li>
                                `
                                ).join('')}
                            </ul>
                            <br>
                            <strong>Stories:</strong>
                            <ul>
                                ${model.stories.items.map(storie => `
                                    <li>${storie.name}</li>
                                `
                                ).join('')}
                            </ul>
                            <br>
                            <strong>Events:</strong>
                            <ul>
                                ${model.events.items.map(event => `
                                    <li>${event.name}</li>
                                `
                                ).join('')}
                            </ul>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}