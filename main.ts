


function showOK(){
    basic.showIcon(IconNames.Happy)
}

function showKO(){
    basic.showIcon(IconNames.Sad)
}


function checkTest1(){
    showOK()
}

function checkTest2() {
    showOK()
}

function checkTest3() {
    showOK()
}

let direction = 10;
let brightness = 100;

function pulseBright() {
    if ((direction === 10 && brightness > 255) || (direction === -10 && brightness < 10)) {
        direction *= -1;
    }
    brightness += direction;
    led.setBrightness(brightness);
}

pulseBright();