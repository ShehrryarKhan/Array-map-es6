let num1 = [
    [5,3,4],
    [11,3,5],
    [6,7,4]
]

let num2 = [
    [2,3,4],
    [1,12,5],
    [6,15,4]
]

let result = [
    [],
    [],
    []
]

num1.map((row,i) =>{
    row.map((column,j) =>{

        result[i][j] = column + num2[i][j]; 
       

    
    })
})

let Add =()=>{
    
    document.querySelector("#screen").innerHTML = `[${result[0]}], <br> [${result[1]}],<br> [${result[2]}]`; 
}








