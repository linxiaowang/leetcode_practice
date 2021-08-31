

/**
 * @param {number} x
 * @return {boolean}
 */

 // 转字符串数组，不转数组用字符串也可以，但执行速度并没有加快 
 var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    if(x >= 0 && x < 10){
        return true
    }
    let arr = x.toString().split('')
    for(let i = 0; i < ~~(arr.length / 2); i++){
        if(arr[i] !== arr[arr.length - i - 1]){
            return false
        }
    }
    return true
};

