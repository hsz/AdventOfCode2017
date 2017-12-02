import { input, test } from '../utils';
import { max, min } from 'lodash';

const fn = n => input(n).split('\n').reduce((s, r, x) => (x = r.split(/\s+/).map(v => +v), s + max(x) - min(x)), 0);
const fn2 = n => input(n).split('\n').reduce((s, r, x) => {
  x = r.split(/\s+/).map(v => +v);
  x = x.reduce((s,v) => s.concat(x.map(vv => [v,vv])), []).find(([l,r]) => l !== r && l % r === 0);
  return s + max(x) / min(x);
}, 0);

test(fn('test1'), 18);
test(fn2('test2'), 9);

export default [
  fn(),
  fn2(),
];
