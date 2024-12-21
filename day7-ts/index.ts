import { operatorPermutations, sumValidEquations } from './equations'
import { programEquations, testEquations } from './inputs'

// Which test values can be produced by placing any combination of operators into the equations
// Each line is an equation:
//    190: 10 19
//    3267: 81 40 27
//    83: 17 5
//    156: 15 6
//    7290: 6 8 6 15
//    161011: 16 10 13
//    192: 17 8 14
//    21037: 9 7 18 13
//    292: 11 6 16 20
// The test value is the key, the numbers of the equation are on the right. Can you make the
// test value using the numbers with any operators?
// E.g., 190 = 10 * 19, so "190: 10 19" works
//
// Return the sum of the test values from valid equations.

console.log(testEquations)
//console.log(sumValidEquations(testEquations, { debug: true }))

console.log(sumValidEquations(programEquations, { debug: false }))
//console.log(sumValidEquations({1460:[8,78,3,36,2,1,794]}, { debug: true }))
//console.log(sumValidEquations({1460:[9,5,3,9,7,9,4]}, { debug: true }))
