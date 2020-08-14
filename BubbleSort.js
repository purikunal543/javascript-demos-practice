function BubbleSort(arr){

    for(var i=1;i<arr.length;i++){

        var isSwap=false;
        for(var j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                isSwap=true;
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        if(!isSwap){
            break;
        }
    }
return arr;
}

console.log(BubbleSort([33,22,11,44,55,1,43]));