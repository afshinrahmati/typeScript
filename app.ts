//alias Type that's mean ==> we call One Variable type and use for all
// Void === undefined
type Combinable = number | string;
type User = { name: string; age: number };

function combine(input1: Combinable, input2: Combinable, resultConversion: Combinable):void {

    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input2.toString() + input1.toString()
    }
    return result

};
const combinedNumber = combine(10, 32, 'as-number');
const combinedString = combine("afshin", "rahmati", 'as-text');
console.log(combinedNumber, combinedString);

