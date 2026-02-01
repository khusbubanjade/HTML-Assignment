const colorBox = document.querySelector('.color-box');
const colorPicker = document.getElementById('colorPicker');
const resetBtn = document.getElementById('resetBtn');

const defaultColor = '#ffffff'; // default background color


colorPicker.addEventListener('input', () => {
    colorBox.style.backgroundColor = colorPicker.value;
});


resetBtn.addEventListener('click', () => {
    colorBox.style.backgroundColor = defaultColor;
    colorPicker.value = '#ffffff'; // also reset the color picker
});
