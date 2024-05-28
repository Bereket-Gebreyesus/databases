const transfer = async (client, fromAccountNumber, toAccountNumber, amount, remark) => {
  const database = client.db('databaseWeek4');
  const accounts = database.collection('accounts');

  const session = client.startSession();

  try {
    session.startTransaction();

    const fromAccount = await accounts.findOne({ account_number: fromAccountNumber }, { session });
    const toAccount = await accounts.findOne({ account_number: toAccountNumber }, { session });

    if (!fromAccount || !toAccount) {
      throw new Error('One or both accounts not found');
    }

    if (fromAccount.balance < amount) {
      throw new Error('Insufficient funds');
    }

    await accounts.updateOne(
      { account_number: fromAccountNumber },
      {
        $inc: { balance: -amount },
        $push: {
          account_changes: {
            change_number: fromAccount.account_changes.length + 1,
            amount: -amount,
            changed_date: new Date(),
            remark
          }
        }
      },
      { session }
    );

    await accounts.updateOne(
      { account_number: toAccountNumber },
      {
        $inc: { balance: amount },
        $push: {
          account_changes: {
            change_number: toAccount.account_changes.length + 1,
            amount: amount,
            changed_date: new Date(),
            remark
          }
        }
      },
      { session }
    );

    await session.commitTransaction();
    console.log('Transfer completed successfully');
  } catch (error) {
    await session.abortTransaction();
    console.error('Transfer failed:', error);
  } finally {
    session.endSession();
  }
};

module.exports = transfer;