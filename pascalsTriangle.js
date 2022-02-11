//To build out this triangle, we need to take note of a few things.
// Each row starts and ends with a 1.
// Inside each row, between the 1s, each digit is the sum of the two digits immediately above it.
// We can use this pattern to build new rows starting with row 3. But we can’t use it to build the first or second rows.
// Each row is represented as an array; we need to output the entire triangle as an array of these rows (ie an array of arrays).


const pascalsTriangle = num => {
    let arr = []
    let temp = [1]
    for(let i=0;i<num;i++){
        if(i==0){
            arr.push(temp)
            temp = [1]
        }
        else {
            for(j=1;j<=i;j++){
                if(j==i){
                    temp.push(1)
                    arr.push(temp)
                    temp = [1]
                    
                }
                else{
                    let sum = arr[i-1][j-1] + arr[i-1][j]
                    temp.push(sum)
                }
            }
        }
    }
    return arr
}