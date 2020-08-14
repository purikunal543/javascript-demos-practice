
function IsSquarePresent(arr1, arr2) 
{
    if (arr1 != null && arr2 != null && arr1.length == arr2.length && arr1.length > 0) 
    {
        var frequencyOfElemInArray1 = {};
        var frequencyOfElemInArray2 = {};
        for (var elem of arr1) 
        {
            if(isNaN(elem))
            {
                return false
            }
            frequencyOfElemInArray1[elem] = (frequencyOfElemInArray1[elem] + 1 || 1);
        }
        for (var elem of arr2) 
        {
            if(isNaN(elem))
            {
                return false
            }
            frequencyOfElemInArray2[elem] = (frequencyOfElemInArray2[elem] + 1 || 1);
        }
        for (var key in frequencyOfElemInArray1) 
        {
            if (key != null) 
            {
                if (!(((key**2) in frequencyOfElemInArray2) && frequencyOfElemInArray1[key] == frequencyOfElemInArray2[key ** 2])) 
                {
                    return false;
                }
            }
        }
        return true
    }
    else 
    {
        return false;
    }
}

console.log(IsSquarePresent([3, 4, 5, 4], [16, 16, 25, 9]))