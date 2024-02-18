//#######################################################

async function GenerateAccNumCode() {
  var accnum = 0;
  let numbers = '0123456789';

  for (let i = 0; i < 12; i++) {
    accnum = Number(numbers[Math.floor(Math.random() * 10)]);
  }
  return accnum;
}

//#######################################################

module.exports = { GenerateAccNumCode };
