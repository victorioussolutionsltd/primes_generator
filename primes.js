export const isPrime = (number) => {

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