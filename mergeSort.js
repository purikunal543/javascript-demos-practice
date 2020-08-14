function SplitArray(arr)
{
    var from =0;
    var to =0;
    var from2=0;
    var to2=0;
    if(arr.length%2==0){
        to=arr.length/2;
    }
    else{
        to=((arr.length/2)+ 1);
    }
    from2=to;
    to2=arr.length;
    var arr1=arr.slice(from,to);
    var arr2=arr.slice(from2,to2);
    if(arr1.length<=1 && arr2.length<=1){
        return Merge(arr1,arr2)
    }
    else if(arr1.length<=1 && arr2.length>1){
        return Merge(arr1,SplitArray(arr2))
    }
    else if(arr1.length>1 && arr2.length<=1){
        return Merge(SplitArray(arr1),arr2)
    }
    return Merge(SplitArray(arr1), SplitArray(arr2))

}
function Merge(arr1,arr2)
{
    if(arr1==null)
    {
        arr1=[];
    }
    if(arr2==null)
    {
        arr2=[];
    }
    var loopLength=0;
    if(arr1.length>arr2.length)
    {
        loopLength=arr1.length;
    }
    else
    {
        loopLength=arr2.length;
    }
    var mergedArray=[];
    for(var i=0;i<loopLength;i++)
    {
        if(arr1[i]!=null && arr2[i]==null)
        {
            mergedArray.push(arr1[i]);        
        }
        if(arr1[i]==null && arr2[i]!=null)
        {
            mergedArray.push(arr2[i]);
        }
        if(arr1[i]!=null && arr2[i]!=null)
        {
            if(arr1[i]<arr2[i])
            {
                mergedArray.push(arr1[i]);
                mergedArray.push(arr2[i]);
            }
            else
            {
                mergedArray.push(arr2[i])
                mergedArray.push(arr1[i])
            }        
        }
    }
    return mergedArray;
}
var arr=[66,33,44,55,12,6,8,9,22];
//console.log(Merge([44,55,66],[3,56,76,86]))
console.log(SplitArray(arr));