


function showOK(){
    basic.showIcon(IconNames.Happy)
}

function showKO(){
    basic.showIcon(IconNames.Sad)
}

interface Test{
    getInput(): int16[][]
    check(input: int16[][]): boolean
    input: int16[][]
}

//mirror left = right
class Test1 implements Test{
    input: int16[][]

    getInput(): int16[][]{
        this.input = [
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
        ]
        return this.input
    }

    check(input: int16[][]):boolean{
        return compare([
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0]
        ], input);
    }
}

function checkTest(tester:Test, data :int16[][]){
    if(tester.check(data)){
        showOK()
    }else{
        showKO()
    }
}

function compare(t1: int16[][], t2: int16[][]):boolean{
    if (t1.length !== t2.length){
        return false;
    }
    for (let i = 0 ; i < t1.length ; i++){
        if(t1[i].length !== t2[i].length){
            return false;
        }
        for (let j = 0; j < t1[i].length; j++) {
            if(t1[i][j] !== t2[i][j]) {
                return false;
            }
        }
    }
    return true;
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