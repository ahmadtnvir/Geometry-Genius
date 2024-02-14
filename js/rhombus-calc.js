function rhombusAreaCalculate(){
    const getDimension1Input = document.getElementById('get-d1-input');
    const getDimension2Input = document.getElementById('get-d2-input');
    const pushRhombusArea = document.getElementById('rhombus-area');

    const getDimension1InputValue = getDimension1Input.value;
    const getDimension2InputValue = getDimension2Input.value;
    
    const getDimension1InputValueInNumber = parseFloat(getDimension1InputValue);
    const getDimension2InputValueInNumber = parseFloat(getDimension2InputValue);

    const totalArea = 0.5 * getDimension1InputValueInNumber * getDimension2InputValueInNumber;
    pushRhombusArea.innerText = totalArea;

    getDimension1Input.value = '';
    getDimension2Input.value = '';
}