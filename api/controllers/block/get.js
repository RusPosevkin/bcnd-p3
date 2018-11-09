module.exports = async function get (req, res) {
    const Blockchain = require('../../../classes/blockchain');
    const height = req.param('height');
    const blockchain = new Blockchain(); 

    // blockchain.getBlock(height)
    Blockchain.getInstance()
        .then((instance) => instance.getBlock(height))
        .then(block => res.json(block))
        .catch(() => res.status(400).json({
            reason: 'Bad request',
            details: 'Block was not found'
        }));
}