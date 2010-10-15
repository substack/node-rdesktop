var tpdu = require('rdesktop/tpdu');
var Hash = require('traverse/hash');

exports.codes = function (assert) {
    Hash(tpdu.codes).forEach(function (patterns, code) {
        patterns.forEach(function (pat) {
            var begin = parseInt(pat.replace(/x/g,'0'), 2);
            var end = parseInt(pat.replace(/x/g,'1'), 2);
            for (var i = begin; i <= end; i++) {
                var c = tpdu.fromByte(i)
                assert.equal(code, code);
                var b = tpdu.toByte(code, i - begin);
                if (code != 'NA') assert.equal(b, i);
            }
        })
    });
};
