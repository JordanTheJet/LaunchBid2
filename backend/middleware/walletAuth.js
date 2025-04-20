const { ethers } = require('ethers');

const NONCE = 'Verify you own this wallet';

module.exports = function (req, res, next) {
  const { address, signature } = req.body;

  if (!address || !signature) {
    return res.status(401).json({ error: 'Missing signature' });
  }

  try {
    const recovered = ethers.utils.verifyMessage(NONCE, signature);
    if (recovered.toLowerCase() !== address.toLowerCase()) {
      return res.status(403).json({ error: 'Invalid signature' });
    }

    next();
  } catch (err) {
    return res.status(400).json({ error: 'Signature verification failed' });
  }
};
