let result = '0';

function updateResult() {
    document.getElementById('result').value = result;
}

function appendToResult(value) {
    if (result === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        result = value;
    } else {
        result += value;
    }
    updateResult();
}

function clearResult() {
    result = '0';
    updateResult();
}

function calculateResult() {
    try {
        result = eval(result).toString();
        updateResult();
    } catch (error) {
        result = 'Error';
        updateResult();
    }
}
