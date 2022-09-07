const fibonacci = function(n, a = 1, b = 1) {
    if (n == 1)
        return a;
    else if (n <= 0)
        return 'OOPS';
        
    return fibonacci(n - 1, b, a + b);
};

// Do not edit below this line
module.exports = fibonacci;
