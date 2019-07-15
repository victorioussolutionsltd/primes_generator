export const isPrime = (number) => {
    if (!Number.isInteger(number) || number < 2){
        return false;
    }

    if (number===2){
        return true;
    }

    for (let i = 3; i <= number-1; i+=2){
        if(number%2 === 0){
            return false;
        }
    }

    return true;
}

export const getExtendedEratosthenesArrayForRangeUnder = (n) => {

    const array = new Array(n).fill(true);
    const upperLimit = Math.sqrt(n);

    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    return array;
}

export const arrayOfPrimeNumbersUnderLimit = limit => {
  const primes = [];
  const allNumbers = getExtendedEratosthenesArrayForRangeUnder(limit);
  for (var i = 2; i < limit; i++) {
    if (allNumbers[i]) {
      primes.push(i);
    }
  }

  return primes;
};

export const getArrayOfNPrimeNumbers = n => {
  const limit = 10 * 1000 * 1000;
  return arrayOfPrimeNumbersUnderLimit(limit).slice(0, n);
};

export const multiplicationTable = n => {
  const allPrimeNumbers = getArrayOfNPrimeNumbers(n);

  if (allPrimeNumbers.length === 0){
      return null;
  }

  let firstArray = [''].concat(allPrimeNumbers);
  let multipliedPrimeNumbers = [firstArray];

  allPrimeNumbers.forEach( primeNumber => {
      let newRow = [primeNumber];
      allPrimeNumbers.forEach( primeToMultiply => {
          newRow.push(primeNumber * primeToMultiply);
      });

      multipliedPrimeNumbers.push(newRow);
  });

  return multipliedPrimeNumbers;
};

export const getStringPrimeMultiplicationTableFromArrays = arrays => {
    if (arrays === null) {
        return null;
      }

      let gridTable = "";

      const idx = arrays.length - 1;
      const space = arrays[idx][idx].toString().length + 1;
  
      arrays.forEach(array => {
        let row = '';
        array.forEach( cell => {
          if (cell === null) {
            row = row.concat(' '.repeat(space));
          } else {
            row = row.concat('| ');
            const cellLength = cell.toString().length;
            row = row.concat(' '.repeat(space - cellLength));
            row = row.concat(cell.toString());
          }
        });
        gridTable = gridTable+ row + "|\n";
      });
      

      return gridTable;
}