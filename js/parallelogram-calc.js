function parallelogramAreaCalculate(){
    const getBaseInput = document.getElementById('get-parallelogram-base-input');
    const getHeightInput = document.getElementById('get-parallelogram-height-input');
    const pushParallelogramArea = document.getElementById('parallelogram-area');

    const getBaseInputValue = getBaseInput.value;
    const getHeightInputValue = getHeightInput.value;
    
    const getBaseInputValueInNumber = parseFloat(getBaseInputValue);
    const getHeightInputValueInNumber = parseFloat(getHeightInputValue);

    const totalArea = getBaseInputValueInNumber * getHeightInputValueInNumber;
    pushParallelogramArea.innerText = totalArea;

    getBaseInput.value = '';
    getHeightInput.value = '';
}