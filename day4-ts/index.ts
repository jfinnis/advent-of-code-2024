// Word search for 'XMAS'
const testInput = [
    'MMMSXXMASM',
    'MSAMXMSMSA',
    'AMXSXMAAMM',
    'MSAMASMSMX',
    'XMASAMXAMM',
    'XXAMMXXAMA',
    'SMSMSASXSS',
    'SAXAMASAAA',
    'MAMMMXMMMM',
    'MXMXAXMASX',
]

function searchRight(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i][j + 1] === 'M' &&
            input[i][j + 2] === 'A' &&
            input[i][j + 3] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function searchLeft(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i][j - 1] === 'M' &&
            input[i][j - 2] === 'A' &&
            input[i][j - 3] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function searchDown(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i + 1][j] === 'M' &&
            input[i + 2][j] === 'A' &&
            input[i + 3][j] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function searchUp(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i - 1][j] === 'M' &&
            input[i - 2][j] === 'A' &&
            input[i - 3][j] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function searchUpRight(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i - 1][j + 1] === 'M' &&
            input[i - 2][j + 2] === 'A' &&
            input[i - 3][j + 3] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function searchUpLeft(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i - 1][j - 1] === 'M' &&
            input[i - 2][j - 2] === 'A' &&
            input[i - 3][j - 3] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function searchDownRight(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i + 1][j + 1] === 'M' &&
            input[i + 2][j + 2] === 'A' &&
            input[i + 3][j + 3] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function searchDownLeft(i: number, j: number, input: string[]): number {
    try {
        if (input[i][j] === 'X' &&
            input[i + 1][j - 1] === 'M' &&
            input[i + 2][j - 2] === 'A' &&
            input[i + 3][j - 3] === 'S'
        ) {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function findOccurrences(input: string[]): number {
    // 8 Directions - forward, backward, up, down, upright, upleft, downright, downleft
    // Iterate through every X in the input and look in each direction.
    let countXmas = 0
    const rows = input.length
    const columns = input[0].length
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            //process.stdout.write(`x:${input[i][j]} `)
            if (input[i][j] === 'X') {
                countXmas += searchRight(i, j, input)
                countXmas += searchLeft(i, j, input)
                countXmas += searchDown(i, j, input)
                countXmas += searchUp(i, j, input)
                countXmas += searchUpRight(i, j, input)
                countXmas += searchDownRight(i, j, input)
                countXmas += searchUpLeft(i, j, input)
                countXmas += searchDownLeft(i, j, input)
            }
        }
        //console.log('')
    }

    return countXmas
}

console.log(findOccurrences(testInput))

function getProgramInput() {
    return [
        'MXXMASAMXSAMXSXMAMXXAMXASAXASMSMXAAMAMXXMMXAMXSXMAMSAMSAMMXASXXXXMXSXMSMSXSMSMMSSMMXSAMXSSSSXXXMMSSSMMXMAMXAXAMXMSMSSSMMSASMXSXAAXMSSMXXXSXS',
        'SASAMXSAMAMXAAAMSMSSMSAMXMAMAAAMSSMMSMXXMAXSAMXMMAAAAASASMXSXAMSMSAAXXMASASAMXXAAAXAXXMAXMAMAMSAMXAAMMSXXASMSMAMXAASXXAXSAXAASXSXMXAAAMMMMAA',
        'MASXSXAMMSXMSMMMMAMAASASMAAAMXMMXAMAAAASMAXMAMAMSASMMMMAAAMMMXMAAMMXMSMAMAMAMMMSSMMAMMMSSMAMAMSAMMXMAAAASXSXAMAMMMSMASMMMMMMMSAMXAMSSMXAAMXM',
        'MXMAMMMMAXAMMAAAMAMMMMAMASMXMXXXSAMSSMMMMMMMAMMMAAMXSSMSMAMXAMSMSMSAAAMAXXAMXXAMAMXMXAAMAXXSAMXAMXAXMMXXSASAMSXSASAMMMMAAAXMAMAMAXMAMASXXSAS',
        'SXMXMAXMASAMSSMMSAMMAMAMXXMASAMXMXMXAAXAAMMSAMXMXSMSMSAAXAXMXMASAAMMSMSAMXXAXMMSAMSMSAMSAMXXMSSSMSMSASXMMXMAMAXMMXASMAASXSMXAMAMMXMASAMMXMMM',
        'MMMAXMXMAMAMXMAXSXMXAXXXSMSAMAAMSAMXSASMMSASXSASXMXXAMXMMMSMSSXSMMMXMXMASMSMSAMSXMAAXAXMAXSSMAXAAAASAMMAMAMMMSSSSSXMMSXMMMASMSMSAASAMAXXAMAS',
        'XASMSMSMSSMMAXSXMMMSSMSAXAMMSMMXSASAMMXMAMMSAMASAXMMXMXSAAAAXMASAMSASAMSMAAXAXXXMSMSMSMSXMMAMSSMMMXMAMSASXSXAXXAAMXMMMASMMMMXAAMMMMAXSMMASAS',
        'MMAMAMSAXXXSXSMMSMMAAAMAMSAXAAXASMMMMAAMAMXMAMSMMMASMMASMSMSMMMMAMSASMSAMMMMMMSMAXAXAMXMMXSAMAAMXMASAMXAMXAMXSMMMMSMXSAMMAAAMSMSXSSSMXASXMAS',
        'XMAMMSMMMMMMMSMAAAMMSMMXMXASXSMAXXAAMSMSASAMMMMASXMXXXAXAAAXXSAMXMMAMXSAXXASXAAMSMMMXSAMAASAMMSSSSMSSXMAMMSMSXMASXAAAMAXSSMMAAXMAAAAXXXASMAM',
        'ASXMSAXAAAMAAMMSXSMAMMMAXMASAMMSMMMSMXAMASXSMASAMMSMSMASMMXSAMXXAXMAMAXAMXMSMSXMMAXMASASXXMAMXXXMAMXASMMMAMMXAXXSSMMSSSMMXSASMSMMMSMMSSMAMAS',
        'MAMXSASXXSSSXXAMXXMASASMSMXXAMXAAAAXAMAMAMAXMAMAMMAAXMAXAAXMAMSSMMSASXSSXSAXAXMXXSMMMSXMASMAMXMMSMMMMAXAMXMSSMMMXMXMAAAAXAMXMSMXSAMXXAMXMSAS',
        'AXSAMXMXSMMASMAMXXMASXMXXXMSSMSSSMSMASMMMSMSMASAMSMSMSMSMMMMSMAAAXAMXAXAAMMMMSMSXMASXSXMAMMAXASAAXASXMSXSMMAAAXMASAMMSMMMMSAMASXMXXXMMSSXMAS',
        'MXSAMXMXAAMAMMAMMMMMSXSXMAMAMAMAXAXXAMXXAMXMXASXXAMAXAAAXAXMXMMXMSXSMMMMMMMASAAXAXXMXMXMAXAXSASXMXAXAXMMSAMSSMASMSASMAAXMASXSASMMSMXMXAMXMAM',
        'XAMAMAAXMSMSSSSMSAASMAMXMAMASXMSMMMMMSSSXSASMXXXXSSSSMSMSMMSAMXSAMXXAAAXAASMSMSMSMMSAMMSXSMMAXMAASXSMMSASAMAMMXXXSXMXSSMXMSAMXSAAXMAXMMMSMAM',
        'MMSAXMSMXMAXMXMASXSMMSMMMAXAMAAXMAAAXXAAASASXMMSXMAMXAMMXAAMAMAAAXSXXAXXMXMXMXAAXAASASAMMMXAAAMXMMAAMAMXSSMXSSSMMMMSAMXMAAMMMMSMMSSXSXSASASX',
        'XMAMAAAXAMMMMAMMMMXASAMAXSSSSMMMSSSSSMMMMMMMXMAXAMXMMMMMXMSSSMSSXSMMSSSMSASASXMSMMMMXMAXMMAXSMSAXMSMMXSAMXXXSAMXAAAMASASMSMXMASAMXXXAXMASAXA',
        'MMAMMXMXMSSMSMSMAMXXMAMSMMAAMMMAXAAXMXXAXAXASMMSSMAXASAMMXAAAAXXMSAAAXAASXSASMMMAMXXSSSMAMSMXXSXSMMXXMMMXMSMMXMXSSMMAMXMXAMXAMXAMAMMMMMAMMMM',
        'AMSMSASMAAXXAAAMAMMAMXMAAMMMMSMMSSSMMSMMSMSAXSAAMSSSMSAMASMMMMMMMSAMSMMMMMMMMMMSSMMXMAMMAMMAMMMXMAMAAMASAMXXMASXAAXMSSMSSXXMSMSAMASAMMMAAMAS',
        'SMXASASMMMSSSSMSMSAXAAMMSAMXXMAMAAXAXAAXAMMAMMMMMAMXASXMXXAXSXMAMMXMAAXAMXAAASMAAAMXMAMSSMMAMASMMSMAMSASMSXMSASMSMXXAAAAMXSMMAAXXXMASXSMXSAS',
        'MXMMMAMMMMAAXXAXAXMMMSSMAXMAMXAMMMMSMXMMASXMMMSMMMSMXSXMXASXMASMSSMMXSXSMSMSSSMSSXMAMMXAMXSASMSAAXXSMSASXMMAMXSAMSMMSMMMMXSAMMMMMASAMAMSAMXX',
        'SMSMMMMMAAMXMSXMAAMAXXAXMSXMSSSXSAAXMMSSMMMXSAMMAAAAMMAMSAXAMASAXXAMSAMXMAAMXXXAXXMSSSMASXSASASMMMMAAXASAMXSMMMMMAXAAMAXMAMXMSAXSAMXSAMMMMSX',
        'SAMXAASXSSXMAMAAXXSASXMMXMASMAAASMSMSAAAAAAXMAMSMSSSMSAMXASXMASMSMSMSAASMXMMMSSMMSAMXASAMAMAMMXXMAMMMMSMMMAMAAAASMMSSXSAMXXAXMXMAASAMXSXXAAX',
        'MMMXMSAAAXXAXSMMMXAXSAXMXSSMMMMMMAAAMMSMMMSXMAMXXAAAAXXXMMMMMXSXXAAASMMMXSAAXMAAAAAASMASMMAASXSMSASAXMXAAMAXMMSXSAAAXXXAAAMSXMXMAXMASXSMMMSX',
        'MSSSMXMMMMMSXMAAMMSASMMMAMAAXXXSMSMSMAXXXSAMSASMMSSMSMSXAAAXSXMMMSMXXAXAAXXMSSMMMSMMMXMXSXSASASXSMSAMXMSMSSSMAXASMMSSMSAMSXMASMMMXSXMXMASAAM',
        'XAAAAXXMMXAAMMSMSAMMXAAMASMMXAMXAMXXMASMMSAMSAMMAXAAXAMXSSSSMAXSAXSSSSMMMXAXMASXMAMXXSXMMMMMMMMAMMMMXMMMXAAAAXMAMAAXAAXXMXASXMAAXAMAMMSAMMMA',
        'MMSMMMSMAMSMSAXAMXSSSSMSMSAMSSMMAMXSMXSAAMAMMSMMXSMMMSAXXXMAMAMMMSXMAMXAAXSMMASMSSSMXMAMMXAAXAMXMAAXAMASMMSXMAMSAXXMAMMASMMMSSSMMXXAMAMMSXXS',
        'AAAAMAAMSXMAMAMXAMAMAXAAASAMAXAMASAXAASMMSSMXMXXMXXMSXXXMMSSMXSAMXMMAMMXSMMAMASAAXXMASAMAMMXXXSASMSSXSASAAXAXMMAMSAAAMSMMAAAXMAMSMXMSXSMMAMX',
        'SSSSMXXMMAMSMXMASXMMAMSMXSXMASXMAMXXXMXAAAASAMAAAMMMMXMAAAAAXMSASXAMASMAXASXMASMXSMSMSASXSSSMASASAMMAMXSMMSMMMXAMXXMXXXASXMXSXMMAAAXMASXMASM',
        'AXAXASXXMXMAMAMAXAXMMMXMASXMAMXMASMSMSASMXSMMSMSXXAAXMSASMSSMMSSMMMSAAMASAMMSXXMAMASASAMAAAAMAMMMMMMAMXMAMMMASMSSXMMMASXMASXSXSSMSMSAXMASASA',
        'XMAXSAMXMASMSAMXSSMMXMAMAMXMASASMMAAAXAMMXMXMAAMAMSMSAMAXMAXAXMASAXMMMMAMAMAAAMMSXSMMMAMMMMMMXXAMXAMAMAXAMASMSAAXAXMAXMASXMAMAAXXAXAAMSXMAMX',
        'SXAXMMXMXASXSXXMMMMSASXMASMSASMSXSMMSMMSXAXASMSMMMAASMXAMMSSSMASMSMXAXXMMSMMSXSAMMXXXMAMXSSMXXMAMXSSSSXSASXMMMMMXMMMSMXMMXMAMXMASMSMXAXMMSMM',
        'SAMXSMMSXASAMXMAAAASMSXSXMAMASXMAMXAXAASMASXMMXMXSMMMMMMXXXAXXXMMXXMASMSAMAMAMMASASMSMMXAAASAMSSMAXAMXAMXSAMSAMMASAMASMASXSASXXAMAAAXSXSAMAS',
        'MAMAXAAXMMMXMAAXMMMSXXAMAMSMMMAMAMMMXMMSSMXMAXAXMXMMAXXAMSMMMXSASXMASMAMXSSMAAMXMASAAXSMMSXMXXAXMXMAMMSMAMAMXAMSASASASMXMAMASMMMMMMMMMAMASAM',
        'SAMXSMXXAXAASASAMXXMMMAMAMAASXMSXSASASMMXXMASMSSMMASMMMMSMAAAXSAMSASAMSMXMXSMSXSMMMMMSMAAMAMMMMSMMSAMAAMASAMXXMMXSAMASASMSMXMAXAASMMSMAMMMMM',
        'XXMMMASXSMSMSAXMMXSXAMSXMXSSMAXAXMASAMAMXMSMXAXSAAAXXAMXAMSMSMMAMASAXSXSXSASMMAAASAMMXXMMSASAAXAAASAMSMSASMXAMXSAMXMSMXMAMXAXASXMSAAXXSMXMAS',
        'SXSASAMXAAMAMXMXXAXMSSMAXAMAMSMMSMMMXSXMAXMAMSMSSMSSSMSXMMXXMASXSXAMXSAMXMASAMSMMMAMSAMXASAMMSSSSMSSMAXMASASMMMXAXMMMMMMAMMSMASMASMMXAMXMSMA',
        'AASMMASXMXMAMMMMMSSMMAMMMXSAMXXXAAAAXMASAXMAMAMXXXAAAAMMSXMASXMASAMXMMAMAMAMAXAXAXXMMMSMMSMMXXXAXASMMSSMXMAMAAXXXMMMSAAMASAXMAMMAMAAXSMSAAXM',
        'MXMXSAMMXMSAMMAXMASASAMMAMMXMXMSSSMMXXAMXASASMSASXMSMMMAXASAMAMXMXXMXSAMXMXSMXSXMXXSAXMXAXXXXXMMMMMMAMMMMMAMSMMASAMASXSXXMAXMAXMXMAMXMAMSAMX',
        'MXMASAXXMAXAMXMMSASMMASMAAASMMAAAXASMMAMMXXASXMASAAMAMMMSMMMSMSMMXXXAMASMMMXMAMASAMSMSMMMXXXMXMXAAAMASAAAMXXAASMSAMXSAMXSXMXSSSSSMMMAMXMASAX',
        'XXMASXMMXSSSMXMMMAXAMAXXXMXMASMMMSAAMXMASMSMMASAMMMMAXAMXMMAAAAASASMSSSMAMAXMASAMAMMAAXAXMSMSASXSXSXMSMSXSMSSMMXSXMMMXMAMSXXXAAAXMASAMXAAMSS',
        'MXMAMAMXAAAMAASMMSMAMMSAMXMSMMAXXMMXAAMXAAAMXXMASXSSSSMXAMXXMSMSMASAAMASMMSXSAMXMXMXXSXMSXAASASAMXMMMMAXAAMAMAXAXAAMAAMAMMXMMMMMSSMSSMSMMSAX',
        'MXMSSSSMMSSMSMSAAASAMMAMXAAAXMMMXXSXMXSSMSMMMXMAMAAAAXMMSMMAMMMAMXMMMSAMXAAAMMXMXSMSAMAAAMMMMMMAMMMAMMAMXMMSSMMSSSMMXSSMSMAAMXMAXMAXAXSAMMMS',
        'AMXMAAXAAAAXXAXMSMSXXXSXSMSMSASMSMMAXSAXXAAASMSSMMMMMMSAMAXXMAXXMAXAXMAXMXMMMSSSXAASASXMXMMMSAMAMASMSMXMXXAXXXAXAMAXSAXMAMSXSAMMSMMMMMSAMAAX',
        'AAMMMMMMMSSMMAMXAAMMMMMASXMASAMXAAMMMSAMXMMMSAMXXAMSMAMASXMASAMMSMSMSMMMSMXSAAAXSMAMAMMSAXSASXSASXSXSXAXMMXMMMXSXSAMMMXSXXXASXXMAAAAXASXMMSS',
        'MSAXXMXAAAMXMAXMMMMAMAMAMMMMMAMSSSMAAMXMMMSXMXMMMSMMMAXMMAAMMASXAAXXAAAAAAXAMMXMXMAMAMASAXMAXMAMXAMAMMXAXSASAAASMMXSMXXMMMMMMAMSSSMSMXMASXAX',
        'SAMAAMSSMSSMMSSMSASASAMASAXAMXMXXAAMASMSXAAXMMMSAMASXMASAMSXSAMMMMMXSSMSSSMMXAXSXMASAXXMSMMAMMXMMMMSMAMMASASASXSAMASAMXAAMAMMSMAAAAXMASAMMSM',
        'XAMMXMAAMXAXAXAASMXMSASAMASXXMSXSXMXXXAXMMMSXAAMMSAMAXXAAXXXMAMMSASAXMAMAMAXMMSAAMAXXMAAAXMMSAAXAXMAMXMMAMXMAMMSAMASASMSXXAMMMMMXMMMSXMASXMA',
        'MMMXXMSSMSAMMSMXMASAMAMAMMMXAASAMXMXMMXSASMMXMSSXMASMMSMMSSMSSXASASMMMAMAXAMAXSMSMSMSAMXMXAXMMSXMMXMXASMSMSXAMXSXMMSAMAAASXMSAAMMSAMXSMMMAMS',
        'XASAMMMXMMAMMXXSXMASXXMMMMASMMMMMAAAXAASXMAAMSMMXXMAAXSAMMAMAMMMMMMXASXSMSMXMXMAXAXASAXMMXMXSAXAXSSXMMSAMASMSMXMAMMMAMMMMMAASXXSMMASASXAMAMA',
        'MMMMMAXAMXXMXSXSAXAMMXMSMMAMAMAMSMSAMMMSXSMMMAAMMSSSXMSAMSAMASAXSSSSMMXSAAAASAMXMASMSAMXMASMMASMMMAAAMMAMAMAAMMSAMAXAMAASMMMMASAXMXMASMXSSSS',
        'XAAAXMSMSAMAXMASMMSMSAMAAMAMASAMAAMXMMXMAMMXSMSAAAMAMXSXMSMXMSMSXAAMMMAMXMMMSASXSAMXSAMXSAMAMAMMXSAMSSMSMAMXMXASMMMSSSXXXAXMASAASXMMXMAXXMAM',
        'MSXSXXAXMAMMMMAMAAAAMASMMMMSASMSMSMASXMXAMMMMXXMMXMAXAMXXMSAMXMXMMMMAMXSXSXASAMXMASAMAMAMMXSAMXSAXASXAAASXSMSMMSAXMAMMMSSMMMSMMMMAASXMSMSMSM',
        'MMAXXSASMSMSAMXSMMXMMAMAMAMMAMASAAMMSAMXMSXAMAMXXMSMSMSXMASXSAXMAAXXASAMAXMMMAMXSAMXMSMSMSAMAMAMXXMMMMSMSMSAXMMMXXMASAAXASXSXXMXSXMMAMAXSAMX',
        'AMXMAXASAAXXXXXSASAMSASAMSMMXMAMXMMMSMMASAMMSSXMXMAAAMAAMAMXSAMSSMSSXSAMXMXSASMXMASXMXAAAMXSAMSMSASASXMASAXMASAMMMMXSMMXAMXAMSMXAMAMAMAXMAMX',
        'MMMSSMMMXMMSSXMSAMAMSAMMMMAMXMXSMMAAXAXXMASXAXAMASMSMSXXMASXMXMAAAXXMXAMAMASAMAXSAMXAMSMSMAMASAAXAMMXAMAMXSXASXSAASMMMXMXMMSMAMXMASMMSSMMAMX',
        'XXAAAAXXXMAAXMAMAMMMSXMXAMXMMMAMASMSSMMSMMMMMSSSXSXMXMXMMMSAMXMSMSMASXSMXSAMAMSXMASMXMAAAMASXMMSMMMSMSMAMMSMMMAMXXXAAASXSMXXSMSXXAMAAAMASASX',
        'SMMSSMMXXMMXSAXSAMXAXASXSSMMAMAXMMAMAXAMASXAXAAMMXAMMSASAAXXMAXMAMMAMXMAXMXSXMXASAMXXAMMMMXSAMXAAAAXAXSASXXAASAMXSSMMMSAAMAMAXAXMMSMMMSAASAX',
        'AAMAMASXMMSASMMSXXMXMSMAXMAXMMXSMSSMAMMSAMMMMMSMAXAMXSXSMXSASMSMAMMXXAMXMAAXMASAMASAMXMASMMMMMSXSMSMMMXXMASXMSASAASXAXMXMMASAMSSMAMAMXMASMSS',
        'SXMAMAMAMAMMSAMSXMASXAXXMSSMXSXAAAXMXSXMASAAXXMMXSAMXMAMAXSXMAAMSMAMXMSMSMSSMAMASXMXMASASAAXSAXXXXXAMSAMXAXMASAMAAMSMMMASXXMAMAAMAMSAMXMMMAM',
        'XXMSMMXSMXMAMAMXAMAMSMMXAAAAAXSMMMSAMMXXAXXXMMXAAMAMAMXMSMSAMSMXAMXSAAAASAAXMXSAMXAMXXMASMMSMASAMASMXMAMMMSMXMXMMMAXMASMSMMSMMSSMAMMAMMSAMAM',
        'SAAAASXXMMMSXMMSXMAMAXXXSSMMMMAMXSXAAAAMSSSSSXMMMMAXASXMAASAMMSXXSAMMSMSMMMMXMAXMXSXSXAXMXMAMXMMMXMAXSAMASAMXAAXXXXXMMSAMXMAAXMAXMSMAMASMSAS',
        'SMMSXMAXAAAMASMMSSMSSSMMMAXXMASMXASXMSXMAAAAMSMAASXSMSASMXMAXAAMSMMXMMXMMAAXSSMSSMMAMXMSMASASAMXXSXMASASMSMSMXASXSXXMSMXMASXSMSAMXAMAMXSASAX',
        'XAAAAXASMMMSAMAAXXAAAAAASMMSAAAMAMXXMAMMMMMMMASMMMAAASXMXMSMMMXMAAMXSAMXSMMXMAAMMAMXMAMAMMSXSASXMSAAXSMMMMMAAAMXMXMASXAXSASAMXMXXSMSXSAMMMSM',
        'SMMMMMXSXAAMMXMMMMMMSMXMMAXXMMSAMXMXSAMMAMMXSMSXSMSMMMMMMXAAAAMSMSMAMAMASAMXSMMMMXMMXMSMSXSMSMSAASAMXXMASASXSXXAMXAMAMXMMMMXXMSMMXAXMMASAAMX',
        'MXSAAMASMMMSSXXMASAAAMMSMMSXSAXMXAAAMAMSAXMAMXMASAXASAAAMSSSMSAAAAMASAMXSAMXXASASMMSAAAAAAXAXAXMMMMXMASMSASAAAMSMAMAXXAMASXMMXAASMMMMSAMMSSM',
        'XAMMSMASASXAXMAXASMSXMAAAXAAMASXXMMMSAMXMSMMXXXXMXMAXMMSXMAXAMMMXXMAMAXASAMMSMMXXAASMSMSMMMMMMMXSASAMMMMMMMMMMMXASXMMSXSASAAXSMSXAXAMASMMAXA',
        'MXXSAMXMXMMSSMSMAXMXAMSXSMMXMSMMXSMXSASXAMMAMSMSMSMSMSXXASMSSXSXMSXSSSMAMAMASXMXSMMMXAMXAAAXAXSXSASXSAXXXSSXSMXMAXXAASAMASMSMMXAXSMXSAXXMAMM',
        'MAXSASMSMXAXAAAMSMSMMXMAAXXXMXAMASAXMAXMSMMAAAAAAAAAAAASAMXAAXXAXAAMAMXXMAMMMASAMXAXXXXSMSSSSSMAMXMAMMMMAMMAMMSMSMSXSMAMAMMAAXSSSMAXMASXMXSX',
        'ASXSXMXAMXSXMMMSMAMASAMMMMXMAAMMASMSMSMAAXSMXMSMMMSMSMXMMMMMSMSXMMXMAMAMMSMSSXMXMMMSMSMAAAMXMAMXMMMMXSAAASMAMXSAMXXMXMSMXSSSSMAXAASXMXMMMMAM',
        'MXAMXSSMSMXMXAXAMAMMMAXSAMMAMMSMXSXAAXMSMXXAAXMXMMMXMMXMSAMSAAXMXSASAMASXXAXXMSASXMAMAAMMMXXXXMASXMXAMXXAXMASXMMMXXASAMXXMAXAMMSMMMMMMSXSASX',
        'XMAMAMAXXXAXMASMSMSXSAMMAMSASASXSMXMSMMAMSMSMSAASAMAXMAMMAXSMMMMAAXMXSASAMSMSASASMSMSMXXMMMSMMSAMAXMMMSMASMXSAMSMMASAMSMSMAMXAXSAMXAAAXMAMXM',
        'MSAMXSMMSSMSMXMAAMMXMAMSAMXAMAXSXMAMXASMSSXAXMMMXAXAMSASXSMXASMMSSMMXSAMXMMAAAMAMAAAAMSXSAAAAAMASXMMSAXAAXMASXMAAXSMMXAAAXSSSXXMMMMMSSMXSAMX',
        'MSMSAMXAAAXAMAMSMSSMSAMMASMAMMMSXSMSXMMXAXMXXSASXSMSXSAXAAXMXMAAAMXXAMMMMMMSMXMAMSMSXSAASMSSMMSXMASAAAXMXSMMMMSMSMXAXSMSMMMAMSSMSSMMXAMAMMMM',
        'ASMMXXMMMSMXMMMXAAXASAMSAMXAXAMXAXAAMMSMSSSMASXSAMAMMMXMSMMMXSMMMSXMAMSAXMAMMMSAMXAMXMMMMMMAXAXXMAMXSSSMMAMMAMAAXMXSMMAXXMSAMXSAAAASXXMASAMA',
        'XSMSMASMMXMSAMAMMMSXSAMMMSMSXSMSSMMMSAAXAAAMXMAMAMXMXXSAXASAMAXSXXXAMXMMSMASXAXXXMAMAXXSMSSSMMSMSMSAMAAXXMASASMMMSAXAMAMXXMAMXMMMSMMAXSASASX',
        'MXASXMSASMASAMASAXMXMMMAAAAMAMAXMAXAMXSMMSMMAMXMMMXSAXMASAMSAMSAAMSSXXAAMMMMMSSSSMSSXMAAXAAAMXAAAAXAMSMMXSASASAMAMASMMMSSMSMMASAMAMMSMMASAMM',
        'AMMMAXSAMMAMAXASMMXAMXXMSMMMAMAMXXMXXAMXMAAMASXSAAXMAXMAMAMXSXAMXMAMMSMSSMMMXMAMXAAMAMXMAMSMMMMSMSMMXMXMAMMSXSAMMXAXXAXMAAAMXASAXXMAXAMAMAMA',
        'SAASMMMAMMSSSMMSASMMMAXXMXAMAMAAAXSSSMSXSSSMMSAAMAMMAMMASMMXXSMXAMSXMAAXXAASMMAMMMMSXMASMXAMAXMAAXMSASAMAMAMXMMSSMMSSSMXMMMSMAMAMSMXSAMSSMMS',
        'MSMAAXSMSAAAXXMMMMAAAXMXASXXAXMMSXAAXAXXMMXAXMMAMXAXASXAMAMXXXXSAMXASMSMSSMMASXMXMXMASXSMXMSMSMMSMAMASASASMSASMAAAAAMASXAAAAMSMSMMAAMAMMAMAX',
        'XAMSMMMASMMSMMMASMSMSSMMXMASXSXAXMMMMMMXSAMMXMMXMAMXAMMMSAMXAXMAMXSAMAAXMASXXMXMASASAMXMXMXAAXXSMMXMAMAXAAMSAMMMSMMMMAASXMMXXXAMAMMMMSMSAMXS',
        'AXAAMAMAMSAMXASXSAAAAAASAMXMMAMXSAASMMAAMASXMMAASXSSMMSAMASAXSSMSXMAMSMMMXMXAAAMXSXSAMXMAAXMMMXMAMSMAMXMASMMXMAMMAXXMSASXSXSAMAXXMAAAXASXSXS',
        'MMSMSAMXSMMMSXSMMMMMXSMMAXMAMMSMSXMAAMMSSMMMAMSMSAMAAAMMSMMMMAAAAXSAMMXXSASMMSXSXMASASASXSXSAAAMAMXSASXAAXXAASASXMMXMXAMAMMMXSMMSSMSSMAMXMAS',
        'XAAXXMSXMASAMXMAXMXSAMASAMXAMXMAMAMXMMXAMAAAMAMAMAMMMMSXAAAAMSMMMXMXSMAMSASXMXMAMXAXASASAMASMSSSXSAMXMMMMXMXMSASAAXSAMMMAMXXMAMAAAXMXMXMXMSM',
        'MSSMSASXSAMXSASMMXAMAXAMXMSASMSSSXMAXSMSMSASMSSMXAXXAAXXSSSMXMAMXSXAAMAXMMMAXMXAXMXMAMAMAMAMXAAAAMASXMSMSASMXMASMMAAASASASXSMSMMSSMMAMAMXMAM',
        'AXAAMSMMMXSSMAAMMMMSSMMSXXAASAAXMASXMAAMAXAXXAAXMMXSMXSAXAAXASXMAMMSMSMXAAMXMSMSXSAAAXXXAMXSMMSMMSAMXAAASAMXAMXMMMMXXXAXXAAAAAAXXMAMAMAMMXMS',
        'SMMMMXMASAMXMAMAAAMAXAXMMMMXMMMMSAMSAMXMMMSMMSMMXSAXMAXXMXMSMMXMAMAAXAMSMMMSXSAAASXMXSMSXSAXMXXMASASXSMMMAMSMSMMXAMSSMSMSMMMXMSAXMSMSSMXSAXA',
        'MMSXXXSXSMSMSASMMSMMSMMXASAXMAMMMAXXSXXXXSAMAAXMAMMSMMXSASXMXXXMXSXXSXMAAAXMAMXMMMMSMAAAXMASXMAMMSXMAXXXXXASAMXMMXMXAAXAMXAXSAMMSXXAMAAAMAMM',
        'AAAXMASASAAAAAMAMMXAAXXMMMMXMASXSSMAXXSMMSXXSASMXSASAAAAXMAASMXSASXASMSMMMAMXMMXXAAASMMMSMMSMSMMAMAMAMAMSAAMMMAXMMMSXMMAMSXXAAAAXMXMSMMMXSAX',
        'MMSMSAMAMMMSMSSMMMMSMSMAAAXMAXSXAAMMMASAAMMXXAMXAAXXMMSSMSMMAAAXAXMXMASASMSAMXMMSMSXSXAMAAAXMAXMASAMXSAAAMAMXSMMMAXAAXXXXMXXSSMXMMAMAXAAAASX',
        'XMAMXSMAMSMXXAAASMMAAAASXSSXSASMSMMMSASMMXAXMSSMMSSXSMMAAXAXMMMMMMMMMXMMMAAMASXAAXXXMXSSSMMSSMXSAMASXMXSXXXMAMXAXXSMSMXSAMMMMAMSMSASXSXMASXM',
        'MSMMMMSXMAAXMMMMMASMSMXMXAXAXMSAAAAAMASXMASXMASAMXAXSASMMMSXXAXAAAAMMMSAMXMXSAMSMSXMSAMXMMAMXAAMASMMXXXMASMMSSSMSAMAXAMMAXAAMAMAAMAXXMMXMAXA',
        'XAAAAMAMSMMMSMASXMMAXMXSXMMSMASMSSMSMAMXMAXAMMSXMMXASAMAAMMSSMSSSSXSAAMASMXXXMAXAMAMMXSAMXAXMMMMAMAAAXMXMMMAMAMAAXMAMAMSMMSMSMSXMSXSASMMMASX',
        'SSSMSSXMASAAXXAMAAMAMXAAAXAMMMMAXXXXMXXXMXSAMXSMMASASMMXMMMXMXAMAAXSMSSMMMMMMXAMAMXMAAXASMSMSMAMASMMMMMAAAMXMAMXMXMMMAMAAMAASASMAAASXMASAMAA',
        'XAAAXAAMAMMMMMSMSMMSSMMSSMSXMXMMMSSXAASMMASXMAMAXXAAMXXXSASASMMSAMXMXAAASXAAXMASXMMMMMXAMAXAMXAXAMXMXAXSSMSXSXMMXMMMXXXMMMMMMAMXMMMMASAMAMMX',
        'MSMMMSMMSSSMSXMAAXAAXAMAMAAAMMMSAAMMMMXAAASAMXMMMMMMMXMMSASASAXAAXAMSSSMMSSSSSXAAXXSASMSMAMAMSMSMASAMXMXAMXAXAXSASXMASMSXXAAMAMAXXXXXMASXMXS',
        'AXASAAAXAAAAXAMSMMMSSMMASMSMMAAMMXMAMSSSMMSXMASASAXAMMMAMXMASXMMXMXXAAAMXAMMMMMSMMMSASMAMXSAMAMAMMSMMXSMSMSXSMMSASXMASAAMSSMSXSMSMMSSSXMXSAM',
        'MSAMSSMMMSMMMXMAXASAMMSXMXAASMMXSASMSMAAMAXAMAXMXXMSXMMSSSMXMASASMSMMSMMMXSXXXAMASXMMMMSSMSXSXSASXMASAXXAAAMAAAMXMXSAMMMMAAMMAXAAAXAAXXSXMAS',
        'AAXAXXAAXMAAAXSXSXSASMMAMMMMXAAAMXMMAMXMMSSSMSSSSMXMAMAXAXMASXMAAAAMXMAXMMMAXSMMAMXAAAXMAMXXMXMMMAMAMXSMMSMAXMASXSAMMSAAMXSAMMMMMMMMSMMMXSAM',
        'AMMSAMSSMSSMSXMASMSAMXXMMSXASMMMSAMSSMMSMMAXAAAAAXAXAMMMAMSXSXMXMSMSASMSSMMAMMAMSMSSMSSSMMSASAMSSMMMSMAXXAXXXXASAMXSASMSAXMAAXMASAMXMMAAASAS',
        'XXAXAMXAMXXAMXMASASAMXXSAMMMSMAXSAMAAAAAXMAMMMXMMSMSSMXMAMSSSXXXMAMSASAAAXSMSMAMXAMXMMXAXAMAMXSAAAMSAXAAMSSSSMAMAMAMASAXMSMXMASASASASMXXASAM',
        'XMAXMMMMXMMXMAMXSXMMMAAMAMAXMMSXMAMSMMMSAMXMAXMXXXAAXMAMAXXASAXSSMMMMMMMMMXAAXAMMXMSXMAMXAMAMMMMSMMAAMXSAXAXXAXSXMASXMMMXAAASXMASMMASASXAMMM',
        'XSSMSAAXSASASASAMMSMMXSSSSXSAAMASAMASMXMASASXSASASMMMSSSSSMMMSMAASMAMAXXSMMSMSMSSMAXMAXSAXSAXMXAXAMMMMXAMMAMMSAMXSMMMAXMSMMMMAMAMAMMMAMMSMAM',
        'AAAASXMSAAMASAMXMSASAMXAAXXAMASMMSMAXXAXXSAXAXXMAAXXXAAAMXASAXMSMMSASMXMAMXAAAMAAMMMMMAAMMSMSSMMSSMSSXMMXSAMAAAXMXAMSSMXMASMSMMXSMSXMSMAAMAS',
        'SMMMMMXMMMMXMAMAXSASMSMMMMAXMASXMAMMSXSMMMMMSMXMMMMMSMMMSSMMMSMAAMMMSXASXMSMXMMSXMMAMXMMXAXAAMAAAAAAMMAXAMAMXSXMSMMMAAMXAAAXAAXAAXMAMMMSMSAS',
        'XASXXXAMMSMXXAMXAMXMASXAMXAXSXMASMXMAMXAMAAAMASXSXAMAXXAMMAAAAXMSMAXXMXMAMMSMXAMAMSMSAXXSMMMMSSMSMMMSSSMMSXMXXAAXASMSSMSXSMSXSMAMMSXMAAXXMAS',
        'SXMAXSAXAAAMASXMMMXMAMSMSAMXAXMXMSXMAXSAMXMMSMXAXSMSMSMMSMXMSSSXMMMMMMXSMMAAMMASMMAASXSASAAXMXMAXMMAMXMXMAMXASXMXSMAAXAMAMXMMXMAXXAAMMXSAMXM',
        'MMMXMMAMXSAMAAASXSAMXXMMAMMMMSXSASMXXXMMMAMXMAMSMXXAXXAMAMAAXAXAMMSMXAAMXMSSXSAMXSMMMASASAMXSMMSMXMSMSXMASXMASAMSMMMMMAMMSAMAMXAMASAMAASXMAS',
        'SASASXXMMAAMMSXMASXXSASXMSAAXMAMAMMMSSMSMMXAMSMMAXSMMSSMAXMSMMMMMAAAAMXMAMMAXMASASXAXXMAMMXAXAXXXXSAAASMMMASASXMAAAAXMAXXSAMSMMXSAMSSMMSASAS',
        'XMSAMMMSXSXMAMAMXMAXSAMXAXMMAMAMAMMAMAAAASXMMMAMSMAAAAMMMSMMAXAASXMXXXMXXSMSMSAMMXMMASMXMMMXXXXMAXXMSMXSASXMASXMSSMSSSXSAMXMAAXAMAMXMMXSXMMS',
        'XMMXMAXXAXXMXSAMXMXMMSMMSMMSMSAMXMMAMMMMXMAMASXMXSMMMMSAASASXMMXXAAXSMSMMMMMMMXXMAMXMAAAAXASXMSXSASXMMASXSMMAMAXAAXAAXMMAMXSXSMMSSMAMSAMSSMX',
        'XMASXSMMMMMMMSAMXMXSAMXAAAAAMAMMSMSMXMAXASAMASAMAMXSAMMMXSAMMAMSSSMMSAAAAAAAXSSSSMMAXSAMXMXSAAAAMSAAXMAMXXXMASXMASMMSMXSAMAMMMAXAAMAMMASAMXA',
        'XMXMAMXXAAAAASAMSAXMASMSXXMXMAMXAAAAASMSMSAMXSAMXSASASXSXMASXSMMAMXAXSMSSSMMSAAMASXXXAXSXMASMMMXSMMMMMSSMMASMMXSXMASAAASMSMSASXMSSMAMSXMMMMX',
        'SSSMSMAMXSSMMSMMSAMSMMMMASMSSSSSMSMSMAAAAMMMASXMXMXSAMXAMXSAAAXMAMMMXAMXAAASAMXMAMXXSSMSAXAMAMMXMAASAXXAXXAMAAAXAAXSMSMMAAXMASAAAXXAXMAMASMM',
        'MXASAMXSAMAXMXXAXAMXSAMXAAAAAAAAAMAXASXSXSAMXSASMSAMXMSXASXMMXMXAMXXSSMSSMXMAMXMAMXMAXASXMASAMMASMMSMSSSMMMSMMSAMXMMMMXMMMXSAMMMMXMXXSMMASAA',
        'AMXMMXAMASAMXAMXSAMXSMSMSMMMSMSMMMASAMAXASMSASMSAMXMAAXAMAXXSSMSASMXSAMAXXAXXMAMASAMXMXMMMXMMXSASAMXAMMMAAAAXSAMSMMAASASASAMXSXMXSSSMAXMXSMM',
        'MAAMXMXMAMXMMSSMAXXMMXXAXXXXMAXAXXMMAMXMMMAMXXXMXMASXSSSSSSMAAAASAMXXAMXSSMMSXMSAAAMSMSAMXASXMMASXMMMMASXMMMSAAXMASMMMASAMXXMXMMXXAAAMSXMMXS',
        'MSSSMMSMMSXSAAAAMMMMMAMXMASXSAMMMXXSXMXMSMMSMSMMMSXMMXMAAAMMMMMMMMXSSXMMMMMXMAMMMXMMSAXASMMSAAMAMMMSMSMSSSXXMMMMSAMXSMXMXMXSAAMSMMSMMXSASMAA',
        'MAMAMAMAMAASMMMSAAMASAXASXMMXAMXAXMASMXAAAXAAASXMMMSMSMMMMMASAMXXXMMAMXXAAMMMMMAMXSAMAMXXAXSXMMMAAXAAAAMAMMMXAAXMASAMXMASMMSSMSAAMAXAXSAMMSS',
        'MASMMMSAMXMMAXAMMMMAMMMMSAXAMSMMMSAAASMSMSSMXMMXAAAASAAXMMSASASMMMXMAXSXMMSAAASXMAMASAMXSAMXAXAXSXSMSMMMAMAAXMSMMAXASAMAXXAMAMXMSMXSMMMAMAMM',
        'XMMXAASAMXMSXMXMASMSXSAMXAMSSMAAXMMMMXMAXAXXSXMSSMSSSSSMSAMASXMASASMSMSASASMSMSAMXMAXMAMXSAMMXXXAAMAMAASMSMXSAAMMSXMXAMXMAMSAMSXXAAAAASAMASX',
        'SXAMMMXAMAXMASXMMXAAAXAXMAMXAXMMMMSMSAAMXMAXSAMAAAXAMAXAMMSAMAXSAMXAAASXMAMXXXSASAMSSMSXAMMXXMMAMXMAMSMXAAAXMXMSAAASMSMSMAMMAMAMMMXSMMSXXXSA',
        'AMAMXSSMSXXMAMXXXMMMSSMMMXXSAMXAAXAASASXAXMASAMSMMMSMMMSMMMMSXMXAMASMMMMMSMAMAMXMAXMAAMMMMASXSMAMSMXXXAMSMMMXAXMMMMMAMAAMSXSAMMAAAAXAMXXSASM',
        'MMXMAMAAAASXMXXMXAXAXAXAXAXMAASXSXMXMAMXXSMMSXMAAXAMASXAXMAASASXAMXMMXAAAAMAMAMXXSMSMMMXMAMSAASXMAAXMMSMMAASMMSMSMXMAMSMSAASMMMMSMMSSMAAMMMX',
        'XAAMSSMMMAMAMASXMMMXSMMMMMSSSMSAXAMAMAMXXMAAMASMSMASXMSMMMMMXMASXXXSXSMMMSXXMAXXAXAMXAAXXMSMMMMXSMSSXAAASMMSXAAAAXXSAXMXSMMMMAMXXAAAAMXMXXAX',
        'XSXXMAMXXMSXMASXAXMMMXASAXAXMAMAMXSASXMMXSMMSAMAMXMMAXXXASMMSAMAMXAXXMMSXMASXMSMAMAMMXAXMMAAMMMXSXAMMSSMMMAMMMMSMSAMXXAAXAMXSAMMSMMSSMAMAMAM',
        'MAMXXXMAXMXMAMMMSMMASXXSASMXMSMSMXMAMXMAXSMMMAMAMASXMMMXMAAAAXXAXMAXSXAMAMAMAAXXAXSMMMMAASMMMAMMMMMSAAXAMMSMAMAMXSXMXMMMSSMAMXXXAAAAAMAXASAS',
        'XSXSMSMSMASXSMSMMMMASMAMAXMAMAAASXMAMXMSXMAXSMMMSAMXXMAMMSMMSMSXXASMSMXSMMSSMMMXXXXAXAMXXMAXSAXAAAXMMMXXMAMMAMXSMMAMXAAAXAMXSAMSAMMSSSXMAMAS',
        'AMASXAAAAXXAMAAAMSMMXMAMXMSSSMMMMMSSMSAMASXMAASAMASXSMXSXAAMMAMMMXMAXAMAAAAAAXXASASMMXSXASXMSASXSSSSSSSXMASMMMXSASAMMSMMSMMAMAXSMMXXMAMMSMAM',
        'AMAMSMSMSMMMMSSSMAMAMMSXMXAMXAAAXMAAMMAMAMAASXMAMAMAAAMSMSSMSSSMSMMSMSASMMSSSMSXMASASAMMAMAAMAMMAMXAAAAMMAMAASXSASXSAASAAXMXSSMMAXXAMAMAXAMX',
        'SMAMXXAXAAAAXMAXMMMASXMASMMSXSSMMAXMASXMXSMMXMSSMXXSMMMMAMXAAAXAAXXAAMMXAMAAAAAXSXMAMASXMAMXMMMASMMMMMMMMSMSMMAMAMAXMAMXSMSXMAMXAMSXMXMXSSXX',
        'ASXSXSMSMSMSSMAMXXMAXXMXMAMAAMAXAMMXMSXMAMXAMMAXXAMXMAMMXMMMMMMXMSMMSMASXMMSMMMAMAMXMXMXXAMMSSMAMMAAXAAXMXMXAMXMSMMMSMSAXASXMAMMSMMAXSXAXAMM',
        'AAMMASAAXAAXMMSMSMSMSASXXXMXMMAMMXMAMXXMASAMAMASXXAAXSXMAXAXXXSAASMSMMXMAMXAXXMAXXMASMMMMXSAAAMSSSSSSMXSAAXXAXMAXAMXAAAAMMMAMXSXMASMMMMMSMAA',
        'XXAMAMMSSMSMXAMSMAAAXAXAASMSAMSMXXXMSMMSASASMSASMSSMSMAMMMMSMAXMXMMAAAXSAMMSMXSSMMMXXAAAAAMMSMMAAMAAXMASMMMSSMSMSXMMMSMSMXSAMXMAMXMAMAAAAXXS',
        'MSSMMSXMMMMXMASAMMMSMMMMMAAXMAMMXSXXAAXMXSMMXMAXAMXMAMAMXXAAMXMSASMSXMMXASAAXXXXAXSSSSMSMMXMMAMMXMMMMMMXAXXAMAAXMMSMMAXMAAMMSSMAMSSSMSMSSSMX',
        'XAXAASAMXASAMXSXSAXAASAASMMMMAXSAMXXMSMSXSASAMXMSMSSMSMSAMSXMMAMASAMSXMMXMMSSMMMSMAAXAXAMMAXSXMAMXXMAAMXMSXMMSMSMAMASMSMMMSMAMXASAAAXMAMAAMX',
        'SSSMMSSMMMSMSMMASXSMMMXXXAMXSMMMMSSMAMAMASXMXXXAXAMXXAXMAXMASXSMAMAMAXMASAMXAAAAMMMMMXSXSXMXXAMMSMASXMSAAAMXXAAXMASXMAMAXMAMAMXMMMSMMMSMSMMS',
        'XXAMXMXSXAXXAXMMSASXSSMMSSMMMXAAAAAMXMAMAMAXMMSAMXMMMMXMMMSAMAXMMMMMMXAASAMSSMMXSAXXAMMASAMXXMMAAMXMAASMSMSXSMMMSASXMASAMSASXSXMAMAMXAAXXAXA',
        'MSMSAMXAMASASXMXMAMAAAAMAMAAAMSSMSSMASXMSSMMAASAMASXMSAAAXMAMXMASASAXXMASAMXMSMAXMAMSAMASMMSMAMSXMAMMMMAMASAMMSMMASXMXMMXSASAAMXSSMSMMSSSSMM',
        'ASASXSAMXAMAMASAMAMMMSMMASMMSMXAXMAMASAAAAASMXSAMAXAAASXMXSAMSAMSASASXMASAMXAAMMSXAXMSMXMXAASAMAASXSAAMXMAMAMAAAMAMXMAMSAMSMMAMAMAMXAAAMAAAX',
        'SMAMMMMXAMMAMXSXSSXMAXXSMMXAMXSMMSAMXSXMSSMMMXSAMXSMMMXXSASXSXSAMXMMXMMXSXMMSMSXSMXSXXMASMSXSSSXMASMXXSAMXSMMSSSMXSXSXSMMSXMASMXSAMSMMSMSMMM',
    ]
}

console.log(findOccurrences(getProgramInput()))

// Part 2
// Find MAS in shape of an X in any pattern
// M.M   M.S   S.S   S.M
// .A.   .A.   .A.   .A.
// S.S   M.S   M.M   S.M
function searchCross(i: number, j: number, input: string[]): number {
    try {
        if (input[i - 1][j - 1] === 'M' && input[i - 1][j + 1] === 'M' &&
                            input[i][j] === 'A' &&
            input[i + 1][j - 1] === 'S' && input[i + 1][j + 1] === 'S') {
            return 1
        }

        if (input[i - 1][j - 1] === 'M' && input[i - 1][j + 1] === 'S' &&
                            input[i][j] === 'A' &&
            input[i + 1][j - 1] === 'M' && input[i + 1][j + 1] === 'S') {
            return 1
        }

        if (input[i - 1][j - 1] === 'S' && input[i - 1][j + 1] === 'S' &&
                            input[i][j] === 'A' &&
            input[i + 1][j - 1] === 'M' && input[i + 1][j + 1] === 'M') {
            return 1
        }

        if (input[i - 1][j - 1] === 'S' && input[i - 1][j + 1] === 'M' &&
                            input[i][j] === 'A' &&
            input[i + 1][j - 1] === 'S' && input[i + 1][j + 1] === 'M') {
            return 1
        }
        return 0
    } catch (_e: unknown) {
        return 0
    }
}

function findCrossOccurrences(input: string[]): number {
    let countCross = 0
    const rows = input.length
    const columns = input[0].length
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            //process.stdout.write(`x:${input[i][j]} `)
            if (input[i][j] === 'A') {
                countCross += searchCross(i, j, input)
            }
        }
        //console.log('')
    }

    return countCross
}

console.log(findCrossOccurrences(testInput))
console.log(findCrossOccurrences(getProgramInput()))

