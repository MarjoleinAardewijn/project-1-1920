import {api} from "./api.js";
import {render} from "./render.js";
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
            ':query', async query => {
                if (localStorage.getItem(query) === null) {
                    console.log('getData');
                    const data = await api.dataFromFetch(query);
                    await render.details('title', 'books', query, data);
                } else {
                    console.log('local');
                    const data = await api.dataFromLocalStorage(query);
                    await render.details('title', 'books', query, data);
                }
                this.updateUI(query);
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
            document.querySelector('.results.active').classList.remove('active');
            document.querySelector(`main`).classList.remove('active');
        }
        let activeDiv = document.querySelector(`a[data-route=${route}]`);
        let activeSection = document.querySelector(`.results`);
        let activeMain = document.querySelector(`main`);
        activeDiv.classList.add('active');
        activeSection.classList.add('active');
        activeMain.classList.add('active');
    }
};