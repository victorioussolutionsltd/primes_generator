import { isPrime } from './primes';


describe('Validation for they array of numbers', ()=>{

    const arrayOfPrimeNumbers = [2 ,3, 5, 7, 11];

    it('Shall return true for each item when array of primes given', ()=> {
        arrayOfPrimeNumbers.forEach((item) => {
            expect(isPrime(item)).toBe(true);
        }
    )})
})


describe('Checking whether function detects non-prime number', ()=>{
    
    it('Shall not return true for non-integer', ()=>{
        expect(isPrime(2.3)).toBe(false);
    })

    it('Shall return false for number smaller than 2', ()=> {
        const numbersBelow2 = [1, 0, -1];

        numbersBelow2.forEach(item => {
            expect(isPrime(item)).toBe(false);
        })
    })

})