$(function() {
    var firstText = '';
    var temp = 0;
    var condition;

    $('#btn1').on('click', function() {
        firstText = firstText + '1';
        render();
    });

    $('#btn2').on('click', function() {
        firstText = firstText + '2';
        render();
    });

    $('#btn3').on('click', function() {
        firstText = firstText + '3';
        render();
    });

    $('#btn4').on('click', function() {
        firstText = firstText + '4';
        render();
    });

    $('#btn5').on('click', function() {
        firstText = firstText + '5';
        render();
    });

    $('#btn6').on('click', function() {
        firstText = firstText+ '6';
        render();
    });

    $('#btn7').on('click', function() {
        firstText = firstText + '7';
        render();
    });

    $('#btn8').on('click', function() {
        firstText = firstText + '8';
        render();
    });

    $('#btn9').on('click', function() {
        firstText = firstText + '9';
        render();
    });

    $('#btn0').on('click', function() {
        firstText = firstText + '0';
        render();
    });

    $('#btnAdd').on('click', function() {
        condition = '+';
        temp = firstText;
        calculator();
    });

    $('#btnMinus').on('click', function() {
        condition = '-';
        temp = firstText;
        calculator();
    });

    $('#btnMultiple').on('click', function() {
        condition = '*';
        temp = firstText;
        calculator();
    });

    $('#btnDivide').on('click', function() {
        condition = '/';
        temp = firstText;
        calculator();
    });


    $('#btnEqual').on('click', function() {
        if (condition == '+') {
            firstText = parseFloat(temp) + parseFloat(firstText);
            $('#message').text(firstText);
        }

        if (condition == '-') {
            firstText = parseFloat(temp) - parseFloat(firstText);
            $('#message').text(firstText);
        }
        if (condition == '*') {
            firstText = parseFloat(temp) * parseFloat(firstText);
            $('#message').text(firstText);
        }
        if (condition == '/') {
            firstText = parseFloat(temp) / parseFloat(firstText);
            $('#message').text(firstText);
        }

    });

    $('#btnClear').on('click', function() {
        firstText = '';
        temp1 = 0;
        condition = 0;
        render();
    });
    $("#btnAllclear").on('click',function(){
        firstText = '';
        temp1 = 0;
        condition = 0;
        render();
    });

    function render() {
        $('#message').text(firstText);
    }

    function calculator() {
        temp = firstText;
        firstText = '';
    }

});