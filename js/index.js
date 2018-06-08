var campos = [
    document.querySelector('#personagem'),
    document.querySelector('#link'),
    document.querySelector('#thumbnail')
];
console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(e){

    e.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    campos[0] = '';
    campos[1] = '';
    campos[2] = '';
});