const bcrypt = require('bcrypt');

// Improved hashPassword function with descriptive argument name and higher salt rounds
export const hashPassword = (password) => {
  // Increase salt rounds for enhanced security
  const saltRounds = 12;

  return bcrypt.hashSync(password, saltRounds);
};

export const comparePasswords = (hashedPassword, plainPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};
