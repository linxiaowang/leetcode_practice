// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。

// 转字符串
var reverse = function(num){
    if(!num){
        return 0
    }
    let result =  parseInt(num.toString().split('').reverse().join(''))
    result = num < 0 ? -result : result
    if(result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1){
        return 0
    }
    return result
}

// 取余
var reverse1 = function(x) {
    let res = 0;
    while(x){
        res = res * 10 + x % 10;
        if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
        x = ~~(x / 10);
    }
    return res;
};

// 取余+位运算
var reverse2 = function(x) {
    let result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};

