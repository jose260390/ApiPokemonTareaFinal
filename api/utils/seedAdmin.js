const User = require('../models/user');
const bcrypt = require('bcryptjs');

const seedAdminUser = async () => {
  const email = 'admin@node.com';
  const plainPassword = '123456';

  const existing = await User.findOne({ where: { email } });
  if (!existing) {
    const hashed = await bcrypt.hash(plainPassword, 10);
    await User.create({ email, password: hashed });
    console.log('Usuario admin precargado');
  } else {
    console.log('Usuario admin ya existe');
  }
};

module.exports = seedAdminUser;
