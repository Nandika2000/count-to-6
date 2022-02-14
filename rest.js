module.exports = function average(...args) {
    var result = 0;
    var length=0;
    args.forEach(function (value) {
        result += value;
        length += 1;
    });
    return result/length;
};