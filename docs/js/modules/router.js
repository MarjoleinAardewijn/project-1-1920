import {api} from "./api.js";

export const router = {

    handler: async function() {
        this.route();
    },

    /**
     * Function to update the hash depending on which painting is clicked, using Routie.
     */
    route: function() {
        routie(
            ':animal', animal => {
                api.getData(animal);
                this.updateUI(animal);
            }
        );
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