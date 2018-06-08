class PaginacaoView extends View {

    constructor(elemento){

        super(elemento);
    }

    template(model){

        return `
            <div class="container">
                <div class="row">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            ${model.divisao(4).map(p => `
                                <li class="page-item"><a class="page-link" href="#">${p}</a></li>
                            `).join('')}
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        `;
    }
}