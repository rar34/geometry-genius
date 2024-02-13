function triangleAreaCalculate(){
    const base = getInputValueById('triangle-base');
    
    const height = getInputValueById('triangle-height');

    const triangleArea = 0.5 * base * height;
    
    if(isNaN(triangleArea) || triangleArea <0){
        return alert('Please enter valid base and height')
    }

    display(triangleArea)
}