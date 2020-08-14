function validAnagram(str1, str2) {
    if (str1 != null && str2 != null && str1.length == str2.length) {
        var counterOfStr1 = {}
        var counterOfStr2 = {}
        if(str1.length==0)
        {
            return true;
        }
        for (var chr of str1) 
        {
            counterOfStr1[chr] = (counterOfStr1[chr] + 1 || 1)
        }
        for (var chr of str2) 
        {
            if(!counterOfStr1[chr])// = (counterOfStr2[chr] + 1 || 1)
            {
                return false
            }
            else
            {
                counterOfStr1[chr]=counterOfStr1[chr]-1;
            }
        }
        
        return true
    }
    else {
        return false
    }
}
console.log(validAnagram('rat', 'car')) //false
console.log(validAnagram('qwerty', 'werqyt')) //true its an anagram