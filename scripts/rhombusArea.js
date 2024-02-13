function rhombusAreaCalc(){
    const d1 = getInputValueById('major-diagonal');
    
    const d2 = getInputValueById('minor-diagonal');

    const rhombusArea = 0.5 * d1 * d2;
    
    if(isNaN(rhombusArea) || rhombusArea <0){
        return alert('Please enter valid base and height')
    }

    display(rhombusArea)
}