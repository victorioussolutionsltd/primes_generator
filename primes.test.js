import { isPrime } from './primes';


describe('Validation for they array of numbers', ()=>{

    const arrayOfPrimeNumbers = [2 ,3, 5, 7, 11];

    it('Shall return true for each item when array of primes given', ()=> {
        arrayOfPrimeNumbers.forEach((item) => {
            expect(isPrime(item)).toBe(true);
        }
    )})
})