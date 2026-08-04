exports.reverse = (s) => String(s).split('').reverse().join('');

exports.unique = (a) => [...new Set(a)];
