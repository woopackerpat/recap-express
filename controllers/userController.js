const resetPassword = (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const login = (req, res, next) => {
  try {
      res.json({message: 'login success'})
  } catch (err) {
    next(err);
  }
};

const register = (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const updateUser = (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = { resetPassword, login, register, updateUser };
