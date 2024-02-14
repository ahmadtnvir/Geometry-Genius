function ellipseAreaCalculate(){
    const getEllipseInput = document.getElementById('get-ellipse-area-input');
    const getBaseInput = document.getElementById('get-ellipse-base-input');
    const pushEllipseArea = document.getElementById('ellipse-area');

    const getEllipseInputValue = getEllipseInput.value;
    const getBaseInputValue = getBaseInput.value;
    
    const getEllipseInputValueInNumber = parseFloat(getEllipseInputValue);
    const getBaseInputValueInNumber = parseFloat(getBaseInputValue);

    const totalArea = 3.1416 * getEllipseInputValueInNumber * getBaseInputValueInNumber;
    pushEllipseArea.innerText = totalArea;

    getEllipseInput.value = '';
    getBaseInput.value = '';
}