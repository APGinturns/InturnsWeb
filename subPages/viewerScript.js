
window.onload = function () {
    var url = document.location.href;
    var params = url.split('?')[1].split('&');
    var data = {};
    for (var i = 0; i < params.length; i++) {
        var tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    var nameValue = data.name;
    document.getElementById('name').innerHTML = separateName(nameValue);
    document.getElementById('title').innerHTML = separateName(nameValue);
    console.log(separateName(nameValue));
    document.getElementById('img').innerHTML = `<img src="${getImagePath(nameValue)}" alt="${nameValue}">`;

    let name = nameValue.replace(/ /g,'');
    console.log(name);
    const iframe = document.getElementById("myIframe");
    const links = {
        "RayanFoster": "https://docs.google.com/viewer?srcid=1Afgl20X7bnYXqVi3fHsL9Z70YRbK4exS&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "AlanBrown": "https://docs.google.com/viewer?srcid=19E34pgD5qfOQXiwtRcPRiJv8SADg0AZI&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "ZackKusiak": "https://docs.google.com/viewer?srcid=1AIyNCp-7vQWB8-a1-Zk2PDzJ3lE85qym&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "CorinneCookson": "https://docs.google.com/viewer?srcid=1Zau0cH_2baAEncbcuCMj1Sc13u0ctNcc&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "BryanMalone": "https://docs.google.com/viewer?srcid=14tNYWJE00Rr47sMJIHowJcenunDoE8Xl&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "SpencerWilcox": "https://docs.google.com/viewer?srcid=1My7n-O5T-ebg7FaEl0Y1otnB5FJoZ-QD&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "DestinyGreen": "https://docs.google.com/viewer?srcid=1VtUEr07XW9u2SiTlkSzEaxhQppJBZaZq&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "KentJohnston": "https://docs.google.com/viewer?srcid=1I1yhohhixAhvEQXEwZ9z6tcYQQRW9Jsb&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "ZionPleasant": "https://docs.google.com/viewer?srcid=1EIkK5mHZbd-LHgbCQ9VXnx2y0KIWei2d&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "2023FullPresentation": "https://docs.google.com/viewer?srcid=10Ml0kBmJlPUs8-r1Aq_Frg5li-gLH8Vn&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "AgathaFowler": "https://docs.google.com/viewer?srcid=19FaBSIGtmmuJpob4PNmu5vEvADIYe1dM&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "AriyaNazari": "https://docs.google.com/viewer?srcid=1PhHH1DQ0vU7lIJF57UxKQqgubcFBatKK&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "BaileyOlson": "https://docs.google.com/viewer?srcid=12MbUQHYhBjkiODBi9fihwKSBI3KD2fb3&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "JackParker": "https://docs.google.com/viewer?srcid=1LoI83YCcsvd8siASDrKIanEOjI-t0E7o&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "JackValentine": "https://docs.google.com/viewer?srcid=1OlV3rUavvYV3JuSHXjpyf58oaTrz3O90&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "LaraSakhnini": "https://docs.google.com/viewer?srcid=1plXOFCwMEDlmNkvyE17MI4Uxb5cpu1Z0hWv5pp6Wc_M&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "ReaganParker": "https://docs.google.com/viewer?srcid=16o2jklB0VD-3BibH5t-VWmzG1DkDLZDN&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "RyanLin": "https://docs.google.com/viewer?srcid=1F_jabTw8GKa-rqXbFFjjZB6iM7SElpR4&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "HarshitaKhazanchi": "https://docs.google.com/viewer?srcid=1F_jabTw8GKa-rqXbFFjjZB6iM7SElpR4&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "SamuelLove": "https://docs.google.com/viewer?srcid=1F6qr0JxGvhI-yfs7xdj6py1cq7tX2QY2&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "SarahHailu": "https://docs.google.com/viewer?srcid=1YSvmu9uDzqUmKZaGfPlA7wpe_2hNqnvq&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "ShreyaSenthil": "https://docs.google.com/viewer?srcid=19ZaFIZhNs9HMwaxv5wMbNZipfw0AHJ2E&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "ShrutiSenthil": "https://docs.google.com/viewer?srcid=1xE0YIhUKS6bwGpFBfqYzSe5lITIY0Wgd&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
        "2024FullPresentation": "https://docs.google.com/viewer?srcid=1mQQLI2YVW___bwI--EX8OfTJ_t_rY8r6&pid=explorer&efh=false&a=v&chrome=false&embedded=true"

    };
    return iframe.src = links[name] || "Name not found";

};

function separateName(fullName, type) {
    // Regular expression to match a year followed by a name or just a name
    let separatedName = fullName.replace(/(\d{4})?([A-Z][a-z]+)([A-Z][a-z]*)?([A-Z][a-z]+)/, (match, year, firstName, middleName, lastName) => {
        return (year ? year + ' ' : '') + firstName + ' ' + (middleName ? middleName + '' : '') + lastName;
    });
    return separatedName;
};

function getImagePath(nameValue) {
    const extensions = ['.png', '.jpg', '.webp'];
    let imagePath = '';

    // First, try with the year
    for (let ext of extensions) {
        let pathWithYear = `../images/${nameValue}${ext}`;
        if (imageExists(pathWithYear)) {
            imagePath = pathWithYear;
            break;
        }
    }

    // If not found, try without the year
    if (!imagePath) {
        const nameWithoutYear = nameValue.replace(/^\d+\s*/, '');
        for (let ext of extensions) {
            let pathWithoutYear = `../images/${nameWithoutYear}${ext}`;
            if (imageExists(pathWithoutYear)) {
                imagePath = pathWithoutYear;
                break;
            }
        }
    }

    return imagePath || '../images/blank.webp';
}

function imageExists(imageUrl) {
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status !== 404;
};

function closeTab() {
    window.close();
}

