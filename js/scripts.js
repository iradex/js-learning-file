var pokemonRepository = (function () {

var repository = [
    {
        name: 'diglet',
        height: 0.2,
        type: ['ground']
    },
    { 
        name: 'jigglypuff',
        height: 0.6,
        type: ['fairy', 'normal']
    },
    {
        name: 'magnemite',
        height: 0.3,
        type: ['electric', 'steel']
    },
    {
        name: 'oddish',
        height: 0.5,
        type: ['grass', 'poison']
    }
    ]; 
    
    function add(item) {
        if (typeof item ==='object') {
      repository.push(item);
        } else {
            console.log("Only objects allowed!");
        }
    }

    function getAll() {
        return repository;
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        var $list = document.querySelector('.pokemon-list');
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText=pokemon.name;
        button.classList.add("btn");
        listItem.appendChild(button);
        $list.appendChild(listItem);
        button.addEventListener('click', function(){
            showDetails(pokemon.name);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };

})();

/*for (var i=0; i<pokemonRepository.getAll().length; i++) {
    if (pokemonRepository.getAll()[i].height<0.6) { 
        document.write(pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ') </div> <br> <br> ' );
    } else {
        document.write(pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ') - Wow, that\'s big!  <br> <br> ');
    }
}*/

pokemonRepository.getAll().forEach(pokemonRepository.addListItem); // The ".getAll()" is returning the entire repository array, while the "forEach" iterates over all items of the array with the addListItem Method)






