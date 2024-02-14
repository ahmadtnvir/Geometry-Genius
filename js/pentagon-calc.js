function pentagonAreaCalculate(){
    const getPerimeterInput = document.getElementById('get-perimeter-input');
    const getBaseInput = document.getElementById('get-pentagon-base-input');
    const pushPentagonArea = document.getElementById('pentagon-area');

    const getPerimeterInputValue = getPerimeterInput.value;
    const getBaseInputValue = getBaseInput.value;
    
    const getPerimeterInputValueInNumber = parseFloat(getPerimeterInputValue);
    const getBaseInputValueInNumber = parseFloat(getBaseInputValue);

    const totalArea = 0.5 * getPerimeterInputValueInNumber * getBaseInputValueInNumber;
    pushPentagonArea.innerText = totalArea;

    getPerimeterInput.value = '';
    getBaseInput.value = '';
}