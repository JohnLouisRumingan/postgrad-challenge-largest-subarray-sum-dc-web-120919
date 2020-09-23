
// naive, time complexity = O(n^2), space complexity O(1)

var largestSubarraySumNaive = (array) => {

    let largestSum = Number.NEGATIVE_INFINITY;
    let currentSum = 0;

    for(let i=0; i<array.length; i++){

        for(let j=i; j<array.length; j++){
            let num = array[j];

            currentSum += num;
            
            if(currentSum > largestSum){
                largestSum = currentSum;
            }
        }

        currentSum = 0;
    }
    

    return largestSum;
}

//optimal solution, time complexity = O(n), space complexity = O(1)

var largestSubarraySum = (array) => {
 
    let largestSum = 0;
    let currentSum = 0;

    for(let i=0; i<array.length; i++){
        
        let num = array[i];
        
        if((currentSum+num) >= 0){
            currentSum += num;

            if(currentSum > largestSum) largestSum = currentSum;
        }
        else{
            currentSum = 0;
        }
    }

    return largestSum;
}