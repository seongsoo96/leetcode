/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var needleLength = needle.length
  var haystackLength = haystack.length

  if(needle === '' && haystack === '' ){
    return 0
  }

  for(var i=0; i < haystackLength; i++){
    if (haystack.substr(i, needleLength) === needle){
      return i
    }
  }
  return -1
};