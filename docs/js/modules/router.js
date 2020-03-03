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
            ':animal', animal => {

                if (localStorage.getItem(animal) === null) {
                    console.log('getData');
                    this.dataFromFetch(animal);
                } else {
                    console.log('local');
                    this.dataFromLocalStorage(animal);
                }
                this.updateUI(animal);
            }
        );
    },

    dataFromFetch: async function(animal) {
        return await api.getData(animal);
    },

    dataFromLocalStorage: function(animal) {
        let animals = dataModule.getItem(animal);
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