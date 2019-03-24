module.exports = function solveSudoku(matrix) {
  let newMatrix = matrix.slice();
  let matrixColumns = [];
  let zeroes = [];
  let notZeroesRows = [];
  let notZeroesColumns = [];
  let standartValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // const possibleValues = [18][18];

  for (let i = 0; i < newMatrix.length; i++) {
    matrixColumns.push([]);
    for (let j = 0; j < newMatrix[i].length; j++) {
      matrixColumns[i][j] = newMatrix[j][i];
    }
  }

  //get rows zeroes and not zeroes
  for (let row = 0; row < newMatrix.length; row++) {
    notZeroesRows.push([]);
    zeroes.push([]);
    for (let j = 0; j < newMatrix[row].length; j++) {
      if (newMatrix[row][j] === 0) {
        zeroes[row][j] = 1;
      } else {
        zeroes[row][j] = 0;
        notZeroesRows[notZeroesRows.length - 1][j] = newMatrix[row][j];
      }
    }
  }

  //get column not zeroes
  for (let column = 0; column < matrixColumns.length; column++) {
    notZeroesColumns.push([]);
    for (let j = 0; j < matrixColumns[column].length; j++) {
      if (matrixColumns[column][j] !== 0) {

        notZeroesColumns[column].push(matrixColumns[column][j]);
      }
    }
  }

  for (let row = 0; row < zeroes.length; row++) {
    for (let column = 0; column < zeroes[row].length; column++) {
      if (zeroes[row][column] !== 0) {
        let missingValuesInRow = standartValues.slice();
        let missingValuesInColumn = standartValues.slice();

        //const GetMissingValuesInRow = () => {
        for (let element = 0; element < notZeroesRows[row].length; element++) {
          if (notZeroesRows[row][element] !== 0) {
            for (let i = 0; i < standartValues.length; i++) {
              if (notZeroesRows[row][element] === standartValues[i]) {

                missingValuesInRow[i] = 0;
                break;
              }
            }
          }
        }

        //const GetMissingValuesInColumn = () => {
        for (let element = 0; element < notZeroesColumns[column].length; element++) {
          if (notZeroesColumns[column][element] !== 0) {
            for (let i = 0; i < standartValues.length; i++) {
              if (notZeroesColumns[column][element] === standartValues[i]) {
                missingValuesInColumn[i] = 0;
                break;
              }
            }
          }
        }

        //const GetPossibleValue = () => {
        for (let i = 0; i < missingValuesInRow.length; i++) {
          if (missingValuesInRow[i] !== 0) {
            for (let j = 0; j < missingValuesInColumn.length; j++) {
              if (missingValuesInColumn[j] !== 0) {
                if (missingValuesInColumn[j] !== missingValuesInRow[i]) {
                  newMatrix[row][column] = missingValuesInColumn[j];
                }
              }
            }
          }
        }
      }
    }
  }

  return newMatrix;

  /*
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
  zeroArr.map(position => {
   const exeptions = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   const pi = position.i;
   const pj = position.j;
   console.log('pi = ', pi, 'pj = ', pj,);
  }
  // return zeroArr;
 }
*/
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
  
  return zeroesIndexes(matrix);
  */
}