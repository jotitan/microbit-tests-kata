function show(results: any) {
    if (Array.isArray(results)) {
        const r = results as number[][];
        for (let i = 0; i < r.length; i++) {
            for (let j = 0; j < r[i].length; j++) {
                if (r[i][j] === 0) {
                    led.unplot(i, j)
                } else {
                    led.plot(i, j)
                }
            }
        }
    }
    if (typeof results === "number") {
        basic.showNumber(results)
    }
}

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

const showOK = () => basic.showIcon(IconNames.Happy);
const showKO = () => basic.showIcon(IconNames.Sad);

// Used to store function implementation
let testImplementations :any[] = [];

function loadImplementations(implementations: any[]){
    testImplementations = implementations;
}


let currentTestNumber = -1;
let currentTest :Test<any>;

input.onButtonPressed(Button.AB,()=>{
    currentTestNumber = (currentTestNumber + 1)%testImplementations.length;
    currentTest = getTest();
})

input.onButtonPressed(Button.A,()=>{
    // show input
    if(currentTest == null){
        basic.showIcon(IconNames.No)
    }else{
        show(currentTest.getInput());
    }
})

input.onButtonPressed(Button.B, () => {
    // show result and value
    if (currentTest != null) {
        const results = testImplementations[currentTestNumber](currentTest.getInput());
        show(results)
        basic.pause(500)
        if(currentTest.check(results)){
            showOK();
        }else{
            showKO();
        }
    }
})

function getTest() :Test<any>{
    switch(currentTestNumber){
        case 0:return new Test1();
        case 1:return new Test2();
        case 2: return new Test3();
    }
    return null;
}

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

class Test3 implements Test<number> {
    input: number[][]

    getInput(): number[][] {
        this.input = [];
        for(let i = 0 ; i < 5 ; i++){
            this.input[i] = [];
            for (let j = 0; j < 5; j++) {
                this.input[i].push(randint(0, 1))
            }
        }
        return this.input
    }

    check(result: number): boolean {
        let counter = 0;
        for (let i = 0 ; i < 5 ; i++){
            for(let j = 0 ; j < 5 ; j++){
                if(this.input[i][j] === 1){
                    counter += (i+1) * Math.pow(5,j);
                }
            }
        }
        return counter === result;
    }
}

function checkTest(tester:Test<any>, data :any){
    if(tester.check(data)){
        showOK()
    }else{
        showKO()
    }
}


//loadImplementations([()=>console.log("ok"),()=>console.log("super")]);