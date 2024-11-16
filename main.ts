function compare (t1: any[][], t2: any[][]) {
    if (t1.length != t2.length) {
        return false
    }
    for (let i = 0; i <= t1.length - 1; i++) {
        if (t1[i].length != t2[i].length) {
            return false
        }
        for (let j = 0; j <= t1[i].length - 1; j++) {
            if (t1[i][j] != t2[i][j]) {
                return false
            }
        }
    }
    return true
}
function showOK () {
    basic.showIcon(IconNames.Happy)
}
function pulseBright () {
    if (direction == 10 && brightness > 255 || direction == -10 && brightness < 10) {
        direction *= -1;
    }
    brightness += direction
    led.setBrightness(brightness)
}
function showKO () {
    basic.showIcon(IconNames.Sad)
}
let brightness = 0
let direction = 0
interface Test<Result>{
    getInput(): number[][]
    check(result: Result): boolean
    input: number[][]
}
class Test1 implements Test<number[][]>{
    input: number[][]

    getInput(): number[][]{
        this.input = [
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
        ]
        return this.input
    }

    check(result: number[][]):boolean{
        return compare([
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0]
        ], result);
    }
}

class Test2 implements Test<number> {
    input: number[][]

    getInput(): number[][] {
        this.input = [
            [1, 3, 5, 7, 1],
            [4, 1, 0, 5, 0],
            [1, 0, 1, 0, 1],
            [8, 0, 2, 1, 0],
            [4, 0, 4, 0, 1]
        ]
        return this.input
    }

    check(result: number): boolean {
        return 50 === result;
    }
}

function checkTest(tester:Test<any>, data :any){
    if(tester.check(data)){
        showOK()
    }else{
        showKO()
    }
}
direction = 10
brightness = 100
pulseBright()