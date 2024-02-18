const jwt = require('jsonwebtoken');
require('dotenv').config();

//#####################################################

export const generateToken = (user) => {
  const token = jwt.sign(
    {
      _id: user.data._id,
      username: user.data.username,
      email: user.data.email,
      role: user.data.role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '30d' },
  );
  return token;
};

//#####################################################

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  return decoded;
};
