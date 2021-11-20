module.exports = {

    printMatrix(matrix,name){
        if(typeof matrix[0]==='string') return console.log('This is not a matrix. Error : '+matrix);
        console.log(name?`-----Printing Matrix ${name}-----`:`-----Printing Anonymous Matrix-----`);
        for (const a of matrix) {
            console.log(a.join(' '));
        }
        console.log(`--------------------`);
        // console.log();
    },

    matrixProduct(mat1, mat2) {
        if (mat1[0].length !== mat2.length) return 'Cant calculate the product, the sizes of matrices are not relatable'
        let product = []
        for (let i = 0; i < mat1.length; i++) {
            product.push([])
            for (let j = 0; j < mat2[0].length; j++) {
                let theElement = null
                for (let k = 0; k < mat1[0].length; k++) {
                    theElement += mat1[i][k] * mat2[k][j]
                }
                product[i].push(theElement)
            }
        }
        return product
    },

    sumOfMatrices(mat1, mat2){
        if (mat1.length !== mat2.length && mat1[0].length !== mat2[0].length) return 'Cant calculate the sum, the sizes of matrices are not relatable'
        let sum=[]
        for (let i = 0; i < mat1.length; i++) {
            sum.push([])
            for (let j = 0; j < mat1[0].length; j++) {
                sum[i].push(mat1[i][j]+mat2[i][j])
            }            
        }
        return sum
    },

    sumOfArray(arr){
        let rowSum=0
        for (let arrItem of arr) {
            rowSum+= arrItem;        
        }  
        return rowSum
    }, 
    
    sumOfEachRow(mat){
        let sumArr=[]
        for (let row of mat) {      
            let sumOfRow=module.exports.sumOfArray(row)
            sumArr.push(sumOfRow)
        }
        return sumArr
    }
}
