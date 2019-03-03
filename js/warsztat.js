// STRZAŁKOWA
const warsztacik = (x, y, z) => x * y * z;
console.log(warsztacik(2, 2, 2));



// STANDARDZIK
const warsztacikVerStandard = function(x, y, z) {
    let mnozonko = x * y * z;
    return mnozonko;
}
console.log(warsztacikVerStandard(2, 2, 2));


// STANDARDZIK DWA
function warVerThree(x, y, z) {
    let result = x * y * z;
    return result;
}
console.log(warVerThree(2, 2, 2));