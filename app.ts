//Union Type that's mean ==> we use more than 1 type like input2:string | number
// | this name is 'pipe'
function combine(input1: number | string, input2: number | string, resultConversion: string) {

    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input2.toString() + input1.toString()
    }

};
const combinedNumber = combine(10, 32, 'as-number');
const combinedString = combine("afshin", "rahmati", 'as-text');
console.log(combinedNumber, combinedString);
// Literal Type that's mean ==> usuall type
const number = 5;
