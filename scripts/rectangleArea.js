function rectangleAreaCalculate() {
    const width = getInputValueById('rectangle-base');
    const length = getInputValueById('rectangle-length');

    const rectangleArea = width * length;
    if (isNaN(rectangleArea) || rectangleArea < 0) {
        return alert('Please enter valid base and height')
    }

    display(rectangleArea)
}