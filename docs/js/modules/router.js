import {api} from "./api.js";
import {data as dataModule} from "./data.js";

export const router = {

    handler: async function() {
        // dataModule.clear();
        this.route();
    },

    /**
     * Function to update the hash depending on which painting is clicked, using Routie.
     */
    route: function() {
        routie(
            ':query', query => {
                if (localStorage.getItem(query) === null) {
                    console.log('getData');
                    this.dataFromFetch(query);
                } else {
                    console.log('local');
                    this.dataFromLocalStorage(query);
                }
                this.updateUI(query);
            }
        );
    },

    dataFromFetch: async function(query) {
        return await api.getData(query);
    },

    dataFromLocalStorage: function(query) {
        let animals = dataModule.getItem(query);
        console.log('getItem: ', animals);
        let parseAnimal = dataModule.parse(animals);
        console.log('parseAnimal: ', parseAnimal);
        return parseAnimal;
    },

    /**
     * Function to add and remove active class depending if the data in the data-route attr matches the objectNumber
     * in routie function.
     *
     * @param route
     */
    updateUI: function (route) {
        if(document.querySelector('a[data-route].active')){
            document.querySelector('a[data-route].active').classList.remove('active');
        }
        let activeDiv = document.querySelector(`a[data-route=${route}]`);
        activeDiv.classList.add('active');
    }
};