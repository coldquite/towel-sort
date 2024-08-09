// You should implement your task here.

module.exports = function towelSort(matrix) {
    let ans = [];

    if (matrix === undefined)
        return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                ans.push(matrix[i][j])
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                ans.push(matrix[i][j])
            }
        }
    }

    console.log(ans);
    return ans;
}
