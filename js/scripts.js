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

for (var i=0; i<repository.length; i++) {
    if (repository[i].height<0.6) { 
        document.write(' <div class="short"> ' + repository[i].name + ' (height: ' + repository[i].height + ') </div> <br> <br> ' );
    } else {
        document.write(repository[i].name + ' (height: ' + repository[i].height + ') - Wow, that\'s big!  <br> <br> ');
    }
}

function printPokemon(Pokemon) {
    document.write(Pokemon.name + ' (height: ' + Pokemon.height + ') <br> <br> ' )
}

repository.forEach(printPokemon);
