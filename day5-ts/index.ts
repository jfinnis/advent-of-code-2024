import { testOrdering, testUpdates, programOrdering, programUpdates } from './inputs'
import { countCorrectUpdates, countFixedIncorrectUpdates } from './updates'

console.log(countCorrectUpdates(testUpdates, testOrdering))
console.log(countCorrectUpdates(programUpdates, programOrdering))

console.log(countFixedIncorrectUpdates(testUpdates, testOrdering))
console.log(countFixedIncorrectUpdates(programUpdates, programOrdering))
