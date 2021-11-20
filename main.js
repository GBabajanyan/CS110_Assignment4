let util=require('./util')
let matrixProduct=util.matrixProduct
let sumOfMatrices=util.sumOfMatrices
let sumOfEachRow=util.sumOfEachRow
let printMatrix=util.printMatrix

let matA=[
    [1,2,3],
    [4,5,6],
]

let matB=[
    [1,2],
    [3,4],
    [5,6],
]
let matC=[
    [6,5,4],
    [3,2,1],
]

printMatrix(matrixProduct(matA,matB),'product')
printMatrix(sumOfMatrices(matA,matC),'Sum')
console.log(sumOfEachRow(matA))

