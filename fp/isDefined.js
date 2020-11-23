var convert = require('./convert'),
    func = convert('isDefined', require('../isDefined'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
