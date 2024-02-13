function display(area){
    const areaCalculationContainer = document.getElementById('areaCalculationContainer');
    const p = document.createElement('p');
    p.innerText = `The area is ${area} sq. cm`;
    areaCalculationContainer.appendChild(p);
    
}