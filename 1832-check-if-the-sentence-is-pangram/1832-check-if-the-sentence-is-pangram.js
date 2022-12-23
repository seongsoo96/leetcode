/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const map = new Map();
    for(let i=0; i<alphabet.length; i++) {
        map.set(alphabet[i], 0);
    }
    for(let i=0; i<sentence.length; i++) {
        map.set(sentence[i], 1);
    }
    for(let i=0; i<alphabet.length; i++) {
        if(map.get(alphabet[i]) === 0) {
            return false;
        }
    }
    return true;
};