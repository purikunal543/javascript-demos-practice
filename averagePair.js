//Write a function called averagePair. Given a sorted array of integers
//and a target average number, determin if there is a pair of values
//in the array where the average of the pair equals to the target average number
//There may be more than one pair that matches the average target
//Constraint Time complexity should be O(N) and Space complexity
//should be O(1)
//examples averagePair([1,2,3],2.5)-> true
//averagePair([-1,0,3,4,5,6],4.1)-> false

function averagePair(arr,num){
    if(arr==null){
        return false;
    }
    if(arr.length==0){
        return false
    }
    var left=0;
    var right=(arr.length-1);
    while(left<right)
    {
      var avg= Number((arr[left]+arr[right])/2)
      if(num===avg){
        return true;
      }
      else if(num>avg){
        left++;
      }  
      else{
          right--;
      }
    }
    return false
}