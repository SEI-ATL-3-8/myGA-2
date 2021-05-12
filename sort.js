function insertionSort (array) {
    // Loop through each element
    let currentVal,currentIndex;
    for (let i = 1; i < array.length; i++) {
       currentVal = array[i];
      
       
      while (i > 0 && array[i - 1] > currentVal) {
         array[i] = array[i - 1];
        
        
        
         i --;
      }
        array[i] = currentVal;
    
     
    }
    
    return array;
}

console.log(insertionSort([5,2,4,1,1,3,9]))
