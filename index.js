import { getStringPrimeMultiplicationTableFromArrays,  multiplicationTable } from "./primes";

if ( process.argv.length === 2){
    console.log("Numeric input (N) for multiplication table is missing!");
    process.exit();
}

console.log(getStringPrimeMultiplicationTableFromArrays(multiplicationTable(process.argv[2])));
