abstract class Payment {
    public abstract createTransaction(): Transaction;

    public settleTransaction(): string {
        const transaction = this.createTransaction();
        return transaction.settle();
    }
}

class AmazonPay extends Payment {
    createTransaction(): Transaction {
        return new AmazonPayTransaction;
    }
}

interface Transaction {
    settle(): string;
}

class AmazonPayTransaction implements Transaction {
    settle(): string {
        return 'AmazonPay is succeeded.';
    }
}

console.log((new AmazonPay).settleTransaction())