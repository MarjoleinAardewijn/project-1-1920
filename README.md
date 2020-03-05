# Project 1 @cmda-minor-web · 2019-2020

![Overview](https://github.com/MarjoleinAardewijn/project-1-1920/blob/readme/images/overview-v2.png "Overview")

![Details](https://github.com/MarjoleinAardewijn/project-1-1920/blob/master/images/details.png "Details")

## Description

The Amsterdam Public Library (OBA) had a number of cases for which they wanted to see some solutions.
One of those cases was a project helper. For this case I came up with the idea of making the search visual, 
so that when children click on a topic the project helper will search for the books. For this prototype I 
used animals for the topics. But of course this could easily be changed to other topics.

Furthermore, I also had the idea to ensure that when someone hovers over a topic with the
mouse the word is will be spoken as well. This so that children who do not speak Dutch very well,
not only see but also hear the word. Unfortunately I didn't have time for this during this project week, 
but this would be a nice feature to add later.

## Table of Contents

* [Live Demo](#Live-demo)
* [Usage](#Usage)
* [API](#Api)
* [Feature Wishlist](#Feature-Wishlist)
* [Sources](#Sources)
* [Credits](#Credits)
* [Licence](#Licence)

## Live Demo

The live demo of the app can be found here:
[Live Demo Link](https://marjoleinaardewijn.github.io/project-1-1920/).

## Usage

Go via the terminal to the folder you want the project to be placed:

```
    cd Path/To/Folder
```

Clone the repository and go to the project folder:

```
    git clone https://github.com/MarjoleinAardewijn/web-app-from-scratch-1920.git && cd web-app-from-scratch-1920
```

After cloning the repository start your local server and run your `index.html` file.

## API

For this project I used the [OBA-API](https://zoeken.oba.nl/api/v1/).

For getting the books from a specific topic I used the following API endpoint:

> https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=classification:informatieboek%20[query]&authorization=[api-key]&detaillevel=Default&refine=true&facet=doelgroep(ageYouth)&output=json

For the API to work you also need to a secret key:

```javascript
config = {
    Authorization: `Bearer [api-secret-key]`
};
```

And then, you need to give your fetch the parameters url **and** config:

```javascript
fetch(url, config)
```

After fetching the data, this will be returning the following data:

![JSON Data](https://github.com/MarjoleinAardewijn/project-1-1920/blob/master/images/json-data.png "JSON Data")

<details>
<summary>Extra API Documentation (From Mark from OBA):</summary>

Documentation [OBA-API](https://zoeken.oba.nl/api/v1/).

The facet description on the help page is how it works in a standard installation. The facets have been adjusted for the OBA, so they must also be used specifically in this way.

You can request which facets are available for each query by specifying the `& refine = true` parameter in the / search:

```
https://zoeken.oba.nl/api/v1/search/?q=boek&authorization=[api-key]&refine=true
```

By default no refine is done on the API search, because that is a bit faster and it is not always used. With `refine=true` on the url you see an extra piece in the output:

```html
<facets>
    ...  
    <facet id="Type">
        <value count="422426" id="book" />
        <value count="2059" id="dvdvideo" />
        <value count="2186" id="movie" />
        <value count="3678" id="largetype" />
    </facet>
    ...
</facets>
```

This means if you only want books, you have to use this query:

```
https://zoeken.oba.nl/api/v1/search/?q=boek&authorization=[api-key]&facet=type(book)
```

If you also do things specifically for youth, you can piggyback on some of the functionality that we have created for OBAJunior, namely an index on a special youth classification that is in the catalog.

You can see which values are in that index via the API:

```
https://zoeken.oba.nl/api/v1/index/classification/?authorization=[api-key]
```

So this is not a facet, but a search. You can do this search as follows:

```
https://zoeken.oba.nl/api/v1/search/?q=classification:prentenboek&authorization=[api-key]
```

You can also combine this with another search term, eg. `q=classification:picturebook%20tiger`. A space is equivalent to an `AND`, so with this search you will find all picture books with the word tiger in the title/description/etc.

It is also possible to request facet totals without a search term, for example for the topic animals:
[https://zoeken.oba.nl/?q=special%3Aall&dim=Topic(Dieren)/](https://zoeken.oba.nl/?q=special%3Aall&dim=Topic(Dieren)/)

</details>

## Feature Wishlist

In the future I would like to add:

- [ ] speaking words on hover.
- [ ] responsive design.

## Sources

The sources I used the most during the development of the app are:
- [W3Schools](https://www.w3schools.com/).
- [W3Bits](https://w3bits.com/).
- [CodePen](https://codepen.io/).

## Credits

- [Flip Cards](https://www.w3schools.com/howto/howto_css_flip_card.asp).
- [Rainbow Text](https://w3bits.com/rainbow-text/).
- [Hover Effect](https://codepen.io/stoic25/pen/xwVZyo).
- [README](https://github.com/DanielvandeVelde/functional-programming) from Daniel van de Velde.
- Mark from OBA for the extra documantation info.


## Licence

[MIT License](https://github.com/MarjoleinAardewijn/project-1-1920/blob/master/LICENSE.txt) 

Copyright (c) 2020 Marjolein Aardewijn
