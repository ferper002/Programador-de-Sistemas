console.log("3 7 9 10 13".split(' ').map(Number).reduce ((a, n , _i, L) => a + n / L.length, 0));