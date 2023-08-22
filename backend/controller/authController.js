// import authProvider from "../auth/AuthProvider";

import authProvider from "../auth/AuthProvider";

const signIn = async (req, res, next) => {
  return authProvider.login(req, res, next);
};

const handleRedirect = async (req, res, next) => {
  return authProvider.handleRedirect(req, res, next);
};

const signOut = async (req, res, next) => {
  return authProvider.logout(req, res, next);
};

const authController = {
  signIn,
  signOut,
  handleRedirect,
};

export default authController;
