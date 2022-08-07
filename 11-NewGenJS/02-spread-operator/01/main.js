const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

let mergeNums = [5,...nums1,-6,-1,...nums2]


let sumMerge = mergeNums.reduce(function(acc,item){
    
    acc+=item;
    
    return acc;


},0)

console.log(sumMerge)