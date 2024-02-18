//##############################################################

function generateOTP() {
  let OTP = 0;
  let numbers = '0123456789';
  let limit = 5;

  for (let index = 0; index < limit; index++) {
    OTP += Number(numbers[Math.floor(Math.random() * 10)]);
  }

  return OTP;
}

//##############################################################
export { generateOTP };
