function distinctCounter(arr1) {
    if (arr1 != null && arr1.length > 1) {
        var finalArray=[];
        var left = 0;
        var right = 1;
        var counter = 1;
        finalArray.push(arr1[0]);
        while (right <= (arr1.length - 1)) {
            if (arr1[left] != arr1[right]) {
                counter++;
                finalArray.push(arr1[right]);
            }
            left++;
            right++;
        }
        return {
            count:counter,
            distinctArray:finalArray
        }
    }
    else{
        return {
            count:0,
            distinctArray:[]
        };
    }
}
var result = distinctCounter([-2,-1,-1,0,1]);
console.log(result.count)
console.log(JSON.stringify(result.distinctArray));