const cors = 'https://cors-anywhere.herokuapp.com/',
    endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=',
    key = 'f60b69054b02f50180d9c088e06270ea',
    secret = '34dd0c6e69370e1b0d2b06fb8343c17f',
    detail = 'Default';

const config = {
    Authorization: `Bearer ${secret}`
};

export const api = {

    getData: async function(query) {
        const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

        try {
            const response = await fetch(url, config);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log('Error: ', err);
        }
    }

};