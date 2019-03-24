module.exports = function solveSudoku(matrix) {

  const isSoved = (matr) => {
    return matr.every(elem => elem.every(element => element.valueOf() === 'Number'))
  }

  const zeroesIndexes = (matrix) => {
    let zeroCount = 0;
    const zeroArr = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          zeroCount++;
          zeroArr.push({ 'i': i, 'j': j });
        }
      }
    }
    return zeroArr;
  }

  const zeroValuesArr = (posArr) => {
    posArr.forEach(position => {
      const exeptions = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const pi = position.i;
      const pj = position.j;
      for (let j = 0; j < 9; j++) {
        if (exeptions.has(matrix[pi][j])) {
          exeptions.delete(matrix[pi][j]);
        };
      }
      for (let i = 0; i < 9; i++) {
        if (exeptions.has(matrix[i][pj])) {
          exeptions.delete(matrix[i][pj]);
        };
      }
      position.val = exeptions;
    });
    return posArr;
  }

  const simplifySudoku = (helpingArr, matrix) => {
    const result = matrix;
    helpingArr.forEach(element => {
      const pi = element.i;
      const pj = element.j;
      if (element.val.size = 1) {
        element.val.forEach((value, valueAgain, set) => {
          result[pi][pj] = value; // апельсины, затем яблоки, затем бананы
        });
      }
    })
    return result;
  }

  const result = simplifySudoku(zeroValuesArr(zeroesIndexes(matrix)), matrix);
  console.log('result = \n', result);
  console.log('isSoved?', isSoved(result));
  return result;
}


/*
  const getZerosValues = (zeroArr, matrix) => {
    zeroArr.map(position => {
      const exeptions = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const pi = position.i;
      const pj = position.j;
      for (let j = 0; j < 9; j++) {
        exeptions.delete(matrix[pi][j]);
      }
      for (let i = 0; i < 9; i++) {
        exeptions.delete(matrix[i][pj]);
      }
      
    })
    return position.exept = exeptions;
  }
  console.log('arrs = ', getZerosValues(zeroesIndexes(matrix), matrix));
  //return getZerosValues(zeroesIndexes(matrix), matrix);
  */