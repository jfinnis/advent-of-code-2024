import { programMap, testMap } from './inputs'
import { createMap } from './map'

// Given a map of the lab where # are obstructions, we want to avoid the guard.
// The ^ indicates the direction the guard is facing.
// Guard patrol:
//   - if something directly in front, turn right
//   - otherwise step forward
//  . . . . # . . . . .
//  . . . . . . . . . #
//  . . . . . . . . . .
//  . . # . . . . . . .
//  . . . . . . . # . .
//  . . . . . . . . . .
//  . # . . ^ . . . . .
//  . . . . . . . . # .
//  # . . . . . . . . .
//  . . . . . . # . . .
//
// Eventually the guard will mark walk out of the map, how many squares did it visit?
// ....#.....
// ....12222#
// ....1...3.
// ..#.1...3.
// ..56666#3.
// ..5.1.7.3.
// .#4444743.
// .9aaaaaa#.
// #888887b..
// ......#b..

console.table(testMap)
const guardMap = createMap(testMap)
guardMap.play({ debug: false })
createMap(programMap).play({ debug: false })

// Part 2
// Figure out all the possible places you can add one single obstruction (#), except starting spot,
// such that the guard gets infinitely stuck in a loop.
// Brute Force - add one everywhere there isn't one and see if loops (check ### iterations)

console.log(guardMap.simulateObstructions())
console.log(createMap(programMap).simulateObstructions())
