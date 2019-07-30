var pokemonRepository = (function () {

var repository = []; 
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
    
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

    
    function addListItem(pokemon) {
        var $list = document.querySelector('.pokemon-list');
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText=pokemon.name;
        button.classList.add("btn");
        listItem.appendChild(button);
        $list.appendChild(listItem);
        button.addEventListener('click', function(){
            showDetails(pokemon);
        });
    }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = Object.keys(details.types);
        }).catch(function (e) {
          console.error(e);
        });
      }

    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem
    };    

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
  });

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);  
    });
  }








