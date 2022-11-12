// Task 1: Code the timesTwo function declaration
function timesTwo(x) {
    if (typeof(x) != 'number') {
        throw new ReferenceError('This requires a number as input');
    } else {
        let val = x * 2;
        return val;
    }
}
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo;