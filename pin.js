function generatePin() {
    const pin = Math.floor(Math.random() * 10000);
    const newPin = pin + '';
    if (newPin.length == 4) {
        const pinInput = document.getElementById('pin-field');
        pinInput.value = newPin;
    } else {
        generatePin();
    }
}

function numbers(number) {
    const pin = document.getElementById('display-pin');
    pin.value += number;
}

let tryCount = 3;
document.getElementById('submit-btn').addEventListener('click', function () {
    if (tryCount > 1) {
        tryCount--;
        document.getElementById('try-num').innerText = tryCount;
        const pinInput = document.getElementById('pin-field');
        const generatedPin = parseInt(pinInput.value);

        const pin = document.getElementById('display-pin');
        const givenPin = parseInt(pin.value);

        if (generatedPin === givenPin) {
            document.getElementById('success-msg').style.display = 'block';
            document.getElementById('error-msg').style.display = 'none';
            document.getElementById('error2-msg').style.display = 'none'

        } else {
            document.getElementById('error-msg').style.display = 'block';
            document.getElementById('success-msg').style.display = 'none';
            document.getElementById('error2-msg').style.display = 'none';
        }
    } else {
        document.getElementById('try-msg').innerText = 'You failed to varify your account';
        document.getElementById('submit-btn').setAttribute('disabled', true);
        document.getElementById('refresh').style.display = 'inline';
    }
})