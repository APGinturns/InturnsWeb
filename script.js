const endYear = 2035;
const startYear = 2020;
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => (startYear + i));

//Open URL Function

function openLink(url) {
    window.open(url);
}

//Change Text Function

function changeText() {
    const yearElements = years.map(year => document.getElementById(year.toString())).filter(element => element !== null);
    console.log(yearElements);
    const showAllDiv = document.querySelector(".year");
    const allVisible = yearElements.every(yearElement => yearElement.style.display === "block");
    showAllDiv.textContent = allVisible ? "Hide All" : "Show All";
}

//Display Function

let numNone = 0;
let numblock = 0;

function display(type) {
    if (type !== "all") {
        const internsDiv = document.getElementById(type);
        numblock += (internsDiv.style.display === 'none') ? 1 : -1;

        internsDiv.style.display = internsDiv.style.display === 'none' ? 'block' : 'none';
        changeText();
    } else {
        for (const year of years) {
            const internsDiv = document.getElementById(year.toString());
            if (internsDiv !== null && internsDiv.style.display !== null) {
                if (internsDiv.style.display === 'none') {
                    internsDiv.style.display = internsDiv.style.display === 'none' ? 'block' : 'none';
                    //console.log (internsDiv.style.backgroundColor);
                    numblock++;
                    console.log(numblock + " b++");
                }else {numNone++;}
            }
        }
        let i = 1;
        for (const year of years) {
            const internsDiv = document.getElementById(year.toString());
            if (internsDiv !== null && internsDiv.style.display !== null) {
                if (numNone >= numblock) {
                    internsDiv.style.display = internsDiv.style.display === 'none' ? 'block' : 'none';

                    if (i >= numblock) {numblock = 0;}else {i++;}
                }
            }
        }
        numNone = 0;
        changeText();
    }
}

//Onload Functions

window.onload =  display('all');