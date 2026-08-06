exports.reverse = (s) => String(s).split('').reverse().join('');

exports.unique = (a) => [...new Set(a)];

exports.clamp = (v, lo, hi) => Math.max(lo, Math.min(v, hi));

exports.chunk = (a, n) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, i * n + n));

exports.sum = (a) => a.reduce((x, y) => x + y, 0);
