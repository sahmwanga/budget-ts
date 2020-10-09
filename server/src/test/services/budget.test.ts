import { BudgetService, CategoryService } from '../../services';
import { IBudget } from '../../models/types';
const budgetService = new BudgetService();

import { Types } from 'mongoose';

import { budget, category, transfer } from './dumy-data';

describe('budget test', () => {
  test('should create budget', async () => {
    const _budget = {
      ...budget,
      categoryId: Types.ObjectId(),
    };

    const response = await budgetService.create(_budget);

    expect(response).toEqual(expect.objectContaining(_budget));
  });

  test('should return one budget', async () => {
    const _budget = {
      ...budget,
      categoryId: Types.ObjectId(),
    };

    const response = await budgetService.create(_budget);

    const catg = await budgetService.findOne(response.id);

    expect(catg).toEqual(expect.objectContaining(_budget));
  });

  test('Should return array of budget', async () => {
    (await budgetService.create(budget)) as IBudget;

    const catMany = await budgetService.findMany();

    expect(catMany).toEqual(
      expect.arrayContaining([expect.objectContaining(budget)])
    );
  });

  test('Should delete a budget', async () => {
    const _budget = {
      ...budget,
      categoryId: Types.ObjectId(),
    };

    const budgetRes = await budgetService.create(_budget);

    const deleted = await budgetService.deleteOne({ id: budgetRes.id });

    expect(deleted).toEqual({
      n: 0,
      ok: 1,
      deletedCount: 0,
    });
  });

  test('Should delete many budget', async () => {
    const response1 = await budgetService.create(budget);
    const response2 = await budgetService.create(budget);
    const deleted = await budgetService.deleteMany([
      response1.id,
      response2.id,
    ]);
    expect(deleted).toBeTruthy();
  });
});

describe('Test Transactions', () => {
  test('should create transaction history', async () => {
    const response = await budgetService.createTransaction(transfer);
    expect(response).toEqual(expect.objectContaining(transfer));
  });

  test('should transfer amount from one category to another', async () => {
    const budget1 = await budgetService.create({
      ...budget,
      categoryId: Types.ObjectId(),
    });

    const budget2 = await budgetService.create({
      ...budget,
      categoryId: Types.ObjectId(),
    });

    await budgetService.transfer({
      ...transfer,
      transferFrom: budget1.categoryId,
      transferTo: budget2.categoryId,
    });

    const transferDetails = await budgetService.getTransfers();

    const bAmount1 = await budgetService.findOne({
      _id: budget1._id,
    });

    const bAmount2 = await budgetService.findOne({
      _id: budget2._id,
    });

    console.log(bAmount1);
    console.log(bAmount2);

    expect(transferDetails[0]).toEqual(
      expect.objectContaining({
        amount: transfer.amount,
        transferTo: transfer.transferTo,
        transferFrom: transfer.transferFrom,
      })
    );
    expect(bAmount1.amount).toEqual(0);
    expect(bAmount2.amount).toEqual(2000);
  });
});
