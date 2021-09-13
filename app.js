//Union Type that's mean ==> we use more than 1 type like input2:string | number
// | this name is 'pipe'
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input2.toString() + input1.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
;
var combinedNumber = combine(10, 32, 'as-number');
var combinedString = combine("afshin", "rahmati", 'as-text');
console.log(combinedNumber, combinedString);
