function getInputFieldValueById(getId) {
    const getInputField = document.getElementById(getId);
    const getInputFieldValue =getInputField.value;
    const getInputFieldValueInNumber = parseFloat(getInputFieldValue);
    getInputField.value = '';
    return getInputFieldValueInNumber;
}

function setElement(elementId,areaCalc) {
    const setElementId = document.getElementById(elementId);
    setElementId.innerText = areaCalc;
}

function triangleAreaCalculate() {
    const getBaseInput = getInputFieldValueById('get-base-input');
    const getHeightInput = getInputFieldValueById('get-height-input');
    const totalArea = 0.5 * getBaseInput * getHeightInput;
    setElement('triangle-area', totalArea);
}

function rectangleAreaCalculate() {
    const getWidthInput = getInputFieldValueById('get-width-input');
    const getLengthInput = getInputFieldValueById('get-length-input');
    const totalArea = getWidthInput * getLengthInput;
    setElement('rectangle-area', totalArea);
}

function parallelogramAreaCalculate() {
    const getBaseInput = getInputFieldValueById('get-parallelogram-base-input');
    const getHeightInput = getInputFieldValueById('get-parallelogram-height-input');
    const totalArea = getBaseInput * getHeightInput;
    setElement('parallelogram-area', totalArea);
}

function rhombusAreaCalculate() {
    const getDimension1Input = getInputFieldValueById('get-d1-input');
    const getDimension2Input = getInputFieldValueById('get-d2-input');
    const totalArea = 0.5 * getDimension1Input * getDimension2Input;
    setElement('rhombus-area', totalArea);
}

function pentagonAreaCalculate() {
    const getPerimeterInput = getInputFieldValueById('get-perimeter-input');
    const getBaseInput = getInputFieldValueById('get-pentagon-base-input');
    const totalArea = 0.5 * getPerimeterInput * getBaseInput;
    setElement('pentagon-area', totalArea);
}

function ellipseAreaCalculate() {
    const getEllipseInput = getInputFieldValueById('get-ellipse-area-input');
    const getBaseInput = getInputFieldValueById('get-ellipse-base-input');
    const totalArea = 3.1416 * getEllipseInput * getBaseInput;
    setElement('ellipse-area', totalArea);
}