function splitOrdering(ordering: string): [number, number] {
    const split = ordering.split('|')
    const first = Number.parseInt(split[0])
    const second = Number.parseInt(split[1])
    return [first, second]
}

function isCorrectUpdate(update: number[], orderings: string[]): boolean {
    // For each ordering, check if first number appears after second
    for (const ordering of orderings) {
        const [first, second] = splitOrdering(ordering)
        if (update.includes(first) && update.includes(second)) {
            const firstIndex = update.indexOf(first)
            const secondIndex = update.indexOf(second)
            if (firstIndex > secondIndex) {
                return false
            }
        }
    }
    return true
}

function getMiddleValue(update: number[]): number {
    return update[Math.floor(update.length / 2)]
}

export function countCorrectUpdates(updates: number[][], orderings: string[]): number {
    return updates
        .filter(u => isCorrectUpdate(u, orderings))
        .map(u => getMiddleValue(u))
        .reduce((a, b) => a + b, 0)
}

function createOccurrenceMap(orderings: string[]): {[key: number]: number[]} {
    return orderings.reduce((accum, val) => {
        const [first, second] = splitOrdering(val)
        if (accum[first]) {
            accum[first].push(second)
        } else {
            accum[first] = [second]
        }
        return accum
    }, {} as {[key: number]: number[]})
}

function createOrderingForUpdate(update: number[], ordering: string[]): number[] {
    const masterOrdering: number[] = []
    // Filter out values that are not in the update
    const filteredOrdering = ordering.filter(o =>
        update.includes(splitOrdering(o)[0]) &&
        update.includes(splitOrdering(o)[1])
    )

    let modifiedOrdering = [...filteredOrdering]
    do {
        // Create map of values that must come before another value
        const allValues = new Set(modifiedOrdering.flatMap(o => splitOrdering(o)))
        const occurrences = createOccurrenceMap(modifiedOrdering)
        const occurenceKeys = new Set(Object.keys(occurrences).map(k => Number.parseInt(k)))


        // if an item in one of the values is not also a key, it is free to appear at end of list
        // because it has nothing that follows it
        const orphans = allValues.difference(occurenceKeys)

        // add the orphan to the master list
        const lastItem = Array.from(orphans)[0]
        masterOrdering.push(lastItem)

        // on the last ordering, add both values and exit loop
        if (modifiedOrdering.length === 1) {
            masterOrdering.push(splitOrdering(modifiedOrdering[0])[0])
            break
        }

        // remove this orphan from the orderings
        modifiedOrdering = modifiedOrdering.filter(o => !o.includes(lastItem.toString()))
    } while (Object.keys(modifiedOrdering).length > 0)

    return masterOrdering.toReversed()
}

export function countFixedIncorrectUpdates(updates: number[][], ordering: string[]): number {
    return updates
        .filter(u => !isCorrectUpdate(u, ordering))
        .map(u => createOrderingForUpdate(u, ordering))
        .map(u => getMiddleValue(u))
        .reduce((a, b) => a + b, 0)
}

