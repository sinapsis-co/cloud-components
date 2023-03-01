import { Transaction, TransactionCreate } from '../../entities';
import { transactionRepo } from '../../repository';

export const handler = async ({
  transaction,
  id,
  tenantId,
  status,
  userId,
}: {
  transaction: Partial<TransactionCreate>;
  tenantId: string;
  id: string;
  status: Transaction['status'];
  userId: string;
}): Promise<Transaction> => {
  return await transactionRepo.updateItem(
    {
      id,
      tenantId,
      orderId: transaction.orderId as string,
    },
    { ...transaction, status, userId }
  );
};
