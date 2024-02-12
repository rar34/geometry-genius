function triangleAreaCalculate(){
    const base = getInputValueById('triangle-base');
    // console.log(triangleBase)
    const height = getInputValueById('triangle-height');

    const triangleArea = 0.5 * base * height;
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