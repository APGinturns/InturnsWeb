
window.onload = function () {
    var url = document.location.href;
    var params = url.split('?')[1].split('&');
    var data = {};
    for (var i = 0; i < params.length; i++) {
        var tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    var nameValue = data.name;
    document.getElementById('name').innerHTML = separateName(nameValue);//.replace(/([a-z])([A-Z])/g, '$1 $2');
    console.log(separateName(nameValue));
    document.getElementById('img').innerHTML = `<img src="${getImagePath(nameValue)}" alt="${nameValue}">`;

    //document.getElementById('img').innerHTML = '<img src="getImagePath(nameValue)" alt="nameValue">';
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
        "2023FullPresentation": "https://docs.google.com/viewer?srcid=10Ml0kBmJlPUs8-r1Aq_Frg5li-gLH8Vn&pid=explorer&efh=false&a=v&chrome=false&embedded=true"

    };
    return iframe.src = links[name] || "Name not found";

};

function separateName(fullName) {
    // Regular expression to match a year followed by a name or just a name
    let separatedName = fullName.replace(/(\d{4})?([A-Z][a-z]+)([A-Z][a-z]*)?([A-Z][a-z]+)/, (match, year, firstName, middleName, lastName) => {
        return (year ? year + ' ' : '') + firstName + ' ' + (middleName ? middleName + '' : '') + lastName;
    });
    return separatedName;
};

function getImagePath(nameValue) {
    const extensions = ['.png', '.jpg', '.webp'];
    let imagePath = '';

    for (let ext of extensions) {
        let path = `../images/${nameValue}${ext}`;
        if (imageExists(path)) {
            imagePath = path;
            break;
        }
    }

    return imagePath || '../images/blank.webp'; // Fallback to a default image if none found
};

function imageExists(imageUrl) {
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status !== 404;
};


