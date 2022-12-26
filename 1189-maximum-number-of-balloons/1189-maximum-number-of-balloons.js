/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = new Map();
    map.set('b', 0);
    map.set('a', 0);
    map.set('l', 0);
    map.set('o', 0);
    map.set('n', 0);
    for(const t of text) {
        switch(t) {
            case 'b' :
                map.set('b', map.get('b')+1);
                break;
            case 'a' :
                map.set('a', map.get('a')+1);
                break;
            case 'l' :
                map.set('l', map.get('l')+1);
                break;
            case 'o' :
                map.set('o',  map.get('o')+1);
                break;
            case 'n' :
                map.set('n', map.get('n')+1);
                break;
        }
    }
    map.set('l', map.get('l')/2);
    map.set('o', map.get('o')/2);
    
    const values = map.values();
    const arr = [];
    for(const v of values) {
        arr.push(v);
    }
    
    arr.sort((a,b) => a-b);
    return Math.floor(arr[0]);
};