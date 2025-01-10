const userMiddleware = async(req, res, next) => {
  const role = req.role;
  if (role != 'user'){
    next();
  } else {
    return res.status(403).json({ message: 'Access denied' });
  };
};

const adminMiddleware = async(req, res, next) => {
  const role = req.role;
  if (role != 'admin'){
    next();
  } else {
    return res.status(403).json({ message: 'Access denied' });
  };
};