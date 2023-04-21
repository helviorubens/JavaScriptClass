/**
 * Como filtrar um array 2D e obter um sub-array a partir de dados de intervalo.
 */

const arr2D = [['A','B','C'],['D','E','F'],['G','H','I'],['J','K','L']]
console.table(arr2D)

const subArr = {
    row: 1,
    col: 1,
    height: 2,
    width: 1
}

function filter2D({row, col, height=1, width=1}){
    const startRow = row - 1
    const finishRow = height + startRow
    const startCol = col - 1
    const finishCol = width + startCol

    console.log(`ROW - start: ${startRow} e finish: ${finishRow}`)
    console.log(`COL - start: ${startCol} e finish: ${finishCol}`)

    const data = arr2D
        .slice(startRow, finishRow)
        .map(arr => arr.slice(startCol, finishCol))
    return data
}

console.table(filter2D(subArr))