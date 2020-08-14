
function selectionSort(inputArray){

    for(var splitter=-1;splitter<=inputArray.length-2;splitter++){
smallestNumberIndex=splitter+1;
for (let j = splitter+1; j < inputArray.length; j++) {
    if(inputArray[smallestNumberIndex]>inputArray[j]){
        smallestNumberIndex=j;
    }    
}
var temp=inputArray[splitter+1];
inputArray[splitter+1]=inputArray[smallestNumberIndex];
inputArray[smallestNumberIndex]=temp;
}
console.log(inputArray);
}
selectionSort([4,3,5,6,2,1])

//in selection sort at one complete outer iteration you will get smallest number
//in bubble sort at one complete outer iteration you will get biggest number