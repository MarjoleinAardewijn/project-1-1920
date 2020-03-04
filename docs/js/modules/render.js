const main = document.querySelector('main'),
    book = document.querySelector('.books'),
    title = document.querySelector('.title');

export const render = {
    title: function(query) {
        const html = `
            <h1>Boeken over ${query}</h1>
        `;

        title.insertAdjacentHTML('beforeend', html);
    },

    books: function(data) {
        const results = data;
        console.dir(results);
        results.forEach((item, i) => {
            const html = `
                <article class="book">
                    <div class="book-inner">
                        <div class="book-front">
                            <img src="${item.coverimages ? item.coverimages[1] : 'Geen image'}">
                        </div>
                        <div class="book-back">
                            <h2>${item.titles[0]}</h2>
                            <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                        </div>
                    </div>
                </article>
            `;
            book.insertAdjacentHTML('beforeend', html);
        });
    },

    details: function(elementIdHeader, elementIdBooks, query, data) {
        console.log(data.length);
        if(data.length !== 0) {
            this.remove(elementIdHeader);
            this.remove(elementIdBooks);
            this.title(query);
            this.books(data);
        } else {
            this.remove(elementIdHeader);
            this.remove(elementIdBooks);
            this.title(query);
            this.noDataFound(query);
        }
    },

    /**
     * No data found html renderer.
     */
    noDataFound: function (query) {
        const html = `
            <div class="no-data"><span>Oeps! Het ziet er naar uit dat er geen boeken zijn van het dier ${query}</span></div>
        `;

        book.insertAdjacentHTML('beforeend', html);
    },

    /**
     * Function to remove all the content inside a div.
     *
     * @param elementId: the ID of the div that you want to clear.
     */
    remove: function (elementId) {
        const div = document.getElementById(elementId);

        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
};