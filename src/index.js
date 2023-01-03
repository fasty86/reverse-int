module.exports = reverse;
function reverse(n) {
    n = Math.abs(n);
    let str = Array.from(n.toString());
    return Number(str.reverse().join(""));
}

// console.log(reverse(1234));
