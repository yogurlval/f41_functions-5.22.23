let nums = [1, 4, 11, 2, 37, -4]


let smallest = nums[0]
let largest = nums[0]


for (let i = 0; i <nums.length; i++){
    if(smallest > nums[i]){
        smallest = nums[i]
    }
    if(largest < nums[i]){
        largest =nums[i]
    }
}
console.log(smallest, largest)