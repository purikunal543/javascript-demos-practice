function power(num, pow) {
    if (pow == 1) return num;
    return num * power(num, pow - 1)
}

function factorial(num) {
    if (num == 1) return 1
    return num * factorial(num - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    function product(arr1, fromIndex) {
        if (fromIndex == (arr1.length - 1)) return arr1[fromIndex]
        return arr1[fromIndex] * product(arr1, fromIndex + 1)
    }
    return product(arr, 0)
}
//console.log(productOfArray([1, 2, 3, 10]))

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
    if (num == 0) return 0;
    return num + recursiveRange(num - 1)
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
//find nth number from fibonnaci series starting with 1 and 1
function fib(n) {
    if (n == 1 || n == 2) return 1
    return fib(n - 1) + fib(n - 2)
}
//solution is nth number= (n-1 th numbers)+(n-2 th number)
///////////////////////////////////////////////////////////////////////

//String reverse
function reverse(str, lastIndex) {
    if (lastIndex === undefined) { var lastIndex = str.length - 1; }
    if (lastIndex == 0) return str[lastIndex]
    return str[lastIndex] + reverse(str,lastIndex - 1)
}
console.log(reverse("kunal"))