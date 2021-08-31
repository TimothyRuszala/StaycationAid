const API_KEY = "25159f62ee4b6390eaf7d424869031ac";

// returns a promise
function getTempByZipCode(zipCode) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.status === 200) {
                const weather = JSON.parse(xhr.responseText);
                qTemp = KelvToFahr(weather.main.temp);
                resolve([zipCode, qTemp]);
            } else {
                reject(xhr.statusText);
            }
        };
        const url = "api.openweathermap.org/data/2.5/weather?zip=";
        const endpoint = "https://" + url + zipCode + "&appid=" + API_KEY;
        xhr.open('GET', endpoint, true);
        xhr.send();
    });
}


// returns a promise!
function getTempByCity(city, countryCode) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status === 200) {
                const weather = JSON.parse(xhr.responseText);
                const qTemp = KelvToFahr(weather.main.temp);
                // console.log(city, countryCode, qTemp);
                resolve([city, countryCode, qTemp]);
            } else {
                reject(xhr.status);
            }
        };
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_KEY}`;
        xhr.open('GET', endpoint, true);
        try {
            xhr.send();
        } catch (err) {
            console.log(`There was an error with ${city}, ${countryCode}`);
        }
    });
}

// Let's AJAX this in. Or format it so that there's no newline
function getCitiesArray(numOfCities) {
    return Promise.resolve([
        ['Tokyo', 'JP'],
        ['Delhi', 'IN'],
        ['Mumbai', 'IN'],
        ['Manila', 'PH'],
        ['Shanghai', 'CN'],
        ['Sao Paulo', 'BR'],
        ['Seoul', 'KR'],
        ['Mexico City', 'MX'],
        ['Guangzhou', 'CN'],
        ['Beijing', 'CN'],
        ['Cairo', 'EG'],
        ['New York', 'US'],
        ['Moscow', 'RU'],
        ['Bangkok', 'TH'],
        ['Buenos Aires', 'AR'],
        ['Shenzhen', 'CN'],
        ['Dhaka', 'BD'],
        ['Lagos', 'NG'],
        ['Istanbul', 'TR'],
        ['Osaka', 'JP'],
        ['Karachi', 'PK'],
        ['Bangalore', 'IN'],
        ['Tehran', 'IR'],
        ['Kinshasa', 'CD'],
        ['Ho Chi Minh City', 'VN'],
        ['Los Angeles', 'US'],
        ['Rio de Janeiro', 'BR'],
        ['Nanyang', 'CN'],
        ['Chennai', 'IN'],
        ['Chengdu', 'CN'],
        ['Lahore', 'PK'],
        ['Paris', 'FR'],
        ['London', 'GB'],
        ['Lima', 'PE'],
        ['Hyderabad', 'IN'],
        ['Bogota', 'CO'],
        ['Weifang', 'CN'],
        ['Nagoya', 'JP'],
        ['Wuhan', 'CN'],
        ['Chicago', 'US'],
        ['Luanda', 'AO'],
        ['Kuala Lumpur', 'MY'],
        ['Hanoi', 'VN'],
        ['Pune', 'IN'],
        ['Onitsha', 'NG'],
        ['Nanjing', 'CN'],
        ['Hong Kong', 'HK'],
        ['Khartoum', 'SD'],
        ['Santiago', 'CL'],
        ['Riyadh', 'SA'],
        ['Dar es Salaam', 'TZ'],
        ['Miami', 'US'],
        ['Surat', 'IN'],
        ['Baghdad', 'IQ'],
        ['Singapore', 'SG'],
        ['Nairobi', 'KE'],
        ['Ankara', 'TR'],
        ['Rangoon', 'MM'],
        ['Toronto', 'CA'],
        ['Saint Petersburg', 'RU'],
        ['Sydney', 'AU'],
        ['Guadalajara', 'MX'],
        ['Belo Horizonte', 'BR'],
        ['Melbourne', 'AU'],
        ['Surabaya', 'ID'],
        ['Abidjan', 'CI'],
        ['Alexandria', 'EG'],
        ['Barcelona', 'ES'],
        ['Johannesburg', 'ZA'],
        ['Casablanca', 'MA'],
        ['Izmir', 'TR'],
        ['Monterrey', 'MX'],
        ['Amman', 'JO'],
        ['Jeddah', 'SA'],
        ['Yokohama', 'JP'],
        ['Kabul', 'AF'],
        ['Berlin', 'DE'],
        ['Montreal', 'CA'],
        ['Busan', ' KR'],
        ['Algiers', 'DZ'],
        ['Lucknow', 'IN'],
        ['Madrid', 'ES'],
        ['Faisalabad', 'PK'],
        ['Santa Cruz', 'BO'],
        ['Jaipur', 'IN'],
        ['Addis Ababa', 'ET'],
        ['Giza', 'EG'],
        ['Brasilia', 'BR'],
        ['Mashhad', 'IR'],
        ['Kyiv', 'UA'],
        ['Sanaa', 'YE'],
        ['Quezon City', 'PH'],
        ['Salvador', 'BR'],
        ['Incheon', 'KR'],
        ['Bursa', 'TR'],
        ['Birmingham', 'GB'],
        ['Rome', 'IT'],
        ['La Paz', 'BO'],
        ['Pyongyang', 'KP'],
        ['Kano', 'NG']
    ].slice(0, numOfCities));
}

function getTemp(json) {
    try {
        return KelvToFahr(json.main.temp);
    } catch (error) {
        return null;
    }
}

function KelvToFahr(k) {
    return ((k - 273.15) * 9 / 5) + 32;
}

function findClosestTemp(targetT, cityTemps) {
    let bestTempDiff = Number.MAX_SAFE_INTEGER;
    let currentBestCity = [];
    for (let city of cityTemps) {
        const tempDiff = Math.abs(targetT - city.value[2]);
        if (tempDiff < bestTempDiff) {
            currentBestCity = city.value;
            bestTempDiff = tempDiff;
        }
    }
    return currentBestCity;
}

function getNewHtml(qCity, qTemp, newCity, newTemp) {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status === 200) {
            document.getElementById('content').setAttribute('class', 'fadeOut');
            setTimeout(() => {
                let request = xhr.responseText;

                document.getElementById('content').innerHTML = request;
                let spans = document.getElementsByTagName('span');
                spans[0].textContent = newCity;
                spans[1].textContent = newTemp + '°F';
                spans[2].textContent = newCity;
                spans[3].textContent = qTemp + '°F';
                spans[4].textContent = qCity;

                //add the image in, this function is in showImage.js
                getPictureOfCity(newCity);

                // Handle button action and push effect
                const backButton = document.getElementById('backButton');
                backButton.addEventListener('click', goBack, false);
                window.addEventListener('keydown', (e) => {
                    if (e.key !== "Enter") return;
                    backButton.setAttribute('class', 'hover');
                });
                window.addEventListener('keyup', (e) => {
                    if (e.key !== "Enter") return;
                    backButton.classList.remove('hover');
                    backButton.click();
                }, false);
                window.removeEventListener('click', handler);
                window.addEventListener('click', () => {
                    document.querySelector('.anim5').classList.add('skip-anim');
                    document.querySelector('.anim6').classList.add('skip-anim');
                    let anim7 = document.querySelectorAll('.anim7');
                    anim7[0].classList.add('skip-anim');
                    anim7[1].classList.add('skip-anim');
                    document.querySelector('.anim8').classList.add('skip-anim');
                });
                document.querySelector("a").setAttribute('href', generateWikipediaLink(newCity));
            }, 1000);

        }
    };
    xhr.open('GET', 'searchResult.html', false);
    xhr.send(null);
}

function goBack(e) {
    location.reload();
}

function loadErrorMessage() {
    document.getElementById('error').textContent = "Error: Please enter a valid ZIP Code.";
}

function generateWikipediaLink(cityName) {
    const q = cityName.replace(/ /g, "_");
    return `https://en.wikipedia.org/wiki/${q}`;
}

// MAIN
getWeatherPromise = function (query) {
    console.log('Searching...');

    getCitiesArray(50).then((cities) => {
        let tempProms = [];
        tempProms.push(getTempByZipCode(query));
        for (const city of cities) {
            tempProms.push(getTempByCity(city[0], city[1]));
        }
        let promAll = Promise.allSettled(tempProms).catch(e => {
            console.log("Error: ", e);
        });
        return promAll;
    }).then(cityTemps => {
        return new Promise((resolve, reject) => {
            let qTemp = cityTemps[0].value[1]; //the array indices aren't very revealling... this is the temp.
            let searchTemps = cityTemps.slice(1, cityTemps.length);
            let closestTemp = findClosestTemp(qTemp, searchTemps);
            // console.log("closestTemp:", closestTemp, "(queryTemp: ", qTemp, ")");
            getNewHtml(query, qTemp.toFixed(), closestTemp[0], closestTemp[2].toFixed());
            resolve(closestTemp);
        });
    }).catch(e => {
        console.log("Error: ", e);
        loadErrorMessage();
    });
};


//helper function for the event listener to skip
function handler() {
    document.querySelector('.anim1').classList.add('skip-anim');
    document.querySelector('.anim2').classList.add('skip-anim');
    document.querySelector('.anim3').classList.add('skip-anim');
    document.querySelector('.anim4').classList.add('skip-anim');
    setTimeout(() => {
        try {
            document.getElementById('form').click();
        } catch (err) {}
    }, 250);
}

window.addEventListener('load', () => {
    window.addEventListener('click', handler);

    // Add event listener to form, to help users find the box
    document.getElementById("form").addEventListener('click', () => {
        document.getElementById('zipCode').focus();
    });

    let btn = document.getElementById('submit');
    btn.addEventListener('click', () => {
        let zip = document.getElementById('zipCode');
        // console.log(zip.value);
        getWeatherPromise(zip.value);
    });
    window.addEventListener('keydown', (e) => {
        if (e.key !== "Enter") return;
        btn.setAttribute('class', 'hover');
    });
    window.addEventListener('keyup', (e) => {
        if (e.key !== "Enter") return;
        btn.classList.remove('hover');
        e.preventDefault();
        // console.log('default Prevented');
        btn.click();
    });
});