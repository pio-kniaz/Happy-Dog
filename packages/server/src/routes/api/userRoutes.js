const express = require('express');

const router = express.Router();

const { createUser, userMe } = require('@/controllers/userController');
const { isAuth } = require('@/utils/jwt');

router.post('/register', createUser);
router.get('/me', isAuth, userMe);
router.get('/users', isAuth, (req, res) => res.status(200).json({
  data: [
    {
      janusz: req.userId,
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ],
}));

module.exports = router;
