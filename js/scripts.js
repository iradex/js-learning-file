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
        if (typeof item ==='object' && Object.keys(item) == ['name']) {
      repository.push(item);
        } else {
            console.log("Only objects allowed!");
        }
    }

    function getAll() {
        return repository;
    }
    return {
        add: add,
        getAll: getAll
    };

    })();


for (var i=0; i<pokemonRepository.getAll().length; i++) {
    if (pokemonRepository.getAll()[i].height<0.6) { 
        document.write(pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ') </div> <br> <br> ' );
    } else {
        document.write(pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ') - Wow, that\'s big!  <br> <br> ');
    }
}




