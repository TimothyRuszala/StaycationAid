function generateWikipediaLink(cityName) {
    const q = wikifyCityName(cityName);
    return `https://en.wikipedia.org/wiki/${q}`;
}

function wikifyCityName(cityName) {
    return cityName.replace(/ /g, "_");
}

// THIS WORKS!!!!!!
function showImage(data) {
    const text = data.parse.text;
    let startIndex = text.indexOf('srcset');
    let searchSubstring = text.substring(startIndex, startIndex + 400);
    let jpgIndex = searchSubstring.indexOf('.jpg');
    let imgURLwithThumb = searchSubstring.substring(10, jpgIndex + 4);
    let imgURL = 'https://' + imgURLwithThumb.replace('/thumb', '');
    document.getElementById('image').setAttribute('src', imgURL);
}

function getPictureOfCity(cityName) {

    const cityQuery = wikifyCityName(cityName);

    let scriptTag = document.createElement('script');
    scriptTag.src = `https://en.wikipedia.org/w/api.php?action=parse&page=${cityQuery}&prop=text&formatversion=2&format=json&callback=showImage`;
    document.body.appendChild(scriptTag);

}


// cityName = 'Paris'
// getPictureOfCity(cityName);

