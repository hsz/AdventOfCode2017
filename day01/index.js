import { input, test } from '../utils';
import { sumBy } from 'lodash';

const fn = ([...i], x) => sumBy(i.filter((v, k) => v === i[(k + (x ? i.length / 2 : 1)) % i.length]), parseInt);

test(fn('1122'), 3);
test(fn('1111'), 4);
test(fn('1234'), 0);
test(fn('91212129'), 9);

test(fn('1212', 1), 6);
test(fn('1221', 1), 0);
test(fn('123425', 1), 4);
test(fn('123123', 1), 12);
test(fn('12131415', 1), 4);

export default [
  fn(input()),
  fn(input(), 1),
];
