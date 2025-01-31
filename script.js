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

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

function hideLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    const overlay = document.getElementById('modalOverlay');
    
    if (event.target === overlay) {
        hideLoginModal();
    }
}

// Example login function (you can modify this to suit your needs)
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        console.log('Login attempt detected!\nUsername: ' + username + '\nPassword: ' + password);
        hideLoginModal();
    } else {
        console.log('Please fill in all fields!');
    }
}

//Onload Functions

window.onload =  display('all');