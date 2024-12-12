const darkModeButton = document.getElementById("darkModeButton")
const bodyElement = document.body;
darkModeButton.addEventListener('click', () =>{
    if(bodyElement.classList.contains('darkMode')){
        bodyElement.classList.remove('darkMode');
        darkModeButton.innerText = 'darkMode';
    } else {
        bodyElement.classList.add('darkMode');
        darkModeButton.innerText = 'light Mode';
    }
} )