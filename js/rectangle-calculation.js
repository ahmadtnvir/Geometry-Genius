function rectangleAreaCalculate(){
    const getWidthInput = document.getElementById('get-width-input');
    const getLengthInput = document.getElementById('get-length-input');
    const pushRectangleArea = document.getElementById('rectangle-area');

    const getWidthInputValue = getWidthInput.value;
    const getLengthInputValue = getLengthInput.value;

    const getWidthInputValueInNumber = parseFloat(getWidthInputValue);
    const getLengthInputValueInNumber = parseFloat(getLengthInputValue);

    const totalArea = getWidthInputValueInNumber * getLengthInputValueInNumber;
    pushRectangleArea.innerText = totalArea;
}

