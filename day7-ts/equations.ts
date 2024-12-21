/**
 * Can any of the following operators be inserted between the numbers given to equal the key?
 * Operators are evaluated left to right: * / + -
 */
function isValidEquation(value: number, equation: number[], debug: boolean): boolean {
    // Recursively calculate each operator
    if (debug) console.log(`checking ${value}: ${equation}`)
    for (const ops of operatorPermutations(equation.length - 1)) {
        if (debug) console.log(`op ${ops}`)

        let result = equation[0]
        for (let i = 0; i < ops.length; i++) {
            const nextNumber = equation[i + 1]
            if (ops[i] === '*') result *= nextNumber
            else if (ops[i] === '|') result = Number.parseInt(`${result}${nextNumber}`)
            else result += nextNumber
        }

        if (debug) console.log(`  = ${result}`)
        if (value === result) {
            console.log(`${value} is valid`)
            //if (debug) console.log(`${value} is valid`)
            return true
        }
    }

    return false
}

/**
 * Generate each combination of operators up to the number needed.
 */
export function* operatorPermutations(numNeeded: number): Generator<string, void, unknown> {
    const numOperators = 3
    // The number of ways the 3 operators can be combined
    const numPermutations = numOperators ** numNeeded

    for (let i = 0; i < numPermutations; i++) {
        const str = i.toString(numOperators).padStart(numNeeded, '0')
        yield str.replaceAll('0', '*')
            .replaceAll('1', '+')
            .replaceAll('2', '|')
    }
}

export function sumValidEquations(equations: Record<number, number[]>, options = { debug: false }) {
    return Object.keys(equations)
        .map(v => Number.parseInt(v))
        .filter(key => isValidEquation(key, equations[key], options.debug))
        .reduce((a, b) => a + b, 0)
}

//
// Part 2
// There's a third type of operator: ||
// This combines the digits from left and right
