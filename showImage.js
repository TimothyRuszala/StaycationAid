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
    console.log("startIndex: ", startIndex);
    let searchSubstring = text.substring(startIndex, startIndex + 400);
    console.log(searchSubstring);
    let jpgIndex = searchSubstring.indexOf('.jpg');
    let imgURLwithThumb = searchSubstring.substring(10, jpgIndex + 4);
    console.log(imgURLwithThumb);
    let imgURL = 'https://' + imgURLwithThumb.replace('/thumb', '');
    console.log(imgURL);
    document.getElementById('image').setAttribute('src', imgURL);
}

function getPictureOfCity(cityName) {

    const cityQuery = wikifyCityName(cityName);
    console.log(cityQuery);

    let scriptTag = document.createElement('script');
    scriptTag.src = `https://en.wikipedia.org/w/api.php?action=parse&page=${cityQuery}&prop=text&formatversion=2&format=json&callback=showImage`;
    document.body.appendChild(scriptTag);

}


// cityName = 'Paris'
// getPictureOfCity(cityName);

