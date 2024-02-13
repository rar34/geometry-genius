function getInputValueById(inputId){
    const inputText = document.getElementById(inputId);
    const inputValue = inputText.value;
    const input = parseFloat(inputValue);
    inputText.value = '';
    return input;
    
}