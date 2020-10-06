import { BudgetService, CategoryService } from '../../services';
import { IBudget, ICategory } from '../../models/types';
const budgetService = new BudgetService();
const categoryService = new CategoryService();

import { Types } from 'mongoose';

import { budget, category } from './dumy-data';

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
      deleteCount: 0,
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
