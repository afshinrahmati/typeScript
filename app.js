function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input2.toString() + input1.toString();
    }
    return result;
}
;
var combinedNumber = combine(10, 32, 'as-number');
var combinedString = combine("afshin", "rahmati", 'as-text');
console.log(combinedNumber, combinedString);
