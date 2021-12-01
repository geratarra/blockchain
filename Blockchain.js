import Block from './Block';

class Blockchain {
    constructor() {
        // Blocks.
        this.chain = [new Blockchain(Date.now().toString())];
    }

    getLastBlock() {
        return this.chain.at(-1);
    }

    addBlock(block) {
        block.previousHash = this.getLastBlock().hash;
        block.hash = block.getHash();
        this.chain.push(Object.freeze(block));
    }

    isValid(blockchain = this) {
        for (let i = 1; i < blockchain.chain.length; i++) {
            const currentBlock = blockchain.chain[i];
            const previousBlock = blockchain.chain[-1];

            // Check validation
            if (currentBlock.hash !== currentBlock.getHash() || previousBlock.hash !== currentBlock.previousHash) {
                return false;
            }
        }
        return true;
    }
}