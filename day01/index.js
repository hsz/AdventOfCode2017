import { input, test } from '../utils';
import { sumBy } from 'lodash';

const fn = n => (x, i = input(n).split('')) => sumBy(i.filter((v, k) => v === i[(k + (x ? i.length / 2 : 1)) % i.length]), parseInt);

test(fn('test1')(), 3);
test(fn('test2')(), 4);
test(fn('test3')(), 0);
test(fn('test4')(), 9);

test(fn('test5')(1), 6);
test(fn('test6')(1), 0);
test(fn('test7')(1), 4);
test(fn('test8')(1), 12);
test(fn('test9')(1), 4);

export default [
  fn()(),
  fn()(1),
];
