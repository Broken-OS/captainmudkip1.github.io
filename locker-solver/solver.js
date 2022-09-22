function calc() {
    const input = [];
    e = 0;
    input[0] = DOMPurify.sanitize(document.getElementById("i1").value);
    input[1] = DOMPurify.sanitize(document.getElementById("i2").value);
    input[2] = DOMPurify.sanitize(document.getElementById("i3").value);
    for(n = 0; n < 3; n++) {
        switch(input[n].length) {
            case 1:
                input[n] = "0" + input[n];
                break;
            case 2:
                break;
            default:
                alert("Error: Numbers must be 2 or less digits.");
                e = 1;
        }
        if(e == 1) {
            return;
        }
    }
    document.write('<head> <script type="text/javascript" src="/header/header.js"></script> <title>Locker solver</title> <link rel="stylesheet" href="/css/locker-solver.css"> <link rel="stylesheet" href="/css/yes-no.css"> <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script> <script src="./solver.js"></script> </head>');
    document.write('<div align="center"><div smheightspacer></div><p class="text is-size-2">Locker solver</p><br><br>');
    document.write(`<p class="text is-size-5">How to open your locker:</p><br><p class="text">1: Turn the knob right past 0 two times.<br>2: Turn the knob right to ${input[0]}.<br>3: Turn the knob left past 0 and to ${input[1]}.<br>4:Turn the knob right to ${input[2]}.<br>5: Pull up on the latch to open your locker.`);
}
