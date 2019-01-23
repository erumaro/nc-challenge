const inputText = document.getElementById('change-text');
const inputRange = document.getElementById('change-width');
const formOutput = document.getElementById('form-output');

inputText.value = localStorage.getItem('currentDivText');
inputRange.value = localStorage.getItem('currentDivWidth');
formOutput.style.width = `${localStorage.getItem('currentDivWidth')}px`;
formOutput.innerText = localStorage.getItem('currentDivText');

textFit(formOutput);

inputRange.addEventListener('change', setNewWidthOfDiv);
inputText.addEventListener('input', writeTextInsideDiv);

function setNewWidthOfDiv() {
    formOutput.style.width = `${inputRange.value}px`;
    localStorage.setItem('currentDivWidth', this.value);
    textFit(formOutput);
}

function writeTextInsideDiv() {
    formOutput.innerText = inputText.value;
    localStorage.setItem('currentDivText', this.value);
    textFit(formOutput);
}

// localStorage.setItem('key', 'value'); // Ex. 'Width', 200
// localStorage.clear(); // Create a button to reset forms.