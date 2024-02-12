function triangleAreaCalculate(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseValue);
    // console.log(triangleBase)

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightValue);

    const triangleArea = 0.5 * triangleBase * triangleHeight;
    // console.log(triangleArea);
    if(isNaN(triangleArea) || triangleArea <0){
        return alert('Please enter valid base and height')
    }

    const areaCalculationContainer = document.getElementById('areaCalculationContainer');
    const area = document.createElement('p');
    area.innerText = `The area of triangle is ${triangleArea}`;
    areaCalculationContainer.appendChild(area);
    triangleBaseInput.value = '';
    triangleHeightInput.value = '';
}