const sum = require('./sum');

const product = (a, b) => {
  let answer = 0;

  for (let i = 0; i < a; i++) {
    answer = sum(answer, b);
  }

  return answer;
};


module.exports = product;
