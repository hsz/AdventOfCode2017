import 'colors';
import yargs from 'yargs';

const { argv: { _: [d] } } = yargs.demand(1);
const day = `0${d}`.substr(-2);

process.chdir(`./day${day}`);

const [one, two] = require(`./day${day}`).default;

console.log('    Advent of Code    '.green.bgBlack);
console.log(('  ------- '.green + day.red + ' -------  '.green).bgBlack);
console.log('======================'.green.bgBlack);
console.log('');
console.log(` Part one: ${one}`);
console.log(` Part two: ${two}`);
console.log('');
