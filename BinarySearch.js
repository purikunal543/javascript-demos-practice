function binarySearch(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    function middleNumber(leftIndex, rightIndex) {
        return Math.round(((left + right) / 2))
    }
    var left = 0;
    var right = arr.length - 1;
    var middle = middleNumber(left, right);
    if (arr[middle] == num) return middle;
    else if (arr[left] == num) return left;
    else if (arr[right] == num) return right;
    else {
        while (left < (right - 1)) {
            if (arr[middle] > num) {
                right = middle
            }
            else {
                left = middle
            }
            middle = middleNumber(left, right);
            if (arr[middle] == num) return middle;
        }
        return -1
    }    
}