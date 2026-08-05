exports.reverse = (s) => String(s).split('').reverse().join('');

exports.unique = (a) => [...new Set(a)];

exports.clamp = (v, lo, hi) => Math.max(lo, Math.min(v, hi));
