// I worked on this problem with Rafaella Robles

// passes in 'letters' as an array and 'word' as a string
const wordSearch = (letters, word) => {
    // console.log(`letters: `,letters);
    // console.log(`word: `, word);
    if (letters.length === 0) {
        return false;
    } else {

        const horizontalJoin = letters.map(ls => ls.join(''))
        console.log(`rows: `,horizontalJoin);
        
        const transposed = transpose(letters);
        const verticalJoin = transposed.map(ls => ls.join(''));
        console.log(`rows: `,verticalJoin);
        let answer;
        
        for (l of horizontalJoin) {
            console.log(`line: `, l);
            if (l.includes(word)) {
                return true;
            } else if (!(l.includes(word))) {
                answer = false;
            }
        }
        
        for (l of verticalJoin) {
            console.log(`line: `, l);
            if (l.includes(word)) {
                return true;
            } else if (!(l.includes(word))) {
                answer = false;
            }
        }
        
        return answer;
    }
};

const transpose = function(matrix) {
    const result = [];
    // Iterate through matrix row, find matrix length
    for (let i = 0; i < matrix[0].length; i++) {
      const col = [];
      // Iterate through matrix column, find matrix length
      for (let j = 0; j < matrix.length; j++) {
        // Push elements into new column array
        col.push(matrix[j][i]);
      }
      // Push elements into new row array
      result.push(col);
    }
    // Return output as new transposed array
    return result;
};

const empty = wordSearch([], 'LARRY');
console.log(empty);
module.exports = wordSearch