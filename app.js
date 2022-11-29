let num1 = [
    [5,3,4],
    [2,3,5],
    [6,7,4]
]

let num2 = [
    [2,3,4],
    [1,4,2],
    [3,2,4]
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
let Clear =()=>{
    document.querySelector("#screen").innerHTML = " "
    return;

}







