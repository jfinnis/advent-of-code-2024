class GuardMap {
    guardX = 0
    guardY = 0
    guardFacing: 'right' | 'down' | 'left' | 'up' = 'up'
    initialGuardPosition = [0, 0]

    visited: boolean[][]
    map: string[]
    /** Initially set to a number that will never be reached. */
    extraObstruction: [number, number] = [-999, -999]

    constructor(map: string[]) {
        // Set visited array to all zeros
        this.visited = new Array()
        this.map = map

        for (let x = 0; x < map.length; x++) {
            // Mark visited array
            this.visited[x] = new Array()
            for (let y = 0; y < map[x].length; y++) {
                this.visited[x][y] = false

                // Mark guard position
                if (map[x][y] === '^') {
                    this.guardX = x
                    this.guardY = y
                    this.initialGuardPosition = [x, y]
                }
            }
        }
    }

    resetMap() {
        // Reset guard
        this.guardX = this.initialGuardPosition[0]
        this.guardY = this.initialGuardPosition[1]
        this.guardFacing = 'up'

        // Clear visited array
        for (let x = 0; x < this.visited.length; x++) {
            for (let y = 0; y < this.visited[x].length; y++) {
                this.visited[x][y] = false
            }
        }
    }

    numVisited() {
        let count = 0
        for (let x = 0; x < this.visited.length; x++) {
            for (let y = 0; y < this.visited[x].length; y++) {
                if (this.visited[x][y]) {
                    count++
                }
            }
        }
        return count
    }

    outOfBounds(newPos: readonly [number, number]): boolean {
        const [x, y] = newPos
        if (x < 0 || x >= this.map.length) {
            return true
        }
        if (y < 0 || y >= this.map[x].length) {
            return true
        }
        return false
    }

    isObstruction(newPos: readonly [number, number]): boolean {
        const [x, y] = newPos
        return this.map[x][y] === '#' ||
            (x === this.extraObstruction[0] && y === this.extraObstruction[1])
    }

    play({ debug = false }) {
        let endCondition = false
        let i = 0
        while (endCondition === false) {
            this.visited[this.guardX][this.guardY] = true

            switch (this.guardFacing) {
                case 'up': {
                    const newPos = [this.guardX - 1, this.guardY] as const
                    if (this.outOfBounds(newPos)) {
                        endCondition = true
                    }  else if (this.isObstruction(newPos)) {
                        this.guardFacing = 'right'
                    } else {
                        this.guardX = newPos[0]
                        this.guardY = newPos[1]
                    }
                    break
                }
                case 'down': {
                    const newPos = [this.guardX + 1, this.guardY] as const
                    if (this.outOfBounds(newPos)) {
                        endCondition = true
                    }  else if (this.isObstruction(newPos)) {
                        this.guardFacing = 'left'
                    } else {
                        this.guardX = newPos[0]
                        this.guardY = newPos[1]
                    }
                    break
                }
                case 'left': {
                    const newPos = [this.guardX, this.guardY - 1] as const
                    if (this.outOfBounds(newPos)) {
                        endCondition = true
                    }  else if (this.isObstruction(newPos)) {
                        this.guardFacing = 'up'
                    } else {
                        this.guardX = newPos[0]
                        this.guardY = newPos[1]
                    }
                    break
                }
                case 'right': {
                    const newPos = [this.guardX, this.guardY + 1] as const
                    if (this.outOfBounds(newPos)) {
                        endCondition = true
                    }  else if (this.isObstruction(newPos)) {
                        this.guardFacing = 'down'
                    } else {
                        this.guardX = newPos[0]
                        this.guardY = newPos[1]
                    }
                    break
                }
            }

            if (debug) {
                console.log(`step ${i} - ${this.guardFacing} [${this.guardX},${this.guardY}]`)
            }
            if (i++ === 9999) {
                console.log('-- infinite loop detected')
                return false
            }
        }

        console.log(`Guard left, visited: ${this.numVisited()}`)
        return true
    }

    /**
     * Add an obstruction to every empty location on the map and add up every location where the
     * guard gets stuck in a loop.
     */
    simulateObstructions() {
        let possibleLocations = 0
        for (let x = 0; x < this.map.length; x++) {
            for (let y = 0; y < this.map[x].length; y++) {
                //console.log(`simulating obstruction at ${x}.${y}`)
                if (this.map[x][y] !== '^' &&
                    this.map[x][y] !== '#') {
                    this.extraObstruction = [x, y]
                    this.resetMap()
                    if (!this.play({ debug: false })) {
                        possibleLocations++
                    }
                }
            }
        }
        return possibleLocations
    }
}

export function createMap(map: string[]) {
    return new GuardMap(map)
}
