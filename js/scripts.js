var pokemonRepository = (function () {

var repository = []; 
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json(); // the response by "fetch" is not the actual data we are looking for - instead, it is an object that holds the .json() method. We need to parse the object with it to get the data. This returns another promise.
      }).then(function (json) {
        console.log(json);
        json.results.forEach(function (item) { // "json.results" refers to the property "results" - which is an array, for which we use the forEach loop
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
      showModal(item.name, "Height: " + item.height + " inches", item.imageUrl)  
    });
  }


  function showModal(title, text, imageLink) {
    var $modalContainer = document.querySelector('#modal-container');
    
    $modalContainer.innerHTML="";
    
    var modal = document.createElement('div');
    modal.classList.add("modal");
    
    var $closeButton = document.createElement('button');
    $closeButton.classList.add('modal-close');
    $closeButton.innerText = "Close";
    $closeButton.addEventListener("click", removeModal)
    
    var $title = document.createElement("h1");
    $title.innerText = title;
    var $content = document.createElement("p");
    $content.innerText = text;
    var $picture = document.createElement("img")
    $picture.src=imageLink;
    $picture.classList.add("poke-pic")

    modal.appendChild($closeButton);
    modal.appendChild($title);
    modal.appendChild($content);
    modal.appendChild($picture);
    $modalContainer.appendChild(modal);
    $modalContainer.classList.add("is-visible");

    function removeModal() {
      var modalContainer = document.querySelector("#modal-container");
      modalContainer.classList.remove("is-visible");
    }
  
    window.addEventListener('keydown', (e) => {
      var $modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
        removeModal();  
      }
    });
  
    $modalContainer.addEventListener('click', (e) => {
      var target = e.target;
      if (target === $modalContainer) {
        removeModal();
      }
    });
    
  } 

  








