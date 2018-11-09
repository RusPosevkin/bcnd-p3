module.exports = async function get (req, res) {
    const Block = require('../../../classes/block'); 
    const Blockchain = require('../../../classes/blockchain'); 

    const {
        body: {
            body
        } = {}
    } = req;

    if (body && body.length) {
        const newBlock = new Block(body);
        Blockchain.getInstance()
            .then((instance) => instance.addBlock(newBlock))
            .then((instance) => instance.getBlockHeight())
            .then((height) => {
                Blockchain.getInstance()
                    .then((instance) => instance.getBlock(height-1))
                    .then((block) => {
                        return res.json(block);
                    })
                    .catch(() => {
                        return res.status(400).json({
                            reason: 'Bad request',
                            details: 'Block was not found'
                        });
                    });
            });
    } else {
        res.status(400).json({
            reason: 'Bad request',
            details: "There is no property 'body' in your request or this property is empty"
        });
    }
}