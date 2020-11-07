const express = require('express');

const router = express.Router();
const { login, logOut, refreshToken } = require('@/controllers/authController');
const { isAuth } = require('@/utils/jwt');

router.post('/login', login);
router.post('/logout', isAuth, logOut);
router.post('/refresh-token', refreshToken);

module.exports = router;
