/**
 * @param {number[][]} gird
 * @return {number}
 */
var equalPairs = function(grid) {
    const row = [];
    for(let i=0; i<grid.length; i++) {
        row[i] = [];
        for(let j=0; j<grid[0].length; j++) {
            row[i][j] = grid[j][i];
        }
    }
    for(let i=0; i<grid.length; i++) {
        grid[i] = grid[i].toString();
        row[i] = row[i].toString();
    }
    let count = 0;
    const map = new Map()
    for(const g of grid) {
        if(!map.has(g)) {
            map.set(g, 0);
        }
        map.set(g, map.get(g)+1);
    }
    for(const r of row) {
        if(map.has(r)) {
            count += map.get(r);
        }
    }

    return count;
};