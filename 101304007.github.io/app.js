$(function() {
    var currrentText = '';
    var temp = 0;
    var situation;

    $('#btn1').on('click', function() {
        currrentText = currrentText + '1';
        render();
    });

    $('#btn2').on('click', function() {
        currrentText = currrentText + '2';
        render();
    });

    $('#btn3').on('click', function() {
        currrentText = currrentText + '3';
        render();
    });

    $('#btn4').on('click', function() {
        currrentText = currrentText + '4';
        render();
    });

    $('#btn5').on('click', function() {
        currrentText = currrentText + '5';
        render();
    });

    $('#btn6').on('click', function() {
        currrentText = currrentText + '6';
        render();
    });

    $('#btn7').on('click', function() {
        currrentText = currrentText + '7';
        render();
    });

    $('#btn8').on('click', function() {
        currrentText = currrentText + '8';
        render();
    });

    $('#btn9').on('click', function() {
        currrentText = currrentText + '9';
        render();
    });

    $('#btn0').on('click', function() {
        currrentText = currrentText + '0';
        render();
    });

    $('#btnAdd').on('click', function() {
        situation = '+';
        temp = currrentText;
        calculator();
    });

    $('#btnMinus').on('click', function() {
        situation = '-';
        temp = currrentText;
        calculator();
    });

    $('#btnMultiple').on('click', function() {
        situation = '*';
        temp = currrentText;
        calculator();
    });

    $('#btnDivide').on('click', function() {
        situation = '/';
        temp = currrentText;
        calculator();
    });


    $('#btnEqual').on('click', function() {
        if (situation == '+') {
            currrentText = parseFloat(temp) + parseFloat(currrentText);
            $('#message').text(currrentText);
        }

        if (situation == '-') {
            currrentText = parseFloat(temp) - parseFloat(currrentText);
            $('#message').text(currrentText);
        }
        if (situation == '*') {
            currrentText = parseFloat(temp) * parseFloat(currrentText);
            $('#message').text(currrentText);
        }
        if (situation == '/') {
            currrentText = parseFloat(temp) / parseFloat(currrentText);
            $('#message').text(currrentText);
        }

    });

    $('#btnClear').on('click', function() {
        currrentText = '';
        temp1 = 0;
        situation = 0;
        render();
    });

    function render() {
        $('#message').text(currrentText);
    }

    function calculator() {
        temp = currrentText;
        currrentText = '';
    }

});