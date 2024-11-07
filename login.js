function showNumpad() {
    document.getElementById('numpad').style.display = 'block';
}

function hideNumpad() {
    setTimeout(() => {
        document.getElementById('numpad').style.display = 'none';
    }, 200); 
}

function insertNumber(number) {
    const input = document.getElementById('pid');
    input.value = input.value + number;
}