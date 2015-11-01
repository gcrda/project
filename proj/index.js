var require   = require('rekuire'),
    path      = require('path'),
    generator = require('escodegen'),

    log       = console.log;

/*
log(generator.generate({
    type: 'BinaryExpression',
    operator: '+',
    left: { type: 'Literal', value: 40 },
    right: { type: 'Literal', value: 2 }
}));
*/

var root = path.resolve(__dirname, '../');

var project = {
    root : root,
    main : path.resolve(root, './src/project.js'),
    path : {
        root : root,
        src  : path.resolve(root, './src'),
        dist : path.resolve(root, './dist'),
        test : path.resolve(root, './test'),
        doc  : path.resolve(root, './doc')
    }
};

module.exports = project;