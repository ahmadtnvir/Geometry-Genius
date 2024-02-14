function triangleAreaCalculate() {
    const getBaseInput = document.getElementById('get-base-input');
    const getHeightInput = document.getElementById('get-height-input');
    const pushTriangleArea = document.getElementById('triangle-area');

    const getBaseInputValue = getBaseInput.value;
    const getHeightInputValue = getHeightInput.value;
    //console.log(typeof getBaseInputValue); //* output is string now.But string is not allowed. 
    //console.log(typeof getHeightInputValue); //* output is string now.But string is not allowed.

    getBaseInput.value = '';
    getHeightInput.value = '';

    const getBaseInputValueInNumber = parseFloat(getBaseInputValue); //* using parseFloat because of value can be fraction number(1.5) 
    const getHeightHeightValueInNumber = parseFloat(getHeightInputValue); //* using parseFloat because of value can be fraction number(1.5) 

    const totalArea = 0.5 * getBaseInputValueInNumber * getHeightHeightValueInNumber;
    // console.log(totalArea);
    pushTriangleArea.innerText = totalArea;
}