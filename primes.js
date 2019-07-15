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

export const arrayOfPrimeNumbersUnderLimit = (limit) => {
    const primes = [];
    const allNumbers = getExtendedEratosthenesArrayForRangeUnder(limit);
    for (var i = 2; i < limit; i++) {
        if(allNumbers[i]) {
            primes.push(i);
        }
    }

    return primes;
}

export const getArrayOfNPrimeNumbers = (n) => {
    const limit = 10*1000*1000;
    return arrayOfPrimeNumbersUnderLimit(limit).slice(0, n);
}