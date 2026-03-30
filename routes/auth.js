const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('../data/users');

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: test@test.com
 *             password: 123456
 *     responses:
 *       200:
 *         description: User registered
 */
// REGISTER (accept anything)
router.post('/register', (req, res) => {
  const { email, password } = req.body;

  const user = {
    id: Date.now().toString(),
    email,
    password, // ⚠️ storing plain text (only for demo)
  };

  users.push(user);

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'User registered',
    user_id: user.id,
    email: user.email,
    password: user.password,
    token,
  });
});

// LOGIN (no strict validation)
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: test@test.com
 *             password: 123456
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // find matching user (or just take first match)
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '12h' }
  );

  res.json({
    message: 'Login successful',
    user_id: user.id,
    email: user.email,
    password: user.password, // ⚠️ exposing password (demo only)
    token,
  });
});

module.exports = router;