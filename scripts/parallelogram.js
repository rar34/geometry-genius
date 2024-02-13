function parallelogramAreaCalculate() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    const parallelogramArea = base * height;
    if (isNaN(parallelogramArea) || parallelogramArea < 0) {
        return alert('Please enter valid base and height')
    }

    display(parallelogramArea)
}