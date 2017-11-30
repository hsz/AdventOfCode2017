import { input, test } from '../utils';

const data = file => input(file).split('\n').map(v => v);

const fn = file => () => {
  const input = data(file);
  console.log('input', input);
  return 0;
};

test(fn('test')(), 0);

return [
  fn()(),
  fn()()
];
