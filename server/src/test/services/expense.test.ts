import { ExpenseService } from '../../services';
const expenseService = new ExpenseService();

import { expenses } from './dumy-data';

describe('Category test', () => {
  test('should create expense', async () => {
    const response = await expenseService.create(expenses);

    expect(response).toEqual(expect.objectContaining(expenses));
  });

  test('should return one expenses', async () => {
    const response = await expenseService.create(expenses);

    const catg = await expenseService.findOne(response.id);

    expect(catg).toEqual(expect.objectContaining(expenses));
  });

  test('Should return array of categories', async () => {
    await expenseService.create(expenses);

    const catMany = await expenseService.findMany();

    expect(catMany).toEqual(
      expect.arrayContaining([expect.objectContaining(expenses)])
    );
  });

  test('Should delete a expenses', async () => {
    const response = await expenseService.create(expenses);
    const deleted = await expenseService.deleteOne({ id: '1' });
    expect(deleted).toBeTruthy();
  });

  test('Should delete many expenses', async () => {
    const response1 = await expenseService.create(expenses);
    const response2 = await expenseService.create(expenses);
    const deleted = await expenseService.deleteMany([
      response1.id,
      response2.id,
    ]);
    expect(deleted).toBeTruthy();
  });
});
