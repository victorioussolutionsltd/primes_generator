import {
  isPrime,
  getExtendedEratosthenesArrayForRangeUnder,
  arrayOfPrimeNumbersUnderLimit,
  getArrayOfNPrimeNumbers,
  multiplicationTable,
  getStringPrimeMultiplicationTableFromArrays
} from "./primes";
import { descriptions } from "jest-config";
import { EXPECTED_COLOR } from "jest-matcher-utils";

describe("Validation for they array of numbers", () => {
  const arrayOfPrimeNumbers = [2, 3, 5, 7, 11];

  it("Shall return true for each item when array of primes given", () => {
    arrayOfPrimeNumbers.forEach(item => {
      expect(isPrime(item)).toBe(true);
    });
  });
});

describe("Checking whether function detects non-prime number", () => {
  it("Shall not return true for non-integer", () => {
    expect(isPrime(2.3)).toBe(false);
  });

  it("Shall return false for number smaller than 2", () => {
    const numbersBelow2 = [1, 0, -1];

    numbersBelow2.forEach(item => {
      expect(isPrime(item)).toBe(false);
    });
  });
});

describe("Creating extended Eratosthenes array with first element (number 1) marked as true", () => {
  it("Shall return an indexed array of n-1 when n given with false values for relevant index if it is a multiple of prime number", () => {
    const modifiedArray = getExtendedEratosthenesArrayForRangeUnder(18);

    const expectedArray = [
      true, //0
      true, //1
      true, //2
      true, //3
      false, //4
      true, //5
      false, //6
      true, //7
      false, //8
      false, //9
      false, //10
      true, //11
      false, //12
      true, //13
      false, //14
      false, //15
      false, //16
      true //17
    ];

    expect(modifiedArray).toEqual(expectedArray);
  });
});

describe("Get primes up to", () => {
  it("Shall return array of primes below the given number", () => {
    const expectedPrimes = [2, 3, 5, 7, 11, 13, 17];
    expect(arrayOfPrimeNumbersUnderLimit(18)).toEqual(expectedPrimes);
  });
});

describe("Getting prime numbers within the range 0 to 1000", () => {
  it("Shall return an array of prime numbers", () => {
    const primeNumbers = arrayOfPrimeNumbersUnderLimit(1000);
    primeNumbers.forEach(item => {
      expect(isPrime(item)).toBe(true);
    });
  });
});

describe("Get N prime numbers", () => {
  it("Get up to 20000 prime numbers", () => {
    const primeNumbers = getArrayOfNPrimeNumbers(20000);
    expect(primeNumbers.length).toBe(20000);
  });
});

describe("Get multiplication table for prime numbers", () => {
  it("Shall return two dimensional array for N =3 of 14 elements", () => {
    const expectedMultiplicationTable = [
      ["", 2, 3, 5],
      [2, 4, 6, 10],
      [3, 6, 9, 15],
      [5, 10, 15, 25]
    ];

    expect(multiplicationTable(3)).toEqual(expectedMultiplicationTable);
  });
});

describe('Display the table as string', ()=>{
    it('Shall transform the array into grid (string)', () => {
        const stringGrid = "|    |   2|   3|   5|\n|   2|   4|   6|  10|\n|   3|   6|   9|  15|\n|   5|  10|  15|  25|";
                                
        const result = getStringPrimeMultiplicationTableFromArrays(multiplicationTable(3));
        expect(result).toMatch(stringGrid);
    })
})
